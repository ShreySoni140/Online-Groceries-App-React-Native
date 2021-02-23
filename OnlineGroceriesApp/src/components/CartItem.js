import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import StyleConfig from "../constants/StyleConfig";

const CartItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onSelect}>
      <View style={styles.cartItemContainer}>
        <Image
          source={props.image}
          resizeMode="contain"
          style={{ width: StyleConfig.width / 5 }}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.prodNameContainer}>
            <Text style={styles.prodNameText}>{props.productName}</Text>
            <Entypo
              name="cross"
              size={32}
              color={StyleConfig.colors.imgSliderIndicator}
            />
          </View>
          <Text style={styles.quantityText}>{props.quantity}</Text>
          <View style={styles.incrDcrQuantityContainer}>
            <View style={styles.dcrQuantity}>
              <Entypo
                name="minus"
                size={24}
                color={StyleConfig.colors.imgSliderIndicator}
              />
            </View>
            <View style={styles.itemQtyNumberContainer}>
              <Text style={styles.itemQtyNumber}>1</Text>
            </View>
            <View style={styles.incrQuantity}>
              <Entypo
                name="plus"
                size={24}
                color={StyleConfig.colors.primaryColor}
              />
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>${props.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    borderColor: StyleConfig.colors.borderColor,
    borderBottomWidth: 1,
    alignItems: "center",
    marginHorizontal: StyleConfig.width / 20,
    paddingVertical: StyleConfig.height / 50,
    height: StyleConfig.height / 5,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: StyleConfig.width / 30,
  },
  prodNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  prodNameText: {
    fontFamily: StyleConfig.fontBold,
    fontSize: 16,
    color: StyleConfig.colors.offshadeBlack,
  },
  quantityText: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 14,
    color: StyleConfig.colors.secondryTextColor2,
  },
  incrDcrQuantityContainer: {
    flexDirection: "row",
    paddingVertical: StyleConfig.height / 50,
  },
  dcrQuantity: {
    borderWidth: 1,
    borderColor: StyleConfig.colors.borderColor2,
    borderRadius: 17,
    height: StyleConfig.height / 20,
    width: StyleConfig.width / 10,
    justifyContent: "center",
    alignItems: "center",
  },
  itemQtyNumberContainer: {
    height: StyleConfig.height / 20,
    width: StyleConfig.width / 12,
    justifyContent: "center",
    alignItems: "center",
  },
  itemQtyNumber: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 16,
    color: StyleConfig.colors.offshadeBlack,
  },
  incrQuantity: {
    borderWidth: 1,
    borderColor: StyleConfig.colors.borderColor,
    borderRadius: 17,
    height: StyleConfig.height / 20,
    width: StyleConfig.width / 10,
    justifyContent: "center",
    alignItems: "center",
  },
  priceContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
  },
  priceText: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 18,
    color: StyleConfig.colors.offshadeBlack,
  },
});

export default CartItem;
