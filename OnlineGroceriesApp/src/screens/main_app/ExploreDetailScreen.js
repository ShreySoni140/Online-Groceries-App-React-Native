import React from "react";
import { useSelector } from "react-redux";
import ProductList from "../../components/ProductList";
import { CATEGORIES } from "../../data/dummy_data";

const ExploreDetailScreen = (props) => {
  const catId = props.route.params.catagoryId;

  const availableProducts = useSelector((state) => state.products.products);

  const displayedProducts = availableProducts.filter(
    (product) => product.categoryId.indexOf(catId) >= 0
  );

  const selectedCatagory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <ProductList
      listData={displayedProducts}
      navigation={props.navigation}
      title={selectedCatagory.title}
      dataSize={displayedProducts.length}
    />
  );
};

export default ExploreDetailScreen;
