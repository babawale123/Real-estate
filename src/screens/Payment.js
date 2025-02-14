import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { RadioButton, Button, Divider } from "react-native-paper";
import { MaterialIcons, FontAwesome5, Entypo } from "@expo/vector-icons";

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const handlePayment = () => {
    Alert.alert(
      "Payment Successful 🎉",
      "Your payment of ₦1,200,000 has been completed successfully!",
      [{ text: "OK", style: "default" }]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Payment</Text>

      {/* Investment Amount */}
      <View style={styles.amountContainer}>
        <Text style={styles.label}>Total Amount</Text>
        <Text style={styles.amount}>₦1,200,000</Text>
      </View>

      <Divider style={{ marginVertical: 10 }} />

      {/* UPI Payment Option */}
      <TouchableOpacity
        style={styles.paymentOption}
        onPress={() => setPaymentMethod("upi")}
      >
        <RadioButton.Android
          value="upi"
          status={paymentMethod === "upi" ? "checked" : "unchecked"}
          onPress={() => setPaymentMethod("upi")}
        />
        <Text style={styles.paymentText}>UPI Payment</Text>
        <MaterialIcons name="account-balance" size={20} color="#ff6600" />
        <Text style={styles.bankText}>ICICI 4567</Text>
      </TouchableOpacity>

      {/* UPI Apps */}
      <View style={styles.upiApps}>
        <TouchableOpacity>
          <FontAwesome5 name="google-pay" size={40} color="#4285F4" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="paypal" size={40} color="#0070ba" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="money-bill-wave" size={40} color="#ffb400" />
        </TouchableOpacity>
      </View>

      {/* Proceed Button */}
      <Button mode="contained" style={styles.button} onPress={handlePayment}>
        Proceed to Payment
      </Button>

      {/* Other Payment Methods */}
      <View>
        {["Net Banking", "Pay later with mandate"].map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.paymentOption}
            onPress={() => setPaymentMethod(option)}
          >
            <RadioButton.Android
              value={option}
              status={paymentMethod === option ? "checked" : "unchecked"}
            />
            <Text style={styles.paymentText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    top: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#777",
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    top: 20,
  },
  paymentText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  bankText: {
    fontSize: 14,
    color: "#ff6600",
    marginLeft: 5,
  },
  upiApps: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  button: {
    marginVertical: 15,
    backgroundColor: "#007bff",
  },
});

export default PaymentScreen;
