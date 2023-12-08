import React, { useEffect, useState,useRef } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Box, Button, Image, Text, View, VStack } from 'native-base';
import Svg, { Path,Text as SvgText,Image as SvgImage} from 'react-native-svg';
import { calcImageHeight } from '../../components/helpers';

const HomeIndex = ({navigation}) => {

  const [state,setState]=useState({Consumido: 0, Mensagem: 'Baixo', pct: 0});

  useEffect(()=>{

  },[])

  return (
    <VStack justifyContent={'center'} alignItems={'center'} flex={1} bg={'white'}>
       
      {/* <Svg width="151" height="320" viewBox="0 0 151 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <SvgText x="-2.5" y="125" text-anchor="bottom" fontWeight="bold" fill="black">
          New
        </SvgText>
        <SvgImage
          x="5%"
          y="5%"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          opacity="0.5"
          href={require('../../images/waterbg.png')}
          clipPath="url(#clip)"
        />
        <Path d="M0.968134 21.3375C0.193358 10.068 9.12614 0.5 20.4222 0.5H130.711C141.959 0.5 150.875 9.99026 150.173 21.2164L132.673 301.216C132.031 311.494 123.508 319.5 113.211 319.5H39.6722C29.4217 319.5 20.9212 311.564 20.2181 301.337L0.968134 21.3375Z" stroke="black"/>
      </Svg> */}

      <ImageBackground imageStyle={{overflow:'hidden',borderWidth:2,zIndex:10}} style={{width:200,height:calcImageHeight(602,1280,200),backgroundColor:'#fff'}} source={require('../../images/glass.png')}>
        <Box style={{backgroundColor:'white',position:'absolute',left:0,bottom:0,width:'100%',height:'100%'}}/>
        <Image source={require('../../images/waterbg.png')} width={'100%'} height={'100%'}/>
      </ImageBackground>
      
    </VStack>
  )

};

const styles = StyleSheet.create({
  starsix: {
    width: 100,
    height: 100
  },
  starSixUp: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red'
  },
  starSixDown: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderTopWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'red',
    position: 'absolute',
    top: 25,
    left:0 
  }
});

export default HomeIndex;