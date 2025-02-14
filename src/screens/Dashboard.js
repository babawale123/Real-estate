import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { BarChart, PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const Dashboard = () => {
  // Sample analytics data
  const analyticsData = [
    { id: "1", title: "Total Revenue", value: "₦50M", icon: "money-bill-wave", color: "#4CAF50" },
    { id: "2", title: "Active Users", value: "1,200", icon: "users", color: "#2196F3" },
    { id: "3", title: "Transactions", value: "350", icon: "exchange-alt", color: "#FF9800" },
    { id: "4", title: "Pending Approvals", value: "15", icon: "clock", color: "#E91E63" },
  ];

  // Sample recent transactions
  const transactions = [
    { id: "101", name: "John Doe", amount: "₦150,000", status: "Completed" },
    { id: "102", name: "Jane Smith", amount: "₦250,000", status: "Pending" },
    { id: "103", name: "Alice Brown", amount: "₦75,000", status: "Completed" },
  ];

  // Sample Bar Chart Data
  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [10, 20, 30, 40, 50],
      },
    ],
  };

  // Sample Pie Chart Data
  const pieChartData = [
    { name: "Male", population: 800, color: "#3498db", legendFontColor: "#7F7F7F", legendFontSize: 14 },
    { name: "Female", population: 400, color: "#e74c3c", legendFontColor: "#7F7F7F", legendFontSize: 14 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Welcome, C.E.O</Text>

      {/* Analytics Cards */}
      <View style={styles.analyticsContainer}>
        {analyticsData.map((item) => (
          <View key={item.id} style={[styles.card, { backgroundColor: item.color }]}>
            <FontAwesome5 name={item.icon} size={24} color="#fff" />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardValue}>{item.value}</Text>
          </View>
        ))}
      </View>

      {/* Bar Chart */}
      <Text style={styles.sectionTitle}>Revenue Trends</Text>
      <BarChart
        data={barChartData}
        width={screenWidth - 40}
        height={220}
        yAxisLabel="₦"
        chartConfig={{
          backgroundColor: "#1E2923",
          backgroundGradientFrom: "#3E4E50",
          backgroundGradientTo: "#1E2923",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        style={styles.chart}
      />

      {/* Pie Chart */}
      <Text style={styles.sectionTitle}>User Distribution</Text>
      <PieChart
        data={pieChartData}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />

      {/* Recent Transactions */}
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.transactionName}>{item.name}</Text>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
            <Text
              style={[
                styles.transactionStatus,
                { color: item.status === "Completed" ? "green" : "orange" },
              ]}
            >
              {item.status}
            </Text>
          </View>
        )}
      />

      {/* View More Button */}
      <TouchableOpacity style={styles.viewMoreButton}>
        <Text style={styles.viewMoreText}>View More</Text>
        <MaterialIcons name="arrow-forward-ios" size={16} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FB",
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  analyticsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },
  cardValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 8,
    elevation: 2,
  },
  transactionName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  transactionAmount: {
    fontSize: 14,
    color: "#4CAF50",
  },
  transactionStatus: {
    fontSize: 14,
    fontWeight: "bold",
  },
  viewMoreButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 10,
    marginBottom:10
  },
  viewMoreText: {
    color: "#fff",
    fontSize: 14,
    marginRight: 5,
    
  },
});

export default Dashboard;
