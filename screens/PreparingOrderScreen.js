import { Image, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import delivergif from "assets/deliveroo_game.gif"
import FastImage from 'react-native-fast-image'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {
  const nav = useNavigation()

  useEffect(() => {
   setTimeout(() => {
    nav.navigate("Delivery")
   }, 4000);
  }, [])
  
  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animatable.View
        animation="slideInUp"
        iterationCount={1}
        className='h-96 w-96'>
        <Image
          source={delivergif}
          style={{ height: 384, width: 384 }} 
        />
        {/* <FastImage
          style={{ height: 384, width: 384 }}
          source={{
            uri: 'https://gifdb.com/images/high/smiling-bee-animation-bugcrz1151597suq.gif',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        /> */}
      </Animatable.View>

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        delay={100}
        className='text-lg my-10 text-white font-bold text-center'>
       Waiting for restaurant to accept your order
      </Animatable.Text>
      
      <Animatable.View
        animation="slideInUp"
        iterationCount={1}
        delay={200}
        >
      <Progress.CircleSnail color={['white', 'green', 'black']} />
      </Animatable.View>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen