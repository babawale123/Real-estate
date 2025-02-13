import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const listings = [
  {
    id: "1",
    title: "Brookvale Villa",
    location: "Jakarta, Indonesia",
    price: "₦ 9,000,000",
    image: require("../../assets/images/avatar.png"),
  },
  {
    id: "2",
    title: "The Overdale Apartment",
    location: "Jakarta, Indonesia",
    price: "₦ 9,000,000",
    image: require("../../assets/images/avatar.png")
  },
];

export default function ProfileScreen() {
  const [selectedTab, setSelectedTab] = useState("listings");

  return (
    <View className="flex-1 bg-white px-4 pt-10">
      {/* Header */}
      <View className="flex-row justify-between items-center">
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-lg font-bold">Profile</Text>
        <Ionicons name="share-outline" size={24} color="black" />
      </View>
      
      {/* Profile Info */}
      <View className="items-center mt-4">
        <Image
          source={require("../../assets/images/avatar.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="text-xl font-semibold mt-2">Amanda</Text>
        <Text className="text-gray-500">amanda.trust@email.com</Text>
      </View>
      
      {/* Stats */}
      <View className="flex-row justify-around mt-4">
        <View className="items-center">
          <Text className="text-lg font-bold">5.0</Text>
          <Text className="text-gray-500">★★★★★</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-bold">235</Text>
          <Text className="text-gray-500">Reviews</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-bold">112</Text>
          <Text className="text-gray-500">Sold</Text>
        </View>
      </View>
      
      {/* Tabs */}
      <View className="flex-row justify-center bg-gray-200 rounded-full my-4 p-1">
        <TouchableOpacity
          className={`px-4 py-2 rounded-full ${selectedTab === "listings" ? "bg-white" : ""}`}
          onPress={() => setSelectedTab("listings")}
        >
          <Text className="text-black">Listings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`px-4 py-2 rounded-full ${selectedTab === "sold" ? "bg-white" : ""}`}
          onPress={() => setSelectedTab("sold")}
        >
          <Text className="text-black">Sold</Text>
        </TouchableOpacity>
      </View>
      
      {/* Listings */}
      <Text className="text-lg font-bold">140 listings</Text>
      <FlatList
        data={listings}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-gray-100 p-2 m-2 rounded-xl w-40">
            <Image source={item.image} className="w-full h-24 rounded-lg" />
            <Text className="font-semibold mt-2">{item.title}</Text>
            <Text className="text-gray-500">{item.location}</Text>
            <Text className="font-bold text-green-600">{item.price}</Text>
          </View>
        )}
      />
      
      {/* Contact Button */}
      <TouchableOpacity className="bg-green-500 rounded-full py-3 items-center mt-4">
        <Text className="text-white font-bold text-lg">Contact</Text>
      </TouchableOpacity>
    </View>
  );
}
