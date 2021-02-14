import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import StyleConfig from "../constants/StyleConfig";

const CustomButton = (props) => {
  let BtnCmp = TouchableNativeFeedback;

  if (props.onPressFeedback == "hidden") {
    BtnCmp = TouchableWithoutFeedback;
  }

  return (
    <View style={{ ...styles.buttonItem, ...props.buttonItemStyle }}>
      <BtnCmp onPress={props.onSelect}>
        <View style={{ ...styles.labelContainer, ...props.style }}>
          {props.children}
          <Text style={{ ...styles.label, ...props.titleStyle }}>
            {props.title}
          </Text>
          {props.arrow}
        </View>
      </BtnCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonItem: {
    borderRadius: 19,
    overflow: "hidden",
  },
  labelContainer: {
    flexDirection: "row",
    backgroundColor: StyleConfig.colors.primaryColor,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: StyleConfig.height / 13,
    borderRadius: 19,
  },
  label: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: StyleConfig.colors.bgColor,
  },
});

export default CustomButton;
