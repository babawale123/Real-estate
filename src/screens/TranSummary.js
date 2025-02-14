import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TransactionSummary = () => {
          const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Transaction summary</Text>

      {/* Property Card */}
      <View style={styles.card}>
        <Image
          source={{ uri: "https://source.unsplash.com/featured/?house" }} // Replace with actual image URL
          style={styles.image}
        />
        <View style={styles.cardText}>
          <Text style={styles.propertyType}>Apartment</Text>
          <Text style={styles.propertyTitle}>
            5 BEDROOM FULLY DETACHED DUPLEX + BQ
          </Text>
          <Text style={styles.location}>
            <MaterialCommunityIcons name="map-marker" size={16} color="#666" />{" "}
            Greymond Sapphire Estate, Katsina
          </Text>
        </View>
      </View>

      {/* Payment Details */}
      <View style={styles.paymentDetails}>
        <Text style={styles.sectionTitle}>Payment Detail</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Payment Plan</Text>
          <Text style={styles.value}>6 months</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Monthly Payment</Text>
          <Text style={styles.value}>₦ 1,500,000</Text>
        </View>
        <View style={styles.rowTotal}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>₦ 9,000,000</Text>
        </View>
      </View>

      {/* Payment Method */}
      <View style={styles.paymentMethod}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <View style={styles.paymentBox}>
          <FontAwesome name="paypal" size={24} color="#00457C" />
          <Text style={styles.email}>•••••@email.com</Text>
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Pay Button */}
      <TouchableOpacity onPress={()=>navigation.navigate('Pay')} style={styles.payButton}>
        <Text style={styles.payText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FB",
    marginTop:40
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  cardText: {
    marginLeft: 10,
    flex: 1,
  },
  propertyType: {
    fontSize: 12,
    color: "#666",
  },
  propertyTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  location: {
    fontSize: 12,
    color: "#666",
  },
  paymentDetails: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  rowTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 5,
  },
  label: {
    fontSize: 14,
    color: "#666",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6200ea",
  },
  paymentMethod: {
    marginBottom: 15,
  },
  paymentBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  changeText: {
    fontSize: 14,
    color: "#6200ea",
  },
  payButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  payText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TransactionSummary;
