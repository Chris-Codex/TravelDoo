import { View, Text, style, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NavContainer from "../components/NavContainer";
import { FontAwesome } from '@expo/vector-icons'; 
import ItemCardContainer from "../components/ItemCardContainer";
import { ActivityIndicator } from "react-native";
import { getPlacesData } from "../api";

const Discoveries = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [mainData, setMainData] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    setIsLoading(true)
    getPlacesData().then(data => {
      setMainData(data)
      setInterval(() => [
        setIsLoading(false)
      ], 2000)
    })
  }, [])

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
            
            language: "en",
          }}
        />
      </View>

      {isLoading ? 
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#346c6a" />
        </View> :
        <ScrollView>
       <View className="flex-row items-center justify-between px-8 mt-3">
        <NavContainer key={"hotel"} title="Hotels"  imageSrc={Hotels} type={type} setType={setType}/>
        <NavContainer key={"attraction"} title="Attraction"  imageSrc={Attractions} type={type} setType={setType}/>
        <NavContainer key={"restaurant"} title="Restaurants"  imageSrc={Restaurants} type={type} setType={setType}/>
       </View>

       <View>
          <View className="flex-row w-[340px] ml-5  mr-5 mt-7 items-center justify-between">
            <Text className="font-bold text-[20px] text-[#346c6a]">Top Tips</Text>
            <TouchableOpacity className="flex-row space-x-1">
              <Text className="text-[#5c7877] font-semibold">Explore</Text>
              <Text className="text-[#5c7877] font-semibold"><FontAwesome name="long-arrow-right" size={18} color="#5c7877" /></Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-evenly flex-wrap px-4 mt-7 mb-3">
            {mainData?.length > 0 ? (
              <>
                {mainData?.map((data, i) => {
                  return (
                    <ItemCardContainer key={i} data={data} imageSrc={data?.photo?.images?.medium?.url ? data?.photo?.images?.medium?.url : "https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png"} title={data?.name} location={data?.location_string} />
                  )
                })}
              </>
            ) : (
              <View className="w-full h-[200px] items-center justify-center">
                <Image source={NotFound} alt="notFound" className="w-[100px] h-[100px]" />
                <Text className="text-[#5c7877] font-semibold">Opps...No Data Found</Text>
              </View>
            )}
          </View>
       </View>
      </ScrollView>
      }
    </SafeAreaView>
  );
};



export default Discoveries;
