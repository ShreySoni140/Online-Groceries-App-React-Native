import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { Modal, StyleSheet, Text, View } from "react-native";
import StyleConfig from "../constants/StyleConfig";
import CheckBoxGroup from "./CheckBoxGroup";
import CustomButton from "./CustomButton";

const FilterModal = (props) => {
  checkBoxData1 = [
    { id: "cb1", title: "Eggs" },
    { id: "cb2", title: "Noodles & Pasta" },
    { id: "cb3", title: "Chips & Crisps" },
    { id: "cb4", title: "Fast Food" },
  ];

  checkBoxData2 = [
    { id: "cb1", title: "Individual Collection" },
    { id: "cb2", title: "Cocola" },
    { id: "cb3", title: "Ifad" },
    { id: "cb4", title: "Kazi Farmas" },
  ];

  return (
    <View style={{ backgroundColor: StyleConfig.colors.white }}>
      <Modal animationType="slide" visible={props.visible}>
        <View style={styles.headerContainer}>
          <Entypo name="cross" size={32} color="black" onPress={props.close} />
          <Text style={styles.headerText}>Filters</Text>
        </View>
        <View style={styles.cbGroupContainer}>
          <CheckBoxGroup cbGroupTitle="Catagories" data={checkBoxData1} />
          <CheckBoxGroup cbGroupTitle="Brands" data={checkBoxData2} />
          <View style={styles.filterBtnContainer}>
            <CustomButton title="Apply Filter" onSelect={props.close} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: StyleConfig.height / 60,
  },
  headerText: {
    fontFamily: StyleConfig.fontBold,
    fontSize: 20,
    color: StyleConfig.colors.offshadeBlack,
    flex: 1,
    textAlignVertical: "center",
    textAlign: "center",
  },
  cbGroupContainer: {
    flex: 1,
    backgroundColor: StyleConfig.colors.offWhiteBtn,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  filterBtnContainer: {
    flex: 1,
    marginVertical: StyleConfig.height / 25,
    justifyContent: "flex-end",
    marginHorizontal: StyleConfig.width / 20,
  },
});

export default FilterModal;
