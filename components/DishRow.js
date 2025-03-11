import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { del_blue, getUploadUrl } from "../helpers/util";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from "slices/basketSlice";

const DishRow = ({ dishes, restaurant }) => {
  console.log("DishRow", dishes?.documentId);
  const [isPressed, setisPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, dishes?.documentId))
  const dispatch = useDispatch();

  const addToBaskit = () => {
    dispatch(addToBasket({id: dishes?.documentId, name: dishes?.name, description: dishes?.short_description, price: dishes?.discount_price ?? dishes?.price, image: getUploadUrl(dishes?.image?.[0]?.url), rest_id: restaurant?.id, rest_name: restaurant?.name }))
  }
  
  const removeFromBaskit = () => {
    if(!items.length > 0) return false;
    dispatch(removeFromBasket({id: dishes?.documentId, name: dishes?.name, description: dishes?.short_description, price: dishes?.discount_price ?? dishes?.price, image: getUploadUrl(dishes?.image?.[0]?.url), rest_id: restaurant?.id, rest_name: restaurant?.name }))
  }
  
  
  return (
    <>
      <TouchableOpacity
        onPress={() => setisPressed(!isPressed)}
        className={`bg-white p-4 border  border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row items-center">
          <View className="pr-2 flex-1">
            <Text className="text-lg mb-1">{dishes?.name}</Text>
            <Text className="text-gray-400 text-sm">
              {dishes?.short_description}
            </Text>
            <View className="flex flex-row">
              {dishes?.discount_price && (
                <Text className="text-gray-400 mt-2 mr-2">
                  <Currency quantity={dishes?.discount_price} currency="USD" />
                </Text>
              )}
              <Text
                className={`mt-2 ${
                  dishes?.discount_price
                    ? "line-through text-gray-300 "
                    : "text-gray-400 "
                }`}
              >
                <Currency quantity={dishes?.price} currency="USD" />
              </Text>
            </View>
          </View>
          <View className="p-4">
            <Image
              source={{ uri: getUploadUrl(dishes?.image?.[0]?.url) }}
              className='h-20 w-20 bg-gray-300 p-4 border-2xl-["#f3f3f3"]'
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center pb-3 border-gray-50">
            <TouchableOpacity disabled={!items.length} onPress={removeFromBaskit}>
              <MinusCircleIcon
                color={items.length > 0 ? del_blue : "gray"}
                size={40}
              />
            </TouchableOpacity>
            
            <Text className={items.length == 0 ? 'max-w-12 px-4' : 'px-4' }>{items.length}</Text>

            <TouchableOpacity onPress={addToBaskit}>
              <PlusCircleIcon color={del_blue} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
