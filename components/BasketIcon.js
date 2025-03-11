import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { basketTotal, selectBasketItems } from "../slices/basketSlice";
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Currency from "react-currency-formatter";
import { del_blue } from 'helpers/util';

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const nav = useNavigation();
  const basket_Total = useSelector(basketTotal)

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity
        onPress={() => 
          nav.navigate("Basket")
        }
        style={{
          backgroundColor: del_blue
        }}
        className={`mx-5 p-4 rounded-lg flex-row items-center space-x-4`}>
        <Text className=' text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{items.length}</Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
        <Text className='text-lg text-white font-extrabold'> <Currency quantity={basket_Total} currency="USD" /> </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon