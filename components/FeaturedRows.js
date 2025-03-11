import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/outline";
import RestaurantCards from 'components/RestaurantCards';
import { getUploadUrl } from 'helpers/util';


const FeaturedRows = ({ title, description, restaurants }) => {
    return (
        <View className="mt-4">
            <View className="flex-row items-center px-1 justify-between">
                <Text className="font-bold text-lg " >{title}</Text>
                <Icons.ArrowRightIcon size={15} color='#00ccbb' />
            </View>

            <Text className="text-xs text-gray-500 px-1">{description}</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 1
                }}
                className="pt-4"
            >
                {/* RESTAURANT CARDS  ...  */}
                {restaurants.map((res, index) => (
                    <RestaurantCards key={index} id={res?.documentId} 
                    imgUrl={getUploadUrl(res?.image?.url)}
                    title={res?.Name}
                    rating={res?.rating}
                    genre={res?.types?.[0]?.name}
                    address={res?.address}
                    
                />
                ))}
                
                
            </ScrollView>
        </View>
    )
}

export default FeaturedRows