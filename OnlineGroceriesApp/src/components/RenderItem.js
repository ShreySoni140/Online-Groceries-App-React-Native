import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import StyleConfig from "../constants/StyleConfig";
import CustomButton from "./CustomButton";
import Tile from "./Tile";

const RenderItem = (props) => {
  return (
    <Tile
      title={props.itemData.item.name}
      image={props.itemData.item.image}
      gridItemStyle={styles.gridItemStyle}
      containerStyle={styles.tileContainerStyle}
      imageStyle={styles.imageStyle}
      titleStyle={styles.titleStyle}
      onSelect={props.onSelect}
    >
      <Text style={styles.quantityText}>{props.itemData.item.quantity}</Text>
      <View style={styles.priceAddCartContainer}>
        <Text style={styles.priceText}>${props.itemData.item.price}</Text>
        <View style={styles.addCartButtonContainer}>
          <CustomButton
            buttonItemStyle={{ borderRadius: 17 }}
            style={styles.addCartButton}
          >
            <Entypo name="plus" size={24} color="white" />
          </CustomButton>
        </View>
      </View>
    </Tile>
  );
};

const styles = StyleSheet.create({
  gridItemStyle: {
    height: StyleConfig.height / 3.4,
    width: StyleConfig.width / 2.4,
    marginRight: StyleConfig.width / 30,
  },
  tileContainerStyle: {
    borderColor: StyleConfig.colors.borderColor,
    alignItems: "flex-start",
  },
  imageStyle: {
    alignSelf: "center",
    marginVertical: StyleConfig.height / 60,
    flex: 1,
  },
  titleStyle: {
    textAlign: "left",
    marginHorizontal: StyleConfig.width / 30,
  },
  quantityText: {
    marginHorizontal: StyleConfig.width / 30,
    flex: 1,
    fontFamily: StyleConfig.fontMedium,
    fontSize: 14,
    color: StyleConfig.colors.secondryTextColor2,
  },
  priceAddCartContainer: {
    flexDirection: "row",
    marginHorizontal: StyleConfig.width / 30,
    marginBottom: StyleConfig.height / 40,
  },
  priceText: {
    flex: 1,
    textAlignVertical: "center",
    fontFamily: StyleConfig.fontRegular,
    fontSize: 18,
    color: StyleConfig.colors.offshadeBlack,
  },
  addCartButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  addCartButton: {
    borderRadius: 17,
    justifyContent: "center",
    width: StyleConfig.width / 10,
    height: StyleConfig.height / 20,
  },
});

export default RenderItem;
