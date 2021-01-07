import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import Colors from "../constants/Colors";

const CustomButton = (props) => {
  return (
    <View style={styles.buttonItem}>
      <TouchableNativeFeedback onPress={props.onSelect}>
        <View style={{ ...styles.labelContainer, ...props.style }}>
          {props.children}
          <Text style={styles.label}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonItem: {
    borderRadius: 19,
  },
  labelContainer: {
    flexDirection: "row",
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: Dimensions.get("window").height / 13,
    borderRadius: 19,
  },
  label: {
    fontFamily: "Gilroy-Regular",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#FCFCFC",
  },
});

export default CustomButton;
