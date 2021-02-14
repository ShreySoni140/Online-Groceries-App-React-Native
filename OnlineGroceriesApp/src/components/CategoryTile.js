import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import StyleConfig from "../constants/StyleConfig";

const CategoryTile = (props) => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback onPress={props.onSelect}>
        <View
          style={{
            ...styles.container,
            ...{ backgroundColor: props.color, borderColor: props.borderColor },
          }}
        >
          <Image source={props.image} resizeMode="contain" />
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginTop: StyleConfig.height / 70,
    marginLeft: StyleConfig.width / 35,
    height: StyleConfig.height / 4.5,
    borderRadius: 18,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 18,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
  },
  title: {
    fontFamily: StyleConfig.fontBold,
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
    marginHorizontal: StyleConfig.width / 35,
  },
});

export default CategoryTile;
