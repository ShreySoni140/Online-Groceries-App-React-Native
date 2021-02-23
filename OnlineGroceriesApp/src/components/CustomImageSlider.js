import React from "react";
import { StyleSheet, View, Image } from "react-native";
import StyleConfig from "../constants/StyleConfig";

const CustomImageSlider = ({ item, imageKey }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={item[imageKey]}
        resizeMode="contain"
        style={{ padding: StyleConfig.width / 4 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: StyleConfig.width,
    height: StyleConfig.height / 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomImageSlider;
