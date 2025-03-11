import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
    // console.log('img url ', imgUrl)
    return (
        <TouchableOpacity className="relative mr-2">
            <Image
                source={{ uri: imgUrl }}
                className="h-20 w-20 rounded"
            // style={{width: 50, height: 50}}
            />

            <Text className="absolute text-sm shadow-lg shadow-black text-white bottom-1 left-1 font-bold line-clamp-1 text-shadow-lg">{title}</Text>

        </TouchableOpacity>
    )
}

export default CategoryCard