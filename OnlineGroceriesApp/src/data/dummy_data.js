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

export const GROCERY = [
  new Category(
    "g1",
    "Pulses",
    "#F8A44C26",
    StyleConfig.colors.white,
    StyleConfig.images.pulses
  ),
  new Category(
    "g2",
    "Rice",
    "#53B17526",
    StyleConfig.colors.white,
    StyleConfig.images.rice
  ),
];

export const PRODUCTS = [
  new Product(
    "i1",
    "Organic Banana",
    "7pcs, Price",
    4.99,
    StyleConfig.images.banana,
    "c1",
    [
      {
        image: StyleConfig.images.banana,
      },
      {
        image: StyleConfig.images.banana,
      },
      {
        image: StyleConfig.images.banana,
      },
    ],
    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.",
    true,
    false,
    false
  ),
  new Product(
    "i2",
    "Red Apple",
    "1kg, Price",
    4.99,
    StyleConfig.images.apple,
    "c1",
    [
      {
        image: StyleConfig.images.apple,
      },
      {
        image: StyleConfig.images.apple,
      },
      {
        image: StyleConfig.images.apple,
      },
    ],
    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.",
    true,
    false,
    false
  ),
  new Product(
    "i3",
    "Bell Pepper Red",
    "1kg, Price",
    4.99,
    StyleConfig.images.redBellPepper,
    "c1",
    [
      {
        image: StyleConfig.images.redBellPepper,
      },
      {
        image: StyleConfig.images.redBellPepper,
      },
      {
        image: StyleConfig.images.redBellPepper,
      },
    ],
    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.",
    false,
    true,
    false
  ),
  new Product(
    "i4",
    "Ginger",
    "250gm, Price",
    4.99,
    StyleConfig.images.ginger,
    "c1",
    [
      {
        image: StyleConfig.images.ginger,
      },
      {
        image: StyleConfig.images.ginger,
      },
      {
        image: StyleConfig.images.ginger,
      },
    ],
    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.",
    false,
    true,
    false
  ),
  new Product(
    "i5",
    "Beef Bone",
    "1kg, Price",
    4.99,
    StyleConfig.images.beefBone,
    "c3",
    [
      {
        image: StyleConfig.images.beefBone,
      },
      {
        image: StyleConfig.images.beefBone,
      },
      {
        image: StyleConfig.images.beefBone,
      },
    ],
    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.",
    false,
    false,
    true
  ),
  new Product(
    "i6",
    "Broiler Chicken",
    "1kg, Price",
    4.99,
    StyleConfig.images.broilerChicken,
    "c3",
    [
      {
        image: StyleConfig.images.broilerChicken,
      },
      {
        image: StyleConfig.images.broilerChicken,
      },
      {
        image: StyleConfig.images.broilerChicken,
      },
    ],
    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.",
    false,
    false,
    true
  ),
  new Product(
    "i7",
    "Diet Coke",
    "355ml, Price",
    1.99,
    StyleConfig.images.dietCoke,
    "c6",
    [
      {
        image: StyleConfig.images.dietCoke,
      },
      {
        image: StyleConfig.images.dietCoke,
      },
      {
        image: StyleConfig.images.dietCoke,
      },
    ],
    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.",
    false,
    false,
    false
  ),
  new Product(
    "i8",
    "Sprite Can",
    "325ml, Price",
    1.5,
    StyleConfig.images.sprite,
    "c6",
    [
      {
        image: StyleConfig.images.sprite,
      },
      {
        image: StyleConfig.images.sprite,
      },
      {
        image: StyleConfig.images.sprite,
      },
    ],
    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.",
    false,
    false,
    false
  ),
  new Product(
    "i9",
    "Apple & Grape Juice",
    "2L, Price",
    15.99,
    StyleConfig.images.appleJuice,
    "c6",
    [
      {
        image: StyleConfig.images.appleJuice,
      },
      {
        image: StyleConfig.images.appleJuice,
      },
      {
        image: StyleConfig.images.appleJuice,
      },
    ],
    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.",
    false,
    false,
    false
  ),
  new Product(
    "i10",
    "Orange Juice",
    "2L, Price",
    15.99,
    StyleConfig.images.orangeJuice,
    "c6",
    [
      {
        image: StyleConfig.images.orangeJuice,
      },
      {
        image: StyleConfig.images.orangeJuice,
      },
      {
        image: StyleConfig.images.orangeJuice,
      },
    ],
    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.",
    false,
    false,
    false
  ),
  new Product(
    "i11",
    "Coca Cola Can",
    "325ml, Price",
    4.99,
    StyleConfig.images.coke,
    "c6",
    [
      {
        image: StyleConfig.images.coke,
      },
      {
        image: StyleConfig.images.coke,
      },
      {
        image: StyleConfig.images.coke,
      },
    ],
    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.",
    false,
    false,
    false
  ),
  new Product(
    "i12",
    "Pepsi Can",
    "330ml, Price",
    4.99,
    StyleConfig.images.pepsi,
    "c6",
    [
      {
        image: StyleConfig.images.pepsi,
      },
      {
        image: StyleConfig.images.pepsi,
      },
      {
        image: StyleConfig.images.pepsi,
      },
    ],
    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.",
    false,
    false,
    false
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
