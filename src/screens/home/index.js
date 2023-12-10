import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { ImageBackground, Animated, Easing, Pressable, TouchableOpacity,Text as RText } from 'react-native';
import { HStack, Image, Text, VStack } from 'native-base';
import { calcImageHeight, getData, is_null, percentageOf, storeData } from '../../components/helpers';
import { fonts, widths } from '../../styles/style';
import { Feather } from '@expo/vector-icons';
import { isFunction } from 'lodash';

let percentage=0;
const HomeIndex = ({navigation}) => {

  const handlePercentage=(value)=>{
    let p=(value)*h/100;
    return h-p
  }

  const w=widths.W/2.5;
  const h=calcImageHeight(602,1280,w);

  const animatedValue1 = new Animated.Value(0);
  const animatedValue2 = new Animated.Value(0);
  const animatedValue3 = new Animated.Value(0);
  const animatedValuePercentage = new Animated.Value(handlePercentage(percentage));
  const counterRef=useRef(0)
  const literRef=useRef(0)
  
    useEffect(() => {

      getData('waterGlass').then((data)=>{
        if(!is_null(data)){
          setGlassPercentage(data.percentage,data.litrs)
        }
      })

    },[])

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

    const setGlassPercentage=(val,litrs)=>{

      let toValue=Math.floor(handlePercentage(val))
      percentage=val
      Animated.timing(animatedValuePercentage, {
        toValue,
        duration: 1000,
        easing: Easing.linear.inOut,
        useNativeDriver: true,
      }).start()

      counterRef.current.setText(val)
      literRef.current.setText(litrs)

      storeData('waterGlass',{percentage:val,litrs})

    }

  return (
    <VStack space={12} pt={0} alignItems={'center'} justifyContent={'center'} flex={1} bg={'white'}>

      <VStack space={4} mt={-10} alignItems={'center'}>
        <Liter ref={literRef}/>
        <ImageBackground imageStyle={{overflow:'hidden',zIndex:10}} style={{width:w,height:h,backgroundColor:'#fff',overflow:'hidden'}} source={require('../../images/glass.png')}>
          <Animated.View style={{flex:1,transform:[{translateY:animatedValuePercentage.interpolate({
            inputRange: [0, h],
            outputRange: [0, h],
          })}]}}>
            <Animated.Image style={{width:'130%',height:'100%',position:'absolute',left:0,transform: [{ translateX: translateX1 }]}} alt='water1' source={require('../../images/water1.png')}/>
            <Animated.Image style={{width:'130%',height:'100%',position:'absolute',left:0,transform: [{ translateX: translateX2 },{translateY:translateY1}]}} alt='water1' source={require('../../images/water2.png')}/>
            <Image style={{width:'130%',height:'100%',position:'absolute',left:0,bottom:-40}} alt='water1' source={require('../../images/water2.png')}/>
          </Animated.View>
          <Counter ref={counterRef}/>
        </ImageBackground>
      </VStack>

      <HStack space={3} style={{paddingHorizontal:40,marginBottom:-50}}>
        <Item step={0.5} max={4} type='water' onChangeValue={(val,max)=>{setGlassPercentage(val,max)}}/>
        <Item disabled type='coffee'/>
        <Item disabled type='tea'/>
      </HStack>
      
    </VStack>
  )

};

const Item=({type='water',onChangeValue,disabled=false,step=1,max=10})=>{

  const [state,setState]=React.useState({selected:false})

  const handleOnChange=(val)=>{
    if(isFunction(onChangeValue)){
      if(val<=100 && val>=0){
        const litrs=val*max/100
        onChangeValue(val,litrs)
      }
    }
  }

  const imagePath=()=>{
    switch(type){
      case 'water':
        return <Image style={{width:40,height:calcImageHeight(76,92,40)}} alt={type} source={require('../../images/water-v.png')}/>
      case 'coffee':
        return <Image style={{width:40,height:calcImageHeight(76,92,40)}} alt={type} source={require('../../images/coffee-v.png')}/>
      case 'tea':
        return <Image style={{width:40,height:calcImageHeight(78,88,40)}} alt={type} source={require('../../images/tea-v.png')}/>
    }
  }

  const handleOnItemPress=()=>{
    if(disabled){return}
    setState(s=>({...s,selected:!s.selected}))
  }

  const fetchP=100-Math.abs(parseFloat(percentageOf(step,max)))
  const litrs=fetchP*max/100
  return (
    <VStack opacity={disabled?'0.5':1} space={2} flex={1} style={{borderWidth:1.5,borderColor:'#aaa',borderRadius:10,justifyContent:'center',alignItems:'center',height:150}}>
      {state.selected&&(
        <TouchableOpacity onPress={()=>{handleOnChange(percentage+fetchP)}} style={{width:50,height:50,position:'absolute',top:-50,justifyContent:'center',alignItems:'center'}}>
          <Feather name="plus" size={30} color="#149246" />
        </TouchableOpacity>
      )}
      <Pressable style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}} onPress={()=>{handleOnItemPress()}}>
          <VStack justifyContent={'center'} alignItems={'center'} space={2}>
            {imagePath()}
            <Text fontFamily={fonts.MEDIUM} fontSize={17} textTransform={'capitalize'}>{type}</Text>
            <Text fontFamily={fonts.EN} fontSize={12}>{litrs} liter</Text>
          </VStack>
      </Pressable>
      {state.selected&&(
        <TouchableOpacity onPress={()=>{handleOnChange(percentage-fetchP)}} style={{width:50,height:50,position:'absolute',bottom:-50,justifyContent:'center',alignItems:'center'}}>
          <Feather name="minus" size={30} color="#CD0D0D" />
        </TouchableOpacity>
      )}
    </VStack>
  )
}

const Counter=forwardRef(({},ref)=>{

  useImperativeHandle(ref, () => {
    return {
      setText,
    };
  });

  const [text,setText]=useState(0)
  
  return (
    <RText style={{position:'absolute',bottom:0,color:'#fff',fontFamily:fonts.MEDIUM_EN,width:'100%',textAlign:'center',fontSize:40,verticalAlign:'middle'}}>{text}%</RText>
  )
})

const Liter=forwardRef(({},ref)=>{

  useImperativeHandle(ref, () => {
    return {
      setText,
    };
  });

  const [text,setText]=useState(0)
  
  return (
    <RText style={{color:'#000',fontFamily:fonts.MEDIUM_EN,width:'100%',textAlign:'center',fontSize:50,verticalAlign:'middle'}}>{text} litrs</RText>
  )
})

export default HomeIndex;