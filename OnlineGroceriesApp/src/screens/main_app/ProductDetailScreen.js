import React from "react";
import { StyleSheet, View } from "react-native";
import StyleConfig from "../../constants/StyleConfig";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { FlatListSlider } from "react-native-flatlist-slider";
import { useDispatch, useSelector } from "react-redux";
import CustomImageSlider from "../../components/CustomImageSlider";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import ListItem from "../../components/ListItem";
import CustomButton from "../../components/CustomButton";
import { toggleFavorite } from "../../store/actions/products";

const ProductDetailScreen = (props) => {
  const prodId = props.route.params.productId;

  const availableProducts = useSelector((state) => state.products.products);
  const currentProductIsFavorite = useSelector((state) =>
    state.products.favoriteProducts.some((product) => product.id === prodId)
  );

  const dispatch = useDispatch();

  const selectedProduct = availableProducts.find((prod) => prod.id === prodId);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="md-chevron-back"
          size={32}
          color={StyleConfig.colors.offshadeBlack}
          onPress={() => props.navigation.goBack()}
        />
        <Feather
          name="upload"
          size={32}
          color={StyleConfig.colors.offshadeBlack}
        />
      </View>
      <View
        style={{
          backgroundColor: StyleConfig.colors.offWhiteBtn,
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
        }}
      >
        <FlatListSlider
          data={selectedProduct.prodImages}
          imageKey={"image"}
          local
          autoScroll={false}
          indicatorContainerStyle={{ paddingBottom: StyleConfig.height / 30 }}
          component={<CustomImageSlider />}
          indicatorActiveWidth={25}
          indicatorActiveColor={StyleConfig.colors.primaryColor}
          indicatorInActiveColor={StyleConfig.colors.imgSliderIndicator}
        />
      </View>
      <ScrollView
        style={{
          flex: 1,
          marginHorizontal: StyleConfig.width / 20,
          marginTop: StyleConfig.height / 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: StyleConfig.fontBold,
                fontSize: 24,
                color: StyleConfig.colors.offshadeBlack,
              }}
            >
              {selectedProduct.name}
            </Text>
            <Text
              style={{
                fontFamily: StyleConfig.fontRegular,
                fontSize: 16,
                color: StyleConfig.colors.secondryTextColor2,
              }}
            >
              {selectedProduct.quantity}
            </Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <MaterialIcons
              name={currentProductIsFavorite ? "favorite" : "favorite-outline"}
              size={30}
              color={
                currentProductIsFavorite
                  ? "red"
                  : StyleConfig.colors.offshadeBlack
              }
              onPress={() => {
                dispatch(toggleFavorite(prodId));
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: StyleConfig.height / 25,
          }}
        >
          <View
            style={{
              paddingHorizontal: StyleConfig.width / 60,
              justifyContent: "center",
            }}
          >
            <Entypo
              name="minus"
              size={24}
              color={StyleConfig.colors.imgSliderIndicator}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: StyleConfig.colors.borderColor,
              borderRadius: 17,
              height: StyleConfig.height / 20,
              width: StyleConfig.width / 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: StyleConfig.fontRegular,
                fontSize: 18,
                color: StyleConfig.colors.offshadeBlack,
              }}
            >
              1
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: StyleConfig.width / 60,
              justifyContent: "center",
            }}
          >
            <Entypo
              name="plus"
              size={24}
              color={StyleConfig.colors.primaryColor}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontFamily: StyleConfig.fontBold,
                fontSize: 24,
                color: StyleConfig.colors.offshadeBlack,
              }}
            >
              ${selectedProduct.price}
            </Text>
          </View>
        </View>
        <ListItem title="Product Detail" data={selectedProduct.description} />
        <ListItem title="Nutritions">
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "center",
              paddingRight: StyleConfig.width / 40,
            }}
          >
            <Text
              style={{
                fontFamily: StyleConfig.fontRegular,
                fontSize: 9,
                color: StyleConfig.colors.secondryTextColor2,
                backgroundColor: "#EBEBEB",
              }}
            >
              100gm
            </Text>
          </View>
        </ListItem>
        <ListItem title="Review">
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingRight: StyleConfig.width / 40,
            }}
          >
            <Ionicons
              name="md-star-sharp"
              size={20}
              color={StyleConfig.colors.reviewStar}
            />
            <Ionicons
              name="md-star-sharp"
              size={20}
              color={StyleConfig.colors.reviewStar}
            />
            <Ionicons
              name="md-star-sharp"
              size={20}
              color={StyleConfig.colors.reviewStar}
            />
            <Ionicons
              name="md-star-sharp"
              size={20}
              color={StyleConfig.colors.reviewStar}
            />
            <Ionicons
              name="md-star-sharp"
              size={20}
              color={StyleConfig.colors.reviewStar}
            />
          </View>
        </ListItem>
      </ScrollView>
      <View
        style={{
          marginBottom: StyleConfig.height / 40,
          marginHorizontal: StyleConfig.width / 20,
        }}
      >
        <CustomButton
          title="Add To Basket"
          titleStyle={{ color: StyleConfig.colors.offWhite }}
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
  headerContainer: {
    flexDirection: "row",
    padding: StyleConfig.width / 30,
    justifyContent: "space-between",
    backgroundColor: StyleConfig.colors.offWhiteBtn,
  },
  descriptionText: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 13,
    color: StyleConfig.colors.secondryTextColor2,
  },
});

export default ProductDetailScreen;
