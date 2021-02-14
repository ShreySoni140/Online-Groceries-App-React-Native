import React from "react";
import Product from "../models/product";
import StyleConfig from "../constants/StyleConfig";
import AccountItem from "../models/accitems";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Category from "../models/category";

export const CATEGORIES = [
  new Category(
    "c1",
    "Fresh Fruits & Vegetables",
    "#53B17519",
    "#53B175B3",
    StyleConfig.images.cat1
  ),
  new Category(
    "c2",
    "Cooking Oil & Ghee",
    "#F8A44C19",
    "#F8A44CB3",
    StyleConfig.images.cat2
  ),
  new Category(
    "c3",
    "Meat & Fish",
    "#F7A59340",
    "#F7A593",
    StyleConfig.images.cat3
  ),
  new Category(
    "c4",
    "Bakery & Snacks",
    "#D3B0E040",
    "#D3B0E0",
    StyleConfig.images.cat4
  ),
  new Category(
    "c5",
    "Dairy & Eggs",
    "#FDE59840",
    "#FDE598",
    StyleConfig.images.cat5
  ),
  new Category(
    "c6",
    "Beverages",
    "#B7DFF540",
    "#B7DFF5",
    StyleConfig.images.cat6
  ),
];

export const PRODUCTS = [
  new Product(
    "i1",
    "Organic Banana",
    "7pcs, Price",
    4.99,
    StyleConfig.images.banana
  ),
  new Product("i2", "Red Apple", "1kg, Price", 4.99, StyleConfig.images.apple),
  new Product(
    "i3",
    "Organic Banana",
    "7pcs, Price",
    4.99,
    StyleConfig.images.banana
  ),
  new Product(
    "i4",
    "Bell Pepper Red",
    "1kg, Price",
    4.99,
    StyleConfig.images.redBellPepper
  ),
  new Product("i5", "Ginger", "250gm, Price", 4.99, StyleConfig.images.ginger),
  new Product(
    "i6",
    "Organic Banana",
    "7pcs, Price",
    4.99,
    StyleConfig.images.banana
  ),
  new Product(
    "i7",
    "Beef Bone",
    "1kg, Price",
    4.99,
    StyleConfig.images.beefBone
  ),
  new Product(
    "i8",
    "Broiler Chicken",
    "1kg, Price",
    4.99,
    StyleConfig.images.broilerChicken
  ),
  new Product(
    "i9",
    "Organic Banana",
    "1kg, Price",
    4.99,
    StyleConfig.images.banana
  ),
];

export const ACCITEMS = [
  new AccountItem(
    "a1",
    "Orders",
    (
      <Feather
        name="shopping-bag"
        size={24}
        color="black"
        style={{
          marginHorizontal: StyleConfig.width / 15,
        }}
      />
    )
  ),
  new AccountItem(
    "a2",
    "My Details",
    (
      <FontAwesome
        name="id-card-o"
        size={24}
        color="black"
        style={{
          marginHorizontal: StyleConfig.width / 15,
        }}
      />
    )
  ),
  new AccountItem(
    "a3",
    "Delivery Address",
    (
      <Ionicons
        name="md-location-outline"
        size={24}
        color="black"
        style={{ marginHorizontal: StyleConfig.width / 15 }}
      />
    )
  ),
  new AccountItem(
    "a4",
    "Payment Methods",
    (
      <FontAwesome5
        name="credit-card"
        size={24}
        color="black"
        style={{
          marginHorizontal: StyleConfig.width / 15,
        }}
      />
    )
  ),
  new AccountItem(
    "a5",
    "Promo Card",
    (
      <FontAwesome
        name="ticket"
        size={24}
        color="black"
        style={{
          marginHorizontal: StyleConfig.width / 15,
        }}
      />
    )
  ),
  new AccountItem(
    "a6",
    "Notifications",
    (
      <Ionicons
        name="md-notifications-outline"
        size={24}
        color="black"
        style={{
          marginHorizontal: StyleConfig.width / 15,
        }}
      />
    )
  ),
  new AccountItem(
    "a7",
    "Help",
    (
      <Ionicons
        name="md-help-circle-outline"
        size={24}
        color="black"
        style={{
          marginHorizontal: StyleConfig.width / 15,
        }}
      />
    )
  ),
  new AccountItem(
    "a8",
    "About",
    (
      <AntDesign
        name="exclamationcircleo"
        size={20}
        color="black"
        style={{
          marginHorizontal: StyleConfig.width / 14,
        }}
      />
    )
  ),
];
