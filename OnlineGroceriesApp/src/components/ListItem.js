import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import StyleConfig from "../constants/StyleConfig";
import Ionicons from "react-native-vector-icons/Ionicons";

const ListItem = (props) => {
  const [showView, setShowView] = useState(false);

  return (
    <View
      style={{ ...styles.listItemContainer, ...props.listItemContainerStyle }}
    >
      <View style={{ flexDirection: "row" }}>
        {props.iconStart}
        <Text style={{ ...styles.listItemTitle, ...props.listItemTitleStyle }}>
          {props.title}
        </Text>
        {props.children}
        <Ionicons
          name={showView ? "md-chevron-down" : "md-chevron-forward"}
          size={24}
          color={StyleConfig.colors.offshadeBlack}
          onPress={() => {
            setShowView((prevState) => !prevState);
          }}
        />
      </View>
      {showView && <Text style={styles.detailsText}>{props.data}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    borderTopWidth: 1,
    borderColor: StyleConfig.colors.borderColor,
    paddingVertical: StyleConfig.height / 50,
  },
  listItemTitle: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 16,
    color: StyleConfig.colors.offshadeBlack,
    flex: 1,
  },
  detailsText: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 13,
    color: StyleConfig.colors.secondryTextColor2,
  },
});

export default ListItem;
