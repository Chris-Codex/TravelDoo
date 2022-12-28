import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigate = useNavigation();

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row -[full] m-5 space-x-2 items-center">
        <View className="bg-[#000] w-[50px] h-[50px] rounded-full items-center justify-center">
          <Text className="text-[#fff] font-bold text-[20px] text-[#2bb2ae] items-center text-center">
            Go
          </Text>
        </View>
        <Text className="text-[21px] font-bold">Travel</Text>
      </View>

      <View className="m-5 mt-[-1px]">
        <Text className="text-[23px] text-[#528381]">Enjoy the trip with</Text>
        <Text className="text-[25px] font-bold mt-2 text-[#2bb2ae]">
          Good Moments
        </Text>
        <Text className="mt-2 text-[#2a4948]">
          App solutions for destinations and attractions of every size including
          unlimited updates‏.
        </Text>
      </View>

      <View>
        <View className="bg-[#2bb2ae] w-[250px] h-[250px] -right-[180px] rounded-full"></View>
        <View className="bg-[#eb9e33] w-[250px] h-[250px] -left-[50px] rounded-full"></View>
      </View>

      <View className="items-center justify-center w-[370px] h-[400px]">
        <Image
          source={HeroImage}
          alt="Hero"
          className="bottom-[460px] w-[370px] h-[450px] "
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
