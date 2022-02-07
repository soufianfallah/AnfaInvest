import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
const {width} = Dimensions.get('screen');
const trinidad = require('../screens/assets/trinidadimage.jpg');
const Basilico = require('../screens/assets/Emueble4.jpg');
const Panama = require('../screens/assets/Emueble2.jpg');
const bossanova = require('../screens/assets/Emueble3.jpg');
const Beluga = require('../screens/assets/Emueble.jpg');
const studio = ({navigation}) => {
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <Icon name="sort" size={28} color={COLORS.primary} />
        <Image style={{resizeMode: 'contain', width:160,alignSelf:'center',marginLeft:50}}
        
    source={require('../../assets/logo.png')}
  />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style.sectionTitle}>STUDIOS </Text>
        <View  style={style.view1}>
          <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Trinadad')}>
        <ImageBackground style={style.cardImage} source={trinidad}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
               shadowOpacity:1,
               alignSelf:'center',
               fontWeight:'900'
            }}>
            Trinidad
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="place" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5, color: COLORS.white,shadowOpacity:1,fontWeight:'900'}}>
                Palmiers
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="home" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5,top:2 ,color: COLORS.white ,shadowOpacity:1,fontWeight:'900' }}>7</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
{/*********************************** */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Basilico')}>
        <ImageBackground style={style.cardImage} source={Basilico}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
               shadowOpacity:1,
               alignSelf:'center',
               fontWeight:'900'
            }}>
            Basilico
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="place" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5, color: COLORS.white,shadowOpacity:1,fontWeight:'900'}}>
                CIL
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="home" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5,top:2 ,color: COLORS.white ,shadowOpacity:1,fontWeight:'900' }}>28</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
        
        </View>
        <View  style={style.view1}>
          <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Panama")}>
        <ImageBackground style={style.cardImage} source={Panama}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
               shadowOpacity:1,
               alignSelf:'center',
               fontWeight:'900'
            }}>
            Panama
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="place" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5, color: COLORS.white,shadowOpacity:1,fontWeight:'900'}}>
                Racine
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="home" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5,top:2 ,color: COLORS.white ,shadowOpacity:2 ,fontWeight:'900'}}>22</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Bossanova")}>
        <ImageBackground style={style.cardImage} source={bossanova}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
               shadowOpacity:1,
               alignSelf:'center',
               fontWeight:'900'
            }}>
            Bossa Nova
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="place" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5, color: COLORS.white,shadowOpacity:1,fontWeight:'900'}}>
                Gauthier
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="home" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5,top:2 ,color: COLORS.white ,shadowOpacity:1,fontWeight:'900' }}>10</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
        
        </View>
        <Text style={style.sectionTitle}>BUREAUX</Text>
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate()}>
        <ImageBackground style={style.cardImage} source={Beluga}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
               shadowOpacity:1,
               alignSelf:'center',
               fontWeight:'900'
            }}>
            Beluga
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="place" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5, color: COLORS.white,shadowOpacity:1,fontWeight:'900'}}>
                CIL
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="home" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5,top:2 ,color: COLORS.white ,shadowOpacity:1 ,fontWeight:'900'}}>26</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
  
    backgroundColor: COLORS.white,
    height:70,
    borderBottomWidth:.5,
    borderColor:COLORS.primary
  },
  view1:{
    flexDirection:'row',
    
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },

  sectionTitle: {
    marginTop:20,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf:'center',
    color:COLORS.primary,
  },
  cardImage: {
    height: 220,
    width: width / 2.3,
    marginRight: 20,
    marginTop:20,
    marginLeft:10,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
    
  },

});
export default studio;
