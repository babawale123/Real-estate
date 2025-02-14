import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const transactions = [
  { id: "1", title: "House GrayMond Abuja", date: "Feb 12, 2024", amount: "+$1,500", type: "income" },
  { id: "2", title: "Groceries", date: "Feb 10, 2024", amount: "-$120", type: "expense" },
  { id: "3", title: "Electric Bill", date: "Feb 8, 2024", amount: "-$60", type: "expense" },
  { id: "4", title: "Freelance Work", date: "Feb 5, 2024", amount: "+$500", type: "income" },
  { id: "5", title: "Dining Out", date: "Feb 3, 2024", amount: "-$50", type: "expense" },
];

const TransactionScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.transactionCard}>
      <View style={styles.iconContainer}>
        <FontAwesome5
          name={item.type === "income" ? "arrow-up" : "arrow-down"}
          size={20}
          color={item.type === "income" ? "green" : "red"}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={[styles.amount, item.type === "income" ? styles.income : styles.expense]}>
        {item.amount}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    marginTop: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },
  list: {
    paddingBottom: 20,
  },
  transactionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  income: {
    color: "green",
  },
  expense: {
    color: "red",
  },
});

export default TransactionScreen;
