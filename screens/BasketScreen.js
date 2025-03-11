import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from 'slices/restaurantSlice'
import { basketTotal, removeFromBasket, selectBasketItems } from 'slices/basketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { del_blue, getUploadUrl } from 'helpers/util'
import deliver from "assets/images/deliver.png"
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const nav = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const totalBasket = useSelector(basketTotal)
  const [groupedItems, setgroupedItems] = useState([])
  const dispatch = useDispatch();
  const delFee = 5.99;

  useMemo(() => {
    const groupo = items.reduce((acc, item) => {
      (acc[item.id] = acc[item.id] || []).push(item)
      return acc;

    }, {})

    setgroupedItems(groupo)
  }, [items]);

  console.log('groupedItems', Object.keys(groupedItems).length);

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00CCBB]'>
          <View>
            <Text className='text-center font-bold text-lg'>Basket</Text>
            <Text className='text-center text-gray-400'>{restaurant?.Name}</Text>
          </View>

          <TouchableOpacity
            onPress={nav.goBack} className='rounded-full bg-gray-100 absolute top-3 right-5' >
            <XCircleIcon color={del_blue} height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className='flex-row items-center justify-between space-x-4 px-4 py-3 bg-white my-3'>
          <Image source={deliver} className=' h-7 w-7 bg-gray-300 p-4 mr-4 rounded-full' />
          <Text className='flex-1'>Deliver in 50 - 75 mins</Text>
          <TouchableOpacity>
            <Text className='text-[#00CCBB]'>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-400'>
          {Object.entries(groupedItems).map(([key, items]) => {
            return (
              <View key={key} className='flex-row items-center gap-3 bg-white py-2 px-4'>
                <Text className={`text-[#00CCBB]`}>{items.length} x </Text>
                <Image source={{ uri: items?.[0]?.image }} className='h-12 w-12 rounded-full' />
                <Text className='flex-1'>{items?.[0]?.name}</Text>
                <Text className="">
                  <Currency quantity={items?.[0]?.price} currency="USD" />
                </Text>
                <TouchableOpacity
                  onPress={() => { dispatch(removeFromBasket({ id: key })) }}
                >
                  <Text className={`text-[#00CCBB]`}>Remove</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>

        <View className='p-5 bg-white mt-5 gap-y-4'>
          <View className='flex-row justify-between mx-2'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'>
                  <Currency quantity={totalBasket} currency="USD" />
                </Text>
          </View>

          <View className='flex-row justify-between mx-2'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>
                  <Currency quantity={delFee} currency="USD" />
                </Text>
          </View>

          <View className='flex-row justify-between mx-2'>
            <Text className='text-black font-extrabold'>Total</Text>
            <Text className='text-black font-extrabold'>
                  <Currency quantity={totalBasket + delFee} currency="USD" />
                </Text>
          </View>

          <TouchableOpacity
          onPress={() => {nav.navigate('Preparing')}}
           className='rounded-lg bg-[#00CCBB]'>
            <Text className='text-white py-4 px-4 text-center font-bold'>Place Order</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen