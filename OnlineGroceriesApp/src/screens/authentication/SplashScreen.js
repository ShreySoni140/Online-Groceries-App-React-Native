import React from "react";
import { Image, StyleSheet, View } from "react-native";
import StyleConfig from "../../constants/StyleConfig";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("GettingStarted");
  }, 1500);

  return (
    <View style={styles.container}>
      <Image source={StyleConfig.images.logoMain} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConfig.colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SplashScreen;
