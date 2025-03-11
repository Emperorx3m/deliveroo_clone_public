import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from 'slices/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/solid';
import gifrider from 'assets/gifrider.webp';
import * as Progress from 'react-native-progress';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const DeliveryOrderScreen = () => {
    const nav = useNavigation()
    const restaurant = useSelector(selectRestaurant);

    let lat = restaurant.lat ? parseFloat(restaurant.lat) : 0;
    let long = restaurant.long ? parseFloat(restaurant.long) : 60.09323786297622;

    console.log('lat', lat)
    console.log('long', long)

    return (
        <View className='bg-[#00CCBB] flex-1'>
            <SafeAreaView className='z-50'>
                <View className='flex-row justify-between items-center p-5'>
                    <TouchableOpacity onPress={() => nav.navigate("Home")} >
                        <XMarkIcon color={"white"} size={30} />
                    </TouchableOpacity>
                    <Text className='font-light text-white text-lg'>Order Help</Text>
                </View>
                <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
                    <View className='flex-row justify-between'>
                        <View>
                            <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                            <Text className='text-4xl font-bold'>45-55 minutes</Text>
                        </View>
                        <Image
                            source={gifrider}
                            className='h-20 w-20'
                        />
                    </View>
                    <Progress.Bar indeterminate={true} color='#00ccbb' width={200} />
                    <Text className='mt-3 text-gray-500'>Your order at {restaurant.Name} is being prepared</Text>

                </View>
            </SafeAreaView>

            <View className='flex-1 items-center -mt-10 z-40'>
                <MapView                   
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: lat,
                        longitude: long,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}

                    onMapReady={() => {
                        console.log('Map ready');
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: lat,
                            longitude: long,
                        }}
                        title={restaurant.Name}
                        description={restaurant.short_description}
                        pinColor='#00ccbb'
                    />
                </MapView>
            </View>

            <SafeAreaView className='bg-white flex-row items-center gap-x-5 h-28 p-4'>
                <Image
                    source={gifrider}
                    className='h-20 w-20'
                />
                <View className='flex-1'>
                    <Text className='text-lg'>John Arin</Text>
                    <Text className='text-gray-400'>Your Rider</Text>
                </View>
                <Text className='text-[#00CCBB] text-lg font-bold'>Call</Text>
            </SafeAreaView>


        </View>
    )
}

export default DeliveryOrderScreen