import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CartItem from "../../components/CartItem";
import CheckoutModal from "../../components/CheckoutModal";
import CustomButton from "../../components/CustomButton";
import StyleConfig from "../../constants/StyleConfig";
import { PRODUCTS } from "../../data/dummy_data";

const CartScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderCartItem = (itemData) => {
    return (
      <CartItem
        image={itemData.item.image}
        productName={itemData.item.name}
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
        <Text style={styles.headerText}>My Cart</Text>
      </View>
      <View style={styles.cartListContainer}>
        <FlatList
          data={PRODUCTS}
          renderItem={renderCartItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={{ margin: StyleConfig.width / 20 }}>
        <CustomButton
          title="Go to Checkout"
          titleStyle={{ flex: 1 }}
          onSelect={() => {
            setModalVisible(true);
          }}
          child2={<Text style={styles.priceText}>$12.99</Text>}
        />
        <CheckoutModal
          visible={modalVisible}
          close={() => {
            setModalVisible(false);
          }}
          onSelect={() => {
            props.navigation.navigate("Main", { screen: "OrderAccepted" });
            setModalVisible(false);
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
  cartListContainer: {
    borderColor: StyleConfig.colors.borderColor,
    borderBottomWidth: 1,
    flex: 1,
  },
  priceText: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 12,
    color: StyleConfig.colors.bgColor,
    backgroundColor: StyleConfig.colors.darkGreen,
    padding: StyleConfig.width / 100,
    borderRadius: 4,
    marginRight: StyleConfig.width / 30,
  },
});

export default CartScreen;
