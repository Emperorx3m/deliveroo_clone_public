import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Button } from "@react-native-material/core";
import { Icon } from "@react-native-material/core";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icons from "react-native-heroicons/outline";
import rider from "assets/images/deliveroo.jpg"
import Categories from 'components/Categories';
import FeaturedRows from 'components/FeaturedRows';
import axios from "axios";
import { useLazyQuery, useQuery, gql } from '@apollo/client'
import { del_blue } from 'helpers/util';

const HomeScreen = () => {
    const nav = useNavigation();
    const [FeaturedCategories, setFeaturedCategories] = useState([])
    const [categories, setCategories] = useState([])

    const getfeat = gql`{
            featureds {
                documentId
                name
                restaurants {
                    documentId
                    Name
                    rating                    
                    image {
                        url
                    }
                    address
                    types {
                        name
                    }
                }
                }
        }`

    const getCats = gql`{
            categories {
                documentId
                name
                image {
                url
                }
            }
        }`

    const [getFC, { loading: loadingFC, error: errorFC, data: dataFC }] = useLazyQuery(getfeat, { errorPolicy: "all" });
    const [getCat, { loading: loadingCat, error: errorCat, data: dataCat }] = useLazyQuery(getCats, { errorPolicy: "all" });

    useEffect(() => {
        // Access loading, error, and data for both queries
        if (loadingFC) console.log("Loading getFC...");
        if (errorFC) console.error("Error in getFC:", JSON.stringify(errorFC, null, 2));
        if (dataFC?.featureds) {
            // console.log('dhata', dataFC)
            setFeaturedCategories(dataFC?.featureds)
        }

        if (loadingCat) console.log("Loading getCat...");
        if (errorCat) console.error("Error in getCat:", errorCat);        
        if (dataCat?.categories) {
            console.log('dhataGC', dataCat?.categories.length)
            setCategories(dataCat?.categories)
        }
    })

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false
        })
    }, [])

    useEffect(() => {
        getFC();
        getCat();
    }, [])


    return (
        <SafeAreaView className="bg-white pt-5">
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Avatar image={rider} size={38} />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl flex items-center ">Current Location
                        <Icons.ChevronDownIcon size={13} color={del_blue} />
                    </Text>
                </View>

                <Icons.UserIcon size={30} color={del_blue} />

            </View>

            {/* search */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4' >
                <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center'>
                    <Icons.MagnifyingGlassIcon size={18} color="#000" />
                    <TextInput
                        placeholder='Restaurants and Cuisines'
                        keyboardType='default'
                    />
                </View>

                <Icons.AdjustmentsHorizontalIcon size={18} color={del_blue} />
            </View>

            {/* scrollview bbody */}
            <ScrollView className="mx-2 bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 120
                }}
            >
                <Categories categories={categories} />
                {/* featured row*/}

                {
                    FeaturedCategories.length > 0 && (
                        FeaturedCategories.map((fc, i) => {
                            return (
                                <FeaturedRows
                                    key={i}
                                    title={fc?.name}
                                    description={fc?.short_description}
                                    restaurants={fc?.restaurants}
                                />
                            )
                        })
                    )
                }

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

// npm install @react-native-material/core

// 
