import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../../components/SearchBar";
import StyleConfig from "../../constants/StyleConfig";
import CategoryTile from "../../components/CategoryTile";
import { CATEGORIES } from "../../data/dummy_data";

const ExploreScreen = (props) => {
  const renderTileItem = (itemData) => {
    return (
      <CategoryTile
        title={itemData.item.title}
        color={itemData.item.color}
        borderColor={itemData.item.border}
        image={itemData.item.image}
        onSelect={() => {}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Products</Text>
      <View style={styles.searchBarContainer}>
        <SearchBar editable={false} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={CATEGORIES}
          renderItem={renderTileItem}
          numColumns={2}
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
  title: {
    fontFamily: StyleConfig.fontBold,
    fontSize: 20,
    color: StyleConfig.colors.offshadeBlack,
    textAlign: "center",
    marginVertical: StyleConfig.height / 50,
  },
  searchBarContainer: {
    marginHorizontal: StyleConfig.width / 20,
    marginVertical: StyleConfig.height / 50,
  },
  listContainer: {
    marginRight: StyleConfig.width / 20,
    marginLeft: StyleConfig.width / 40,
  },
});

export default ExploreScreen;
