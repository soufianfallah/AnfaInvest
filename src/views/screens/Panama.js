import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Linking,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from './colors'
import COLORS from '../../consts/colors';
import { Video } from 'expo-av';
import PanamaStudios from '../../consts/PanamaStudios';
const panama = require('../screens/assets/Emueble2.jpg');
const map = require('../screens/assets/trinidadmap.png');
const waze = require('../screens/assets/waze.png');
const go = require('../screens/assets/go.png');
const website = require('../screens/assets/website.png');
const architecte = require('../screens/assets/mariam-ammor-architecte-hd.png');
const whatsapp = require('../screens/assets/wtsp.png');
const media = require('./assets/Trinidad-Témoin-VF.mp4');


const {width} = Dimensions.get('screen');
const Panama = ({route, navigation}) => {
  const Card = ({panamaetages}) => {
    return (
      <TouchableOpacity
      style={styles.cardImage}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('PanamaDetails', panamaetages)}>
        <View style={{flexDirection:'row'}} >
        <View>
          <Text
            style={{
              color: COLORS.primary,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {panamaetages.price}
          </Text>
          <Text
            style={{
              color: COLORS.primary,
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 2,
            }}>
            {panamaetages.surface}
          </Text>
          <Text
            style={{
              color: COLORS.primary,
              fontSize: 13,
              fontWeight: 'bold',
              marginTop: 2,
            }}>
            {panamaetages.etage}
          </Text>
          </View>
      
          </View>
          <Text
            style={{
              color: COLORS.primary,
              fontSize: 13,
              fontWeight: 'bold',
              marginTop: 2,
               
            }}>
            {panamaetages.numero}
          </Text>
      </TouchableOpacity>
    );
  };
  const video = React.useRef(null);
  return (
    
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <ImageBackground source={panama} style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>Panama</Text>
          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={24} color={colors.white} />
            <Text style={styles.locationText}>Racine – Casablanca</Text>
          </View>
        </View>
      </ImageBackground>
      
      <View style={styles.descriptionWrapper}>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <View style={{flexDirection:'row',width:276,justifyContent:'space-between'}} >

          <Image source={architecte} style={styles.archpic} >

</Image>
          <Text style={styles.descriptionText}>     Le projet panama se situe au coeur {'\n'}     du quartier Palmier, à l’arrière du{'\n'}     quartier des affaires Abdelmoumen{'\n'}     hassan 2,à proximité de toutes les {'\n'}     commodités. 
</Text>
</View>
        <Text style={{alignSelf:'center'}}>
        Mariam Ammor – Architecte 
        </Text>

      

        </View>

        <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>ÉTAGES</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>5</Text>
              
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>DISPONIBILITÉS</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>7</Text>
              
            </View>
            
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PARKING </Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>Non</Text>
              
            </View>
          </View>
          
        </View>
      
      
      </View>
      <Text style={styles.sectionTitle}>LES STUDIOS PANAMA</Text>
      <View style={{width:'100%',alignSelf:'center',height:212,borderWidth:1}}>
      {/* <Video
        ref={video}
        style={{flex:1,alignSelf:'stretch',}}
        source={media}
        useNativeControls
        resizeMode="contain"
        shouldPlay
        isMuted
        isLooping
      /> */}
      </View>
     <Text style={styles.sectionTitle}>STUDIOS PAR ÉTAGE  </Text>
        <View>
          <FlatList
            contentContainerStyle={{paddingLeft: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={PanamaStudios}
            renderItem={({item}) => <Card panamaetages={item} />}
          />
          
        </View>
    
        <Text style={styles.sectionTitle}>Localisation</Text>
        <Text style={styles.adress}>Angle rue Ahmed Nassiri et rue Saria Ibnou Zounaim</Text>
        <Text style={styles.adressTitle}>Palmiers – Casablanca</Text>
        <Image style={styles.sectionMap} source={map}>
          
        </Image>
        <View style={styles.butt}>
        <TouchableOpacity
        style={styles.mapbutton}
        onPress={ ()=>{Linking.openURL('http://awany.dev-wbk.com/trinidad-palmiers/')}}>
        
        <Image source={website} style={styles.wtsp}>
        </Image>
      </TouchableOpacity>
        <TouchableOpacity
        style={styles.mapbutton}
        onPress={ ()=>{Linking.openURL('https://www.google.com/maps/dir//33.570858,-7.652266/@33.5707313,-7.7223751,12z/data=!4m2!4m1!3e0')}}>
        
        <Image source={go} style={styles.waze}>
        </Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mapbutton}
        onPress={ ()=>{Linking.openURL('https://www.waze.com/ul?ll=33.570858%2C-7.652266&amp;navigate=yes&amp;zoom=17')}}>
        
        <Image source={waze} style={styles.waze}>
        </Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mapbutton}
        onPress={ ()=>{Linking.openURL('https://wa.me/+212772267722')}}>
        <Image source={whatsapp} style={styles.wtsp}>
        </Image>
      </TouchableOpacity>
      </View>
        
    </View>
    </ScrollView>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: 490,
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    
    fontSize: 32,
    color: colors.white,
    fontWeight:'500',
    shadowOpacity:1
  },
  cardImage: {
    height: 100,
    width: width / 3,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
    borderWidth:1,
    borderColor:colors.primary,
    backgroundColor:'#f0f0f3',
    
    
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    
    fontSize: 16,
    color: colors.white,
    fontWeight:'700',
    shadowOpacity:1
  },

  archpic:{
    width:80,
    height:80,
    left:10,
    top:9,
    borderWidth:1,
    borderRadius:50,
    borderColor:colors.primary,
    alignSelf:'center'
  },
  descriptionTextWrapper: {
    marginTop: 30,
    
  },
  descriptionTitle: {
    marginLeft:30,
    fontSize: 24,
    color: colors.black,
  },
  descriptionText: {
    marginTop: 20,
    fontSize: 16,
    color: colors.darkGray,
    height: 100,
    alignSelf:'center',
    
  },
  infoWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  infoItem: {},
  infoTitle: {
    fontSize: 12,
    color: colors.gray,
    
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  infoText: {
    fontSize: 24,
    color: colors.primary,
    
  },
  infoSubText: {
    fontSize: 14,
    color: colors.gray,
  },
  butt:{
    flexDirection:'row',
    justifyContent: 'space-around',
    marginVertical:20,
    alignContent:'center',
    alignItems:'center'
  },


  mapbutton:{
    width:60,
    height:60,
    backgroundColor:'#f0f0f3',
    borderRadius:20,
    shadowOpacity:.3,
    shadowRadius:50,
    borderWidth:1,
    borderColor:colors.primary,
    alignContent:'center'
  },
 
  sectionTitle: {
    marginVertical:20,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf:'center',
    color:colors.primary,
    
  },
  adress:{
    fontSize: 15,
    alignSelf:'center',
    color:colors.grey,
    bottom:10
  },
  adressTitle:{
    alignSelf:'center',
    color:colors.grey,
  },
  sectionMap:{
    resizeMode:'cover',
    width:'100%',
    height:350,
    alignSelf:'center',
    borderWidth:1,
    borderColor:colors.primary,
    marginVertical:10,
  },
  waze:{
      width:35,
      height:35,
      resizeMode:'contain',
      alignSelf:'center',
      marginVertical:12,
      
  },
  wtsp:{
    width:50,
    height:50,
    resizeMode:'contain',
    alignSelf:'center',
    marginVertical:4

}
});

export default Panama;
