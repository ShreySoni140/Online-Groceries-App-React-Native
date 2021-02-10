import Product from "../models/product";
import StyleConfig from "../src/constants/StyleConfig";

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
