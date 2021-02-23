import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import StyleConfig from "../constants/StyleConfig";

const FavList = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onSelect}>
      <View style={styles.favItemContainer}>
        <Image
          source={props.image}
          resizeMode="contain"
          style={{ width: StyleConfig.width / 5 }}
        />
        <View style={styles.detailsContainer}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.prodNameContainer}>
              <Text style={styles.prodNameText}>{props.productName}</Text>
              <Text style={styles.quantity}>{props.quantity}</Text>
            </View>
            <View style={styles.priceContainer}>
              <View style={styles.priceTextContainer}>
                <Text style={styles.priceText}>${props.price}</Text>
              </View>
              <Ionicons
                name="md-chevron-forward"
                size={24}
                color={StyleConfig.colors.offshadeBlack}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  favItemContainer: {
    flexDirection: "row",
    borderColor: StyleConfig.colors.borderColor,
    borderBottomWidth: 1,
    alignItems: "center",
    marginHorizontal: StyleConfig.width / 20,
    paddingVertical: StyleConfig.height / 50,
    height: StyleConfig.height / 6,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: StyleConfig.width / 30,
  },
  prodNameContainer: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  prodNameText: {
    fontFamily: StyleConfig.fontBold,
    fontSize: 16,
    color: StyleConfig.colors.offshadeBlack,
  },
  quantity: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 14,
    color: StyleConfig.colors.secondryTextColor2,
  },
  priceContainer: {
    flexDirection: "row",
    paddingVertical: StyleConfig.height / 50,
  },
  priceTextContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: StyleConfig.width / 50,
  },
  priceText: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 18,
    color: StyleConfig.colors.offshadeBlack,
  },
});

export default FavList;
