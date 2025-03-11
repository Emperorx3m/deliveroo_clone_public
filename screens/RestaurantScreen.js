import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { gql, useQuery } from "@apollo/client";
import { del_blue, getUploadUrl } from "helpers/util";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import * as Icons from "react-native-heroicons/solid";
import * as Icono from "react-native-heroicons/outline";
import DishRow from "components/DishRow";
import BasketIcon from "components/BasketIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems } from "slices/basketSlice";
import { setRestaurant } from "slices/restaurantSlice";

const RestaurantScreen = () => {
  const items = useSelector(selectBasketItems);
  const data = useRoute().params;
  const nav = useNavigation();
  const [res_data, setres_data] = useState({});
  const dispatch = useDispatch();

  const getONeRes = gql`
    query Restaurant($documentId: ID!) {
      restaurant(documentId: $documentId) {
        Name
        address
        documentId
        long
        lat
        rating
        short_description
        types {
          name
        }
        image {
          url
        }
        dishes {
          name
          image {
            url
          }
          documentId
          discount_price
          price
          short_description
        }
      }
    }
  `;

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    if (res_data) {
      dispatch(setRestaurant(res_data))
    }
  }, [res_data])
  

  const {
    loading: loadingRes,
    error: errorRes,
    data: dataRes,
  } = useQuery(getONeRes, {
    variables: {
      documentId: data?.id,
    },
    errorPolicy: "all",
  });

  useEffect(() => {
    if (loadingRes) console.log("Loading getRes...");
    if (errorRes) console.error("Error in getRes:", errorRes);
    if (dataRes?.restaurant) {
      // console.log(' dhata', dataRes)
      setres_data(dataRes?.restaurant);
    }
  });

  return (
    <>
      {items.length > 0 && <BasketIcon />}

      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: getUploadUrl(res_data?.image?.url),
            }}
            className="h-[30vh] object-contain w-full m-auto"
          />

          <TouchableOpacity
            onPress={nav.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-200 rounded-full"
          >
            <ArrowLeftIcon size={20} color={del_blue} />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-2xl font-bold">{res_data?.Name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Icons.StarIcon size={22} color="green" opacity={0.4} />
                <Text>
                  <Text className="text-xs text-green-500">
                    {res_data?.rating}.{" "}
                  </Text>
                  <Text className="text-xs text-gray-500">
                    {res_data?.types?.[0] && res_data?.types?.map((tipo, i) => (tipo.name)).join(' • ')}
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icono.MapPinIcon color={"gray"} opacity={0.5} size={20} />
                <Text className="text-xs text-gray-500 line-clamp-2 pr-1">Nearby . {res_data?.address} </Text>
              </View>
            </View>
            <Text className='text-gray-500 mt-2 pb-4' >{res_data?.short_description}</Text>
          </View>
          <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
            <Icono.QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className='pl-2 flex-1'>Have a food allergy?</Text>
            <Icons.ChevronRightIcon color={del_blue} />
          </TouchableOpacity>

        </View>
        <View className={items.length > 0 && `pb-36`}>
          <Text className='px-4 pt-6  mb-3 font-bold text-xl'>Menu</Text>
          
          {
          res_data?.dishes?.map((item, index) => (
            <DishRow key={index} dishes={item} restaurant={{id: data?.id, name: res_data?.Name}} />
          ))
        }
        </View>
        

      </ScrollView>
    </>

  );
};

export default RestaurantScreen;
