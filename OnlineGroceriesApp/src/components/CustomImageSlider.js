import React from "react";
import { Image } from "react-native";
import { StyleSheet, View } from "react-native";
import StyleConfig from "../constants/StyleConfig";

const CustomImageSlider = ({ item, imageKey }) => {
  return (
    <View
      style={{
        width: StyleConfig.width,
        height: StyleConfig.height / 4,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={item[imageKey]}
        resizeMode="contain"
        style={{ padding: StyleConfig.width / 4 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomImageSlider;
