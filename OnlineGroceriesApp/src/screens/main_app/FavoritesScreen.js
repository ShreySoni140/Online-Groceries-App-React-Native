import React from "react";
import { StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductList from "../../components/ProductList";

const FavoritesScreen = (props) => {
  const favProducts = useSelector((state) => state.products.favoriteProducts);

  return (
    <ProductList
      listData={favProducts}
      navigation={props.navigation}
      title="Favorites"
      dataSize={favProducts.length}
    />
  );
};

const styles = StyleSheet.create({});

export default FavoritesScreen;
