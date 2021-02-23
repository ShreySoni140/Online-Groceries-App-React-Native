import React, { useState } from "react";
import { Text } from "react-native";
import { FlatList, StyleSheet, View } from "react-native";
import Tile from "./Tile";
import Entypo from "react-native-vector-icons/Entypo";
import CustomButton from "./CustomButton";
import StyleConfig from "../constants/StyleConfig";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FilterModal from "./FilterModal";

const ProductList = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderProductItem = (itemData) => {
    return (
      <Tile
        title={itemData.item.name}
        image={itemData.item.image}
        gridItemStyle={styles.gridItemStyle}
        containerStyle={styles.tileContainerStyle}
        imageStyle={styles.imageStyle}
        titleStyle={styles.titleStyle}
        onSelect={() => {
          props.navigation.navigate("Main", {
            screen: "ProductDetail",
            params: {
              productId: itemData.item.id,
            },
          });
        }}
      >
        <Text style={styles.quantityText}>{itemData.item.quantity}</Text>
        <View style={styles.priceAddCartContainer}>
          <Text style={styles.priceText}>${itemData.item.price}</Text>
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

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="md-chevron-back"
          size={32}
          color={StyleConfig.colors.offshadeBlack}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={styles.headerTitleText}>{props.title}</Text>
        <FontAwesome
          name="sliders"
          size={32}
          color={StyleConfig.colors.offshadeBlack}
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
      <FilterModal
        visible={modalVisible}
        close={() => {
          setModalVisible(false);
        }}
      />
      {props.dataSize > 0 ? (
        <View style={styles.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={props.listData}
            renderItem={renderProductItem}
            numColumns={2}
          />
        </View>
      ) : (
        <View style={styles.noProductContainer}>
          <Text style={styles.noProductText}>No Products Available!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  gridItemStyle: {
    height: StyleConfig.height / 3.4,
    marginTop: StyleConfig.height / 70,
    marginHorizontal: StyleConfig.width / 55,
  },
  tileContainerStyle: {
    borderColor: StyleConfig.colors.borderColor,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  container: {
    flex: 1,
    backgroundColor: StyleConfig.colors.white,
  },
  headerContainer: {
    flexDirection: "row",
    padding: StyleConfig.width / 30,
    justifyContent: "space-between",
  },
  headerTitleText: {
    fontFamily: StyleConfig.fontBold,
    fontSize: 20,
    color: StyleConfig.colors.offshadeBlack,
  },
  listContainer: {
    marginRight: StyleConfig.width / 35,
    marginLeft: StyleConfig.width / 40,
    marginBottom: StyleConfig.height / 13,
  },
  noProductContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noProductText: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 18,
    color: StyleConfig.colors.secondryTextColor2,
  },
});

export default ProductList;
