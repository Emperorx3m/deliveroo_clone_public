import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/solid";
import * as Icono from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';

const RestaurantCards = ({
    id, imgUrl, title, rating, genre, address
}) => {
    const nav = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => {
                nav.navigate("Restaurant", {id})
            }}
            className="bg-white mr-3 shadow-xl w-[17em] overflow-hidden ">
            <Image
                source={{ uri: imgUrl }}
                className="h-32 w-full rounded-sm m-auto"
            />
            <View className="p-2">
                <Text className="font-bold text-md pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <Icons.StarIcon size={20} color="green" opacity={0.4} />
                    <Text>
                        <Text className="text-xs text-green-500">{rating}. </Text>
                        <Text className='text-xs text-gray-500'>{genre}</Text>
                    </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                    <Icono.MapPinIcon color={"gray"} opacity={0.5} size={20} />
                    <Text className="text-xs text-gray-500 line-clamp-1 pr-1">Nearby . {address} </Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default RestaurantCards