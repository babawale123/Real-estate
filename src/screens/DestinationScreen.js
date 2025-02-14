import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function DestinationScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/house_2.jpg")} 
        style={styles.Image} 
        resizeMode="cover" 
      />

      <StatusBar style="light" />

      {/* Back and Favourite Buttons */}
      <SafeAreaView style={styles.navigationIcons}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backView}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} style={styles.favouriteView}>
          <AntDesign name="heart" size={24} color={isFavourite ? "red" : "white"} />
        </TouchableOpacity>
      </SafeAreaView>

      {/* Content */}
      <ScrollView style={styles.descriptionView} contentContainerStyle={{ gap: 20 }}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        

        {/* Description */}
        <Text style={styles.description}>{item.longDescription}</Text>

        {/* Table Layout for Price, Square Meter, and Weather */}
        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Square M</Text>
            <Text style={styles.tableHeader}>Amount</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>500</Text>
            <Text style={styles.tableCell}>₦1,200,000</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>200</Text>
            <Text style={styles.tableCell}>₦1,00,000</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>300</Text>
            <Text style={styles.tableCell}>₦1,500,000</Text>
          </View>
          
        </View>

        {/* Payment Button */}
        <TouchableOpacity onPress={() => navigation.navigate('Plan')} style={styles.paymentButton}>
          <FontAwesome5 name="money-bill-wave" size={32} color="black" />
          <Text style={styles.paymentText}>Click to Pay</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Image: {
    width: wp(100),
    height: hp(55),
  },
  navigationIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(100),
    position: "absolute",
    top: 40,
  },
  backView: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 50,
    marginLeft: 16,
  },
  favouriteView: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 50,
    marginRight: 16,
  },
  descriptionView: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "white",
    paddingTop: 32,
    marginTop: -56,
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    fontSize: wp(7),
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: wp(4),
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  /* Table Styles */
  tableContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tableHeader: {
    fontSize: wp(4.5),
    fontWeight: "bold",
    color: "black",
  },
  tableCell: {
    fontSize: wp(4),
    color: "#555",
  },
  /* Payment Button */
  paymentButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
  },
  paymentText: {
    fontSize: wp(4),
    color: "blue",
    marginLeft: 10,
  },
});

