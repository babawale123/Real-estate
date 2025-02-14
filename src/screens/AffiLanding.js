import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AffiLanding = () => {
      const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      {/* Grid Container */}
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.card}>
          <FontAwesome5 name="wallet" size={36} color="#4CAF50" />
          <Text style={styles.text}>Total Amount</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="apartment" size={40} color="#2196F3" />
          <Text style={styles.text}>Uploaded Properties</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("affiliate")} style={styles.card}>
          <Ionicons name="person-circle" size={42} color="#FF9800" />
          <Text style={styles.text} >Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  card: {
    width: "45%", // Adjusted width for better centering
    aspectRatio: 1, // Makes the card square
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
    textAlign: "center",
  },
});

export default AffiLanding;
