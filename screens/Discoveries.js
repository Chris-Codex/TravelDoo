import { View, Text, style, Image, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Attractions, Avatar, Hotels, Restaurants } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NavContainer from "../components/NavContainer";

const Discoveries = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("restaurants")

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row w-full mt-5 justify-between items-center">
        <View className="ml-5">
          <Text className="text-[26px] font-bold text-[#346c6a]">Discover</Text>
          <Text className="text-[23px] text-[#5c7877]">the beauty today</Text>
        </View>
        <View className="mr-5">
          <Image
            source={Avatar}
            alt="name"
            className="w-[50px] h-[50px] rounded-lg"
          />
        </View>
      </View>

      <View className="flex-row py-1 mx-4 px-4 mt-4 shadow-md  bg-white items-center rounded-md">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search..."
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            // key: "AIzaSyBdTQCikgMeFo7j-QpPsRep1uttr73FXbs",
            language: "en",
          }}
        />
      </View>

      <ScrollView>
       <View className="flex-row items-center justify-between px-8 mt-8">
        <NavContainer key={"hotel"} title="Hotels"  imageSrc={Hotels} type={type} setType={setType}/>
        <NavContainer key={"attraction"} title="Attraction"  imageSrc={Attractions} type={type} setType={setType}/>
        <NavContainer key={"restaurant"} title="Restaurants"  imageSrc={Restaurants} type={type} setType={setType}/>
       </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default Discoveries;
