import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from "react-native";
import StyleConfig from "../../constants/StyleConfig";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchBar from "../../components/SearchBar";
import { GROCERY, PRODUCTS } from "../../data/dummy_data";
import OfferList from "../../components/OfferList";
import RenderItem from "../../components/RenderItem";

const HomeScreen = (props) => {
  const renderExclusiveItem = (itemData) => {
    if (itemData.item.isExclusive === true) {
      return (
        <RenderItem
          itemData={itemData}
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
    }
  };

  const renderBestSellingItem = (itemData) => {
    if (itemData.item.isBestSell === true) {
      return (
        <RenderItem
          itemData={itemData}
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
    }
  };

  const renderGroceryItem = (itemData) => {
    if (itemData.item.isGrocery === true) {
      return (
        <RenderItem
          itemData={itemData}
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
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={StyleConfig.images.logoColor} resizeMode="contain" />
      </View>
      <View style={styles.locationContainer}>
        <Ionicons
          name="md-location-sharp"
          size={24}
          color={StyleConfig.colors.locationName}
        />
        <Text style={styles.locationText}>Dhaka, Banassre</Text>
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar editable={false} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.productContainer}
      >
        <View style={styles.offerBannerContainer}>
          <Image source={StyleConfig.images.offerBg} style={styles.offerBg} />
          <View style={styles.offerContainer}>
            <Image
              source={StyleConfig.images.offerImg}
              resizeMode="contain"
              style={{ marginRight: StyleConfig.width / 50 }}
            />
            <View style={styles.offerTextContainer}>
              <Text style={styles.offerTitle}>Fresh Vegetables</Text>
              <Text style={styles.offerText}>Get Up To 40% OFF</Text>
            </View>
          </View>
        </View>
        <OfferList
          title="Exclusive Offer"
          data={PRODUCTS}
          renderItem={renderExclusiveItem}
        />
        <OfferList
          title="Best Selling"
          data={PRODUCTS}
          renderItem={renderBestSellingItem}
        />
        <OfferList
          title="Groceries"
          data={PRODUCTS}
          renderItem={renderGroceryItem}
        >
          <FlatList
            data={GROCERY}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={(itemData) => {
              return (
                <View
                  style={{
                    ...styles.catagoryTileContainer,
                    ...{ backgroundColor: itemData.item.color },
                  }}
                >
                  <Image source={itemData.item.image} resizeMode="contain" />
                  <Text style={styles.catagoryTitle}>
                    {itemData.item.title}
                  </Text>
                </View>
              );
            }}
          />
        </OfferList>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConfig.colors.white,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: StyleConfig.height / 30,
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  locationText: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 18,
    color: StyleConfig.colors.locationName,
  },
  searchBarContainer: {
    marginHorizontal: StyleConfig.width / 20,
    marginVertical: StyleConfig.height / 50,
  },
  productContainer: {
    flex: 1,
    marginLeft: StyleConfig.width / 20,
  },
  offerBannerContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: StyleConfig.colors.offWhiteBtn,
    marginRight: StyleConfig.width / 20,
  },
  offerBg: {
    position: "relative",
    zIndex: -99,
  },
  offerContainer: {
    position: "absolute",
    zIndex: 1,
    flexDirection: "row",
  },
  offerTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  offerTitle: {
    fontFamily: StyleConfig.fontAclonica,
    fontSize: 20,
    color: StyleConfig.colors.black,
  },
  offerText: {
    fontFamily: StyleConfig.fontAirBnbLight,
    fontSize: 14,
    color: StyleConfig.colors.primaryColor,
  },
  catagoryTileContainer: {
    flexDirection: "row",
    width: StyleConfig.width / 1.5,
    padding: StyleConfig.width / 20,
    borderRadius: 18,
    marginBottom: StyleConfig.height / 30,
    marginRight: StyleConfig.width / 30,
  },
  catagoryTitle: {
    flex: 1,
    fontFamily: StyleConfig.fontRegular,
    fontSize: 20,
    paddingLeft: StyleConfig.width / 40,
    textAlignVertical: "center",
  },
});

export default HomeScreen;
