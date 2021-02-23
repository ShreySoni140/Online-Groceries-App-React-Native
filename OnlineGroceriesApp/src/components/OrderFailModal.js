import React from "react";
import {
  Image,
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import StyleConfig from "../constants/StyleConfig";
import Entypo from "react-native-vector-icons/Entypo";
import CustomButton from "./CustomButton";

const OrderFailModal = (props) => {
  return (
    <Modal animationType="slide" visible={props.visible} transparent>
      <View style={styles.modalBg}>
        <View style={styles.modalContainer}>
          <View style={{ padding: StyleConfig.width / 20 }}>
            <Entypo
              name="cross"
              size={32}
              color={StyleConfig.colors.offshadeBlack}
              onPress={props.close}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Image source={StyleConfig.images.orderFail} resizeMode="contain" />
          </View>
          <View style={styles.orderFailTextContainer}>
            <Text style={styles.orderFailText}>Oops! Order Failed</Text>
          </View>
          <View style={styles.orderFailMsgContainer}>
            <Text style={styles.orderFailMsg}>
              Something went terribly wrong.
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.tryAgainBtnContainer}>
              <CustomButton
                title="Please Try Again"
                titleStyle={{ color: StyleConfig.colors.offWhite }}
                buttonItemStyle={{ flex: 1 }}
                onSelect={props.onSelect}
              />
            </View>
            <View style={styles.backHomeContainer}>
              <TouchableWithoutFeedback onPress={props.goHome}>
                <Text style={styles.backHomeText}>Back to home</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBg: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: StyleConfig.colors.modalBg,
  },
  modalContainer: {
    backgroundColor: StyleConfig.colors.white,
    borderRadius: 30,
    flex: 1,
    marginHorizontal: StyleConfig.width / 20,
    marginBottom: StyleConfig.height / 12,
    marginTop: StyleConfig.height / 6,
  },
  orderFailTextContainer: {
    alignItems: "center",
    marginTop: StyleConfig.height / 20,
  },
  orderFailText: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 28,
    color: StyleConfig.colors.offshadeBlack,
  },
  orderFailMsgContainer: {
    alignItems: "center",
    marginTop: StyleConfig.height / 40,
  },
  orderFailMsg: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 16,
    color: StyleConfig.colors.secondryTextColor2,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: StyleConfig.height / 30,
  },
  tryAgainBtnContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginHorizontal: StyleConfig.width / 15,
  },
  backHomeContainer: {
    marginTop: StyleConfig.height / 50,
    alignItems: "center",
  },
  backHomeText: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 18,
    fontWeight: "600",
    color: StyleConfig.colors.offshadeBlack,
  },
});

export default OrderFailModal;
