import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import StyleConfig from "../constants/StyleConfig";

const CheckoutModalItem = (props) => {
  return (
    <TouchableNativeFeedback>
      <View style={styles.modalItemContainer}>
        <Text style={styles.modelItemTitle}>{props.title}</Text>
        {props.children}
        <Ionicons
          name="md-chevron-forward"
          size={27}
          color={StyleConfig.colors.offshadeBlack}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  modalItemContainer: {
    borderBottomWidth: 1,
    borderColor: StyleConfig.colors.borderColor,
    flexDirection: "row",
    marginHorizontal: StyleConfig.width / 20,
    height: StyleConfig.height / 12,
    alignItems: "center",
  },
  modelItemTitle: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 18,
    color: StyleConfig.colors.secondryTextColor2,
    flex: 1,
  },
});

export default CheckoutModalItem;
