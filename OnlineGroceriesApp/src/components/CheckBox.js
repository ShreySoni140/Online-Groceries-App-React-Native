import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Checkbox } from "react-native-paper";
import StyleConfig from "../constants/StyleConfig";

const CheckBox = (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setChecked(!checked);
      }}
    >
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
          color={StyleConfig.colors.primaryColor}
        />
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              ...styles.checkboxTitle,
              ...{
                color: checked
                  ? StyleConfig.colors.primaryColor
                  : StyleConfig.colors.offshadeBlack,
              },
            }}
          >
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: StyleConfig.height / 120,
  },
  checkboxTitle: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 16,
  },
});

export default CheckBox;
