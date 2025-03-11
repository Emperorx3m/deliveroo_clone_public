import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from 'components/CategoryCard'
import { getUploadUrl } from 'helpers/util'

const Categories = ({categories}) => {
    return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 1,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false} >

      {
        categories.map((category, index) => (
          <CategoryCard key={index}  imgUrl={getUploadUrl(category?.image?.[0]?.url)} title={category?.name} />
        ))
      }
      
    </ScrollView>
  )
}

export default Categories