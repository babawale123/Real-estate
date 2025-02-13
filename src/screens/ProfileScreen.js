import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const listings = [
  {
    id: "1",
    title: "Brookvale Villa",
    location: "Jakarta, Indonesia",
    price: "₦ 9,000,000",
    image: require("../../assets/house_1.jpg"),
  },
  {
    id: "2",
    title: "The Overdale Apartment",
    location: "Jakarta, Indonesia",
    price: "₦ 9,000,000",
    image: require("../../assets/house_1.jpg"),
  },
];

export default function ProfileScreen() {
  const [selectedTab, setSelectedTab] = useState("listings");

  const nav = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>nav.navigate('Landing')}><Ionicons name="arrow-back" size={24} color="black" /></TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
        <Ionicons name="share-outline" size={24} color="black" />
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image source={require("../../assets/avatar.png")} style={styles.profileImage} />
        <Text style={styles.profileName}>Amanda</Text>
        <Text style={styles.profileEmail}>amanda.trust@email.com</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>5.0</Text>
          <Text style={styles.statLabel}>★★★★★</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>235</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>112</Text>
          <Text style={styles.statLabel}>Sold</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "listings" && styles.activeTab]}
          onPress={() => setSelectedTab("listings")}
        >
          <Text style={styles.tabText}>Listings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "sold" && styles.activeTab]}
          onPress={() => setSelectedTab("sold")}
        >
          <Text style={styles.tabText}>Sold</Text>
        </TouchableOpacity>
      </View>

      {/* Listings */}
      <Text style={styles.listingHeader}>140 listings</Text>
      <FlatList
        data={listings}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listingCard}>
            <Image source={item.image} style={styles.listingImage} />
            <Text style={styles.listingTitle}>{item.title}</Text>
            <Text style={styles.listingLocation}>{item.location}</Text>
            <Text style={styles.listingPrice}>{item.price}</Text>
          </View>
        )}
      />

      {/* Contact Button */}
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileSection: {
    alignItems: "center",
    marginTop: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 8,
  },
  profileEmail: {
    color: "gray",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  statBox: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    color: "gray",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
    borderRadius: 25,
    marginVertical: 16,
    padding: 4,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
  activeTab: {
    backgroundColor: "white",
  },
  tabText: {
    color: "black",
  },
  listingHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  listingCard: {
    backgroundColor: "#F3F3F3",
    padding: 8,
    margin: 8,
    borderRadius: 12,
    width: 160,
  },
  listingImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  listingTitle: {
    fontWeight: "bold",
    marginTop: 8,
  },
  listingLocation: {
    color: "gray",
  },
  listingPrice: {
    fontWeight: "bold",
    color: "green",
  },
  contactButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
    marginVertical: 16,
  },
  contactButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
