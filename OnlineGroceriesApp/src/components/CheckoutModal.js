import React from "react";
import { Modal, StyleSheet, View, Text } from "react-native";
import CustomButton from "./CustomButton";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import StyleConfig from "../constants/StyleConfig";
import CheckoutModalItem from "./CheckoutModalItem";

const CheckoutModal = (props) => {
  return (
    <Modal animationType="slide" visible={props.visible} transparent>
      <View style={styles.modalBg}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>Checkout</Text>
            <Entypo
              name="cross"
              size={32}
              color={StyleConfig.colors.offshadeBlack}
              onPress={props.close}
            />
          </View>
          <CheckoutModalItem title="Delivery">
            <Text style={styles.placeholderText}>Select Method</Text>
          </CheckoutModalItem>
          <CheckoutModalItem title="Payment">
            <FontAwesome5
              name="cc-mastercard"
              size={24}
              color={StyleConfig.colors.offshadeBlack}
            />
          </CheckoutModalItem>
          <CheckoutModalItem title="Promo Code">
            <Text style={styles.placeholderText}>Pick Discount</Text>
          </CheckoutModalItem>
          <CheckoutModalItem title="Total Cost">
            <Text style={styles.placeholderText}>$13.97</Text>
          </CheckoutModalItem>
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By placing an order you agree to our{" "}
              <Text style={styles.termsTextHighlight}>Terms</Text> and{" "}
              <Text style={styles.termsTextHighlight}>Conditions</Text>
            </Text>
          </View>
          <View style={styles.placeOrderBtnContainer}>
            <CustomButton title="Place Order" onSelect={props.onSelect} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBg: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: StyleConfig.colors.modalBg,
  },
  modalContainer: {
    backgroundColor: StyleConfig.colors.offWhiteBtn,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalHeader: {
    flexDirection: "row",
    borderColor: StyleConfig.colors.borderColor,
    borderBottomWidth: 1,
    alignItems: "center",
    paddingVertical: StyleConfig.height / 30,
    paddingHorizontal: StyleConfig.width / 20,
    justifyContent: "space-between",
  },
  modalHeaderText: {
    fontFamily: StyleConfig.fontBold,
    fontSize: 20,
    color: StyleConfig.colors.offshadeBlack,
    textAlignVertical: "center",
  },
  placeholderText: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 16,
    color: StyleConfig.colors.offshadeBlack,
  },
  termsContainer: {
    marginTop: StyleConfig.height / 25,
    width: StyleConfig.width / 1.5,
    marginHorizontal: StyleConfig.width / 20,
  },
  termsText: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 14,
    color: StyleConfig.colors.secondryTextColor2,
  },
  termsTextHighlight: {
    fontFamily: StyleConfig.fontBold,
    color: StyleConfig.colors.offshadeBlack,
  },
  placeOrderBtnContainer: {
    marginVertical: StyleConfig.height / 25,
    justifyContent: "flex-end",
    marginHorizontal: StyleConfig.width / 20,
  },
});

export default CheckoutModal;
