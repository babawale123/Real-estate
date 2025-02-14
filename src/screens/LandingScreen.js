import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LandingScreen = () => {
    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      {/* Image Banner */}
      <Image 
       source={require("../../assets/home.jpg")} // Replace with your image URL
        style={styles.bannerImage}
      />

      {/* Grid Container */}
      <View style={styles.gridContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.card}>
          <MaterialCommunityIcons name="cellphone" size={32} color="black" />
          <Text style={styles.text}  onPress={()=>navigation.navigate('Home')}>Housing Properties</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('AffiliateLanding')} style={styles.card}>
          <MaterialCommunityIcons name="map-marker-path" size={32} color="black" />
          <Text style={styles.text} >Affiliate Marketer</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.card}>
          <MaterialCommunityIcons name="account-group" size={32} color="black" />
          <Text style={styles.text} >Landing Property</Text>
        </TouchableOpacity>

        

        <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')} style={styles.card}>
          <MaterialCommunityIcons name="cog" size={32} color="black" />
          <Text style={styles.text}>Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bannerImage: {
    width: "100%",
    height: 350, // Adjust height as needed
    resizeMode: "cover",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  card: {
    width: "40%", // 2 Cards per row
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
  },
});

export default LandingScreen;
