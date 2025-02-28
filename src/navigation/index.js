import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import DestinationScreen from "../screens/DestinationScreen";
import LoginScreen from "../screens/Login";
import PaymentScreen from "../screens/Payment";
import ProfileScreen from "../screens/ProfileScreen";
import PaymentPlanScreen from "../screens/PaymentPlan";
import LandingScreen from "../screens/LandingScreen";
import AffiliateScreen from "../screens/AffiliateScreen";
import SignupScreen from "../screens/SignupScreen";
import AffiLanding from "../screens/AffiLanding";
import TransactionScreen from "../screens/Transactions";
import TransactionSummary from "../screens/TranSummary";
import Dashboard from "../screens/Dashboard";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Destination" component={DestinationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Pay" component={PaymentScreen} />
        <Stack.Screen name="affiliate" component={ProfileScreen} />
        <Stack.Screen name="Plan" component={PaymentPlanScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="AffiliateLanding" component={AffiliateScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="AffiLand" component={AffiLanding} />
        <Stack.Screen name="Transactions" component={TransactionScreen} />
        <Stack.Screen name="Transummary" component={TransactionSummary} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
