import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function AffiliateScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <View style={styles.imageView}>
        <Image
          source={require("../../assets/affi_2.jpg")}
          style={styles.image}
        />
      </View>

      {/* Contents */}
      <View style={styles.gradientView}>
        <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradientLinear}
        />
        <View
          style={{
            gap: 10,
          }}
        >
          <Text style={styles.MainTitle}>Your Dream Home, Just a Tap Away!</Text>
          <Text style={styles.welcomeDescription}>
          Find, Love, Move – Seamlessly. Because home isn’t just a place, it’s a feeling. Start your journey with GreyMond Shelters 
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Landing")}
          style={styles.exploreButton}
        >
          <Text style={styles.exploreButtonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageView: {
    height: hp(100),
    width: wp(100),
    position: "absolute",
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    height: hp(100),
    width: wp(100),
    alignSelf: "center",
  },
  gradientView: {
    padding: 20,
    paddingBottom: 40,
    gap: 32,
  },
  MainTitle: {
    fontSize: wp(10),
    color: "skyblue",
    fontWeight: "bold",
    lineHeight: wp(12),
  },
  welcomeDescription: {
    fontSize: wp(4.5),
    fontWeight: "bold",
    color: "white",
  },
  exploreButton: {
    borderRadius: 50,
    backgroundColor: "white",
    paddingHorizontal: 48,
    padding: 15,
    paddingHorizontal:70,
    alignSelf: "center",
  },
  exploreButtonText: {
    fontSize: wp(5),
    fontWeight: "bold",
    color: "skyblue",
  },
});
