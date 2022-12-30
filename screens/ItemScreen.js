import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const ItemScreen = ({ route }) => {
    const navigation = useNavigation();

    const data = route?.params?.param;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-white relative">
            {data &&
                <ScrollView className="flex-1 px-4 py-6">
                    <View className="relative bg-white shadow-lg">
                        <Image
                            source={{
                                uri: data?.photo?.images?.large?.url
                                    ? data?.photo?.images?.large?.url
                                    : "https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png",
                            }}
                            className="w-full h-52 object-cover rounded-2xl"
                        />

                        {/*Large image Card*/}
                        <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                            <TouchableOpacity onPress={() => navigation.navigate("Discoveries")} className="w-10 h-10 rounded-md items-center justify-center bg-white">
                                <AntDesign name="left" size={20} color="#2bb2ae" />
                            </TouchableOpacity>

                            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#2bb2ae]]">
                                <FontAwesome name="heartbeat" size={20} color="white" />
                            </TouchableOpacity>
                        </View>

                        <View className="absolute flex-row inset-x-0 bottom-4 justify-between px-6">
                            {data?.price &&
                                <View className="w-20 h-5 rounded-md items-center justify-center bg-white shadow-md">
                                    <Text className="text-[#2bb2ae] shadow-lg text-[12px]">{data?.price}</Text>
                                </View>
                            }

                            {data?.open_now_text &&
                                <View className="w-20 h-5 rounded-md items-center justify-center bg-[#2bb2ae] shadow-md">
                                    <Text className="text-[#fff] shadow-lg text-[12px] font-bold">{data?.open_now_text}</Text>
                                </View>
                            }
                        </View>
                    </View>


                    <View className="top-5">
                        <Text className="text-[#346c6a] font-bold text-[18px]">{data?.name}</Text>
                        <View className="flex-row gap-1 items-center">
                            <Entypo name="location-pin" size={20} color="#5c7877" />
                            <Text className="text-[13px] font-bold text-[#5c7877]">{data?.location_string}</Text>
                        </View>
                    </View>


                    <View className="flex-row gap-2 mt-8 justify-between">
                        {data?.rating &&
                            <View className="flex-row gap-1 items-center">
                                <View className="w-[40px] h-[40px] rounded-lg bg-[#e9c8c0] items-center justify-center">
                                    <Entypo name="star" size={20} color="#dd9556" />
                                </View>
                                <View className="">
                                    <Text className="text-[12px] text-[#5c7877]">{data?.rating}</Text>
                                    <Text className="text-[12px] text-[#5c7877]">Rating</Text>
                                </View>
                            </View>
                        }

                        <View className="flex-row gap-1 items-center">
                            <View className="w-[40px] h-[40px] rounded-lg bg-[#e9c8c0] items-center justify-center">
                                <FontAwesome name="dollar" size={16} color="black" />
                            </View>
                            <View className="">
                                <Text className="text-[12px] text-[#5c7877]">{data?.price_level}</Text>
                                <Text className="text-[12px] text-[#5c7877]">Price Level</Text>
                            </View>
                        </View>

                        <View className="flex-row gap-1 items-center">
                            <View className="w-[40px] h-[40px] rounded-lg bg-[#e9c8c0] items-center justify-center">
                                <MaterialCommunityIcons name="map-marker-distance" size={20} color="black" />
                            </View>
                            <View className="">
                                <Text className="text-[12px] text-[#5c7877]">{data?.bearing}</Text>
                                <Text className="text-[12px] text-[#5c7877]">Bearing</Text>
                            </View>
                        </View>
                    </View>

                    {/*Description*/}
                    <View className='mt-3'>
                        <Text className="text-[#5c7877] text-[11px]">{data?.description}</Text>
                    </View>

                    {/*Cousins*/}
                    {data?.cuisine &&
                        <View className="flex-row flex-wrap items-center justify-start py-3 gap-2">
                            {data?.cuisine.map((n) => {
                                return (
                                    <TouchableOpacity key={n.key} className="px-2 py-1 rounded-md bg-emerald-100">
                                        <Text className="text-[10px]">{n.name}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    }

                    <View className="w-full rounded-lg shadow-md pb-2 bg-[#e8e4e49c]">
                        <View>
                            <View className="flex-row mx-3 mt-2 py-1 space-x-2">
                                <Feather name="phone" size={14} color="#5c7877" />
                                <Text className="text-[#5c7877] text-[12px]">{data?.phone}</Text>
                            </View>
                            <View className="flex-row mx-3 mt-1 py-0 space-x-2">
                                <MaterialIcons name="attach-email" size={14} color="#5c7877" />
                                <Text className="text-[#5c7877] text-[12px]">{data?.email}</Text>
                            </View>
                            <View className="flex-row mx-3 mt-1 py-0 space-x-2">
                                <Entypo name="address" size={14} color="#5c7877" />
                                <Text className="text-[#5c7877] text-[12px]">{data?.address}</Text>
                            </View>
                            <TouchableOpacity className="bg-[#2bb2ae] mx-8 mt-4 h-[40px] text-center justify-center rounded-md">
                                <Text className="text-center text-[#fff] font-bold text-[17px]">Book Now</Text>
                            </TouchableOpacity>

                        </View>
                    </View>


                </ScrollView>
            }
        </SafeAreaView>
    );
};

export default ItemScreen;
