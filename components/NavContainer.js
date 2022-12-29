import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

const NavContainer = ({ title, imageSrc, type, setType }) => {
    const handlePress = () => {
        setType(title.toLowerCase())
    }

    return(
       <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
        <View className={`w-20 h-20 shadow-sm rounded-full items-center justify-center ${type === title.toLowerCase() ? "bg-gray-200" : ""}`}>
            <Image source={imageSrc} className="w-[60px] h-[60px] object-contain" />
        </View>
        <Text className="text-center mt-3 font-bold text-[#2bb2ae]">{title}</Text>
       </TouchableOpacity>
    )
}

export default NavContainer