import { PRODUCTS } from "../../data/dummy_data";
import { TOGGLE_FAVORITE } from "../actions/products";

const initialState = {
  products: PRODUCTS,
  favoriteProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteProducts.findIndex(
        (product) => product.id === action.productId
      );
      if (existingIndex >= 0) {
        const updatedFavProducts = [...state.favoriteProducts];
        updatedFavProducts.splice(existingIndex, 1);
        return { ...state, favoriteProducts: updatedFavProducts };
      } else {
        const product = state.products.find(
          (products) => products.id === action.productId
        );
        return {
          ...state,
          favoriteProducts: state.favoriteProducts.concat(product),
        };
      }
    default:
      return state;
  }
};

export default productsReducer;
