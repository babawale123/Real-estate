import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const paymentPlans = [
  { id: "6m", label: "6 Months - 9 Million" },
  { id: "12m", label: "12 Months - 9.5 Million" },
  { id: "18m", label: "18 Months - 10 Million" },
  { id: "24m", label: "24 Months - 10.5 Million" },
];

export default function PaymentPlanScreen() {
  const [selectedPlan, setSelectedPlan] = useState("6m");
  const nav = useNavigation();
  

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Payment Plans</Text>

        <FlatList
          data={paymentPlans}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedPlan(item.id)}
              style={[
                styles.option,
                selectedPlan === item.id && styles.selectedOption,
              ]}
            >
              <Text style={styles.optionText}>{item.label}</Text>
              {selectedPlan === item.id && <View style={styles.checkmark}>✔</View>}
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity onPress={()=>nav.navigate("Pay")} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f2b3f",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    top:90,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    height:200
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  selectedOption: {
    backgroundColor: "lightblue",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "blue",
    color: "#fff",
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "skyblue",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
