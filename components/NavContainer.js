import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

const NavContainer = ({ title, imageSrc, type, setType }) => {

    return(
       <TouchableOpacity className="items-center justify-center space-y-2">
        <View className={`w-20 h-20 shadow-sm rounded-full items-center justify-center ${type === title.toLowerCase() ? "bg-gray-500" : ""}`}>
            <Image source={imageSrc} className="w-[80px] h-[80px] object-contain" />
        </View>
        <Text className="text-center mt-3 font-bold text-[#2bb2ae]">{title}</Text>
       </TouchableOpacity>
    )
}

export default NavContainer