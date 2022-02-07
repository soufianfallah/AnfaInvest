import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import colors from './colors';
const sidelogo =require('./assets/trinidadlogo.png');
const wtsp =require('./assets/wtsp.png');
const pin =require('./assets/pin.jpg');
const TdetailsScreen = ({navigation, route}) => {
  const trinidadetages = route.params;
  return (
    
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white,}}>
    
      <StatusBar  translucent={false} backgroundColor={COLORS.primary}/>
      
      <View style={{height:'100%',}} >
      <View style={{
              flexDirection:'row',
              marginTop:7,
              borderBottomWidth:.3,
              borderColor:colors.primary
            }}>
      <TouchableOpacity
      style={{width:100,height:60,}}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={45} style={styles.iconback} />
          
        </TouchableOpacity>
        <Image style={{resizeMode: 'contain',width:170,}}
        
        source={require('../../assets/logo.png')}
      />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.infoWrapper}>

      <View>
        <View style={{
              flexDirection:'row',
              marginVertical:5,
            }}>
        <Text style={{
             color:colors.grey,
             fontSize:15,
             fontWeight:'500',
            }}>STUDIO </Text>

          <Text style={{
             color:colors.primary,
             fontSize:15,
             fontWeight:'600',
            }}>{trinidadetages.numero} </Text>
        </View>
        <View style={{
              flexDirection:'row',
              
            }}>
        <Text style={{
              color:colors.grey,
              fontSize:15,
             fontWeight:'600',

            }}>ÉTAGE </Text>
          <Text style={{
             color:colors.primary,
             fontSize:15,
             fontWeight:'600',
            }}>{trinidadetages.etage} </Text>
             
        </View>
        <Image style={styles.miniplan} source={trinidadetages.image}>
          
          </Image>
      </View>
      <View style={{
              
              marginVertical:5,
              
            }}>
            <View style={{left:60}}>
      <View style={{
              flexDirection:'row',
              marginVertical:1,
            }}>
        <Text style={styles.infotitle}>    SURFACE  </Text>
          <Text style={{
             color:colors.primary,
             fontSize:17,
             fontWeight:'600',
             
            }}>{trinidadetages.surface} </Text>
        </View>
        <View style={{
              flexDirection:'row',
              marginVertical:1,
            }}>
        <Text style={styles.infotitle}>     PARKING  </Text>
          <Text style={{
             color:colors.primary,
             fontSize:17,
             fontWeight:'600',
            }}>{trinidadetages.parking} </Text>
        </View>         
        <View style={{
              flexDirection:'row',
              marginVertical:1,
            }}>
        <Text style={styles.infotitle}>  TERRASSE  </Text>
          <Text style={{
             color:colors.primary,
             fontSize:17,
             fontWeight:'600',
            }}>{trinidadetages.terrasse} </Text>
        </View>
        </View>
        <View style={{
             backgroundColor:colors.primary ,
              height:35,
              width:190,
              alignContent:'center',
              marginVertical:5,
              marginHorizontal:10,
            }}>
        <Text style={{
             color:colors.white ,
              alignSelf:'center',
              marginTop:7,
              fontWeight:'900',
              fontSize:15,
            }}>{trinidadetages.price} </Text>
        </View>
       
      </View>
      </View>
      <View>
      <Image style={styles.imageplan} source={trinidadetages.image}>
          
          </Image>
      </View>
      <View style={{
              flexDirection:'row',
              justifyContent:'space-between',
              marginHorizontal:15,
              marginTop:30
            }}>
            <View>
            <Image style={styles.sidelogo} source={sidelogo}>
          
          </Image>
            </View>
            <View style={{
              flexDirection:'row',
              top:25,
            }} >
              <TouchableOpacity onPress={ ()=>{Linking.openURL('https://wa.me/+212772267722')}} >
                  <ImageBackground source={wtsp} style={styles.wtspbutt}></ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={ ()=>{Linking.openURL('https://www.google.com/maps/dir//33.570858,-7.652266/@33.5707313,-7.7223751,12z/data=!4m2!4m1!3e0')}} >
                  <ImageBackground source={pin} style={styles.pinpbutt}></ImageBackground>
              </TouchableOpacity>
              
            </View>

      </View>
      
      </ScrollView>
      </View>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  
  iconback:{
      color:colors.primary,
      paddingHorizontal:11,
      paddingTop:6
  },
  infoWrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:15,
    marginVertical:20,
  },
  infotitle:{
    color:colors.grey,
    fontSize:17,
    fontWeight:'500',
  },
  imageplan:{
    resizeMode:'contain',
    width:200,
    height:350,
    borderWidth:1,
    alignSelf:'center',
  },
  miniplan:{
    resizeMode:'contain',
    width:100,
    height:130,
    borderWidth:1,
    marginTop:10
  },
  sidelogo:{
    width:150,
    height:110,
    resizeMode:'contain',
    
  },
  wtspbutt:{
    width:70,
    height:70,
    resizeMode:'contain',
    
  },
  pinpbutt:{
    width:58,
    height:58,
    resizeMode:'contain',
    top:5,
  }
});

export default TdetailsScreen;
