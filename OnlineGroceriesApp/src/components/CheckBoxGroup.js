import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import StyleConfig from "../constants/StyleConfig";
import CheckBox from "./CheckBox";

const CheckBoxGroup = (props) => {
  const renderCheckBox = (itemData) => {
    return <CheckBox title={itemData.item.title} />;
  };

  return (
    <View style={{ marginHorizontal: StyleConfig.width / 20 }}>
      <Text style={styles.cbGroupHeading}>{props.cbGroupTitle}</Text>
      <FlatList data={props.data} renderItem={renderCheckBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  cbGroupHeading: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 24,
    color: StyleConfig.colors.offshadeBlack,
    marginVertical: StyleConfig.height / 40,
  },
});

export default CheckBoxGroup;
