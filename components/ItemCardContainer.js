import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


const ItemCardContainer = ({imageSrc, title, location}) => {

    return (
        <TouchableOpacity className="rounded-md border mb-3 border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[140px]">
            <Image source={{uri: imageSrc}} className='w-full h-[135px] object-cover' />

           {title ? (
            <>
                 <Text className="text-[#346c6a] text-[12.5px] font-bold">{
                    title?.length > 14 ? `${title.slice(0, 14)}..` : title
                }</Text>

                <View className="flex-row space-x-1 items-center">
                    <FontAwesome name="map-marker" size={14} color="#5c7877" />
                    <Text className="text-[#346c6a] text-[10px] font-bold">
                        {title?.length > 18 ? `${location.slice(0, 14)}..` : location}
                    </Text>
                </View>
            </>
           ): <></>}
        </TouchableOpacity>
    )
}

export default ItemCardContainer