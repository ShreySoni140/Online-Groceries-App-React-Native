import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import StyleConfig from "../constants/StyleConfig";
import Feather from "react-native-vector-icons/Feather";

const SearchBar = (props) => {
  return (
    <View style={{ ...styles.searchBarItem, ...props.searchBarItemStyle }}>
      <TouchableWithoutFeedback onPress={props.onSelect}>
        <View style={{ ...styles.inputContainer, ...props.style }}>
          <Feather
            name="search"
            size={24}
            color={StyleConfig.colors.searchText}
            style={{ marginHorizontal: StyleConfig.width / 35 }}
          />
          <View style={{ width: StyleConfig.width * 0.65 }}>
            <TextInput
              autoFocus
              placeholder="Search Store"
              placeholderTextColor={StyleConfig.colors.secondryTextColor2}
              value={props.value}
              onChangeText={props.onChangeText}
              editable={props.editable}
              style={styles.searchText}
            />
          </View>
          {props.children}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarItem: {
    borderRadius: 15,
    overflow: "hidden",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: StyleConfig.colors.offWhiteBtn,
    alignItems: "center",
    justifyContent: "flex-start",
    height: StyleConfig.height / 17,
    borderRadius: 15,
  },
  searchText: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 14,
    fontWeight: "600",
    color: StyleConfig.colors.searchText,
  },
});

export default SearchBar;
