import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import GroceryNavigator from "./src/navigation/GroceryNavigator";
import productsReducer from "./src/store/reducers/products";

const rootReducer = combineReducers({ products: productsReducer });

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <GroceryNavigator />
    </Provider>
  );
}
