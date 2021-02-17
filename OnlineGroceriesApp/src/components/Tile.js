import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import StyleConfig from "../constants/StyleConfig";

const Tile = (props) => {
  return (
    <View style={{ ...styles.gridItem, ...props.gridItemStyle }}>
      <TouchableNativeFeedback onPress={props.onSelect}>
        <View
          style={{
            ...styles.container,
            ...props.containerStyle,
          }}
        >
          <Image
            source={props.image}
            resizeMode="contain"
            style={props.imageStyle}
          />
          <Text
            style={{ ...styles.title, ...props.titleStyle }}
            numberOfLines={2}
          >
            {props.title}
          </Text>
          {props.children}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
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
  },
});

export default Tile;
