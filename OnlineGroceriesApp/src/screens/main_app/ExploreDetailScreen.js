import React from "react";
import { StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductList from "../../components/ProductList";
import StyleConfig from "../../constants/StyleConfig";
import { CATEGORIES } from "../../data/dummy_data";

const ExploreDetailScreen = (props) => {
  const catId = props.route.params.catagoryId;

  const availableProducts = useSelector((state) => state.products.products);

  const displayedProducts = availableProducts.filter(
    (product) => product.categoryId.indexOf(catId) >= 0
  );

  if (displayedProducts.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No products available</Text>
      </View>
    );
  }

  const selectedCatagory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <ProductList
      listData={displayedProducts}
      navigation={props.navigation}
      title={selectedCatagory.title}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ExploreDetailScreen;
