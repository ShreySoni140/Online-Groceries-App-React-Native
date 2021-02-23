import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  FlatList,
} from "react-native";
import StyleConfig from "../constants/StyleConfig";

const OfferList = (props) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
        <TouchableWithoutFeedback>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableWithoutFeedback>
      </View>
      {props.children}
      <FlatList
        data={props.data}
        renderItem={props.renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: StyleConfig.height / 40,
  },
  titleText: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 24,
    color: StyleConfig.colors.offshadeBlack,
  },
  seeAllText: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 16,
    color: StyleConfig.colors.primaryColor,
    marginRight: StyleConfig.width / 20,
  },
});

export default OfferList;
