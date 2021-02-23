import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import FavList from "../../components/FavItem";
import OrderFailModal from "../../components/OrderFailModal";
import StyleConfig from "../../constants/StyleConfig";

const FavoritesScreen = (props) => {
  const favProducts = useSelector((state) => state.products.favoriteProducts);
  const [modalVisible, setModalVisible] = useState(false);

  const renderFavItems = (itemData) => {
    return (
      <FavList
        productName={itemData.item.name}
        image={itemData.item.image}
        quantity={itemData.item.quantity}
        price={itemData.item.price}
        onSelect={() => {
          props.navigation.navigate("Main", {
            screen: "ProductDetail",
            params: {
              productId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favorites</Text>
      </View>
      <View style={styles.favListContainer}>
        <FlatList
          data={favProducts}
          renderItem={renderFavItems}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.addToCartBtnContainer}>
        <CustomButton
          title="Add All To Cart"
          titleStyle={{ flex: 1 }}
          onSelect={() => {
            setModalVisible(true);
          }}
        />
        <OrderFailModal
          visible={modalVisible}
          close={() => {
            setModalVisible(false);
          }}
          onSelect={() => {
            setModalVisible(false);
          }}
          goHome={() => {
            props.navigation.navigate("MainTabNavigator", {
              screen: "Home",
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConfig.colors.white,
  },
  header: {
    borderColor: StyleConfig.colors.borderColor,
    borderBottomWidth: 1,
    paddingVertical: StyleConfig.height / 40,
    alignItems: "center",
  },
  headerText: {
    fontFamily: StyleConfig.fontBold,
    fontSize: 20,
    color: StyleConfig.colors.offshadeBlack,
  },
  favListContainer: {
    borderColor: StyleConfig.colors.borderColor,
    borderBottomWidth: 1,
    flex: 1,
  },
  addToCartBtnContainer: {
    marginHorizontal: StyleConfig.width / 20,
    marginVertical: StyleConfig.height / 25,
  },
});

export default FavoritesScreen;
