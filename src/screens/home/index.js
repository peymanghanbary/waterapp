import React, { useEffect, useState,useRef } from 'react';
import { ImageBackground, StyleSheet,Animated, Easing, View } from 'react-native';
import { Box, Image, VStack } from 'native-base';
import { calcImageHeight } from '../../components/helpers';
import { widths } from '../../styles/style';

const HomeIndex = ({navigation}) => {

  const [state,setState]=useState({Consumido: 0});

  const w=widths.W/2.5;
  const h=calcImageHeight(602,1280,w);

  const animatedValue1 = new Animated.Value(0);
  const animatedValue2 = new Animated.Value(0);
  const animatedValue3 = new Animated.Value(0);
  
    useEffect(() => {
      // water 1
      Animated.loop(
        Animated.sequence(
          [
            Animated.timing(animatedValue1, {
              toValue: 1,
              duration: 2000,
              easing: Easing.linear.inOut,
              useNativeDriver: true,
            }),
            Animated.timing(animatedValue1, {
              toValue: 0,
              duration: 2000,
              easing: Easing.linear.inOut,
              useNativeDriver: true,
            })
          ]
        )
      ).start();
      // water 2
      Animated.loop(
        Animated.sequence(
          [
            Animated.timing(animatedValue2, {
              toValue: 1,
              duration: 2000,
              easing: Easing.linear.inOut,
              useNativeDriver: true,
            }),
            Animated.timing(animatedValue2, {
              toValue: 0,
              duration: 2000,
              easing: Easing.linear.inOut,
              useNativeDriver: true,
            })
          ]
        )
      ).start();
      // water 2 Y
      Animated.loop(
        Animated.sequence(
          [
            Animated.timing(animatedValue3, {
              toValue: 1,
              duration: 3000,
              easing: Easing.linear.inOut,
              useNativeDriver: true,
            }),
            Animated.timing(animatedValue3, {
              toValue: 0,
              duration: 3000,
              easing: Easing.linear.inOut,
              useNativeDriver: true,
            })
          ]
        )
      ).start();
    });
  
    const translateX1 = animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [-30, 2],
    });
  
    const translateX2 = animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [-30, 2],
    });
    const translateY1 = animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [-10, 15],
    });


    console.log('h',10*h/100);

  return (
    <VStack justifyContent={'center'} alignItems={'center'} flex={1} bg={'white'}>

      <ImageBackground imageStyle={{overflow:'hidden',zIndex:10}} style={{width:w,height:h,backgroundColor:'#fff',overflow:'hidden'}} source={require('../../images/glass.png')}>
        <View style={{flex:1,transform:[{translateY:20}]}}>
          <Animated.Image style={{width:'130%',height:'100%',position:'absolute',left:0,transform: [{ translateX: translateX1 }]}} alt='water1' source={require('../../images/water1.png')}/>
          <Animated.Image style={{width:'130%',height:'100%',position:'absolute',left:0,transform: [{ translateX: translateX2 },{translateY:translateY1}]}} alt='water1' source={require('../../images/water2.png')}/>
        </View>
      </ImageBackground>
      
    </VStack>
  )

};

export default HomeIndex;