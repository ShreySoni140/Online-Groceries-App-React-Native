import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import SearchBar from "../../components/SearchBar";
import StyleConfig from "../../constants/StyleConfig";
import Tile from "../../components/Tile";
import { CATEGORIES } from "../../data/dummy_data";

const ExploreScreen = (props) => {
  const renderTileItem = (itemData) => {
    return (
      <Tile
        title={itemData.item.title}
        gridItemStyle={{
          marginTop: StyleConfig.height / 70,
          marginLeft: StyleConfig.width / 35,
          height: StyleConfig.height / 4.5,
        }}
        containerStyle={{
          backgroundColor: itemData.item.color,
          borderColor: itemData.item.border,
        }}
        titleStyle={{ marginHorizontal: StyleConfig.width / 35 }}
        image={itemData.item.image}
        onSelect={() => {
          props.navigation.navigate("Main", {
            screen: "ExploreDetail",
            params: { catagoryId: itemData.item.id },
          });
        }}
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
