import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import StyleConfig from "../../constants/StyleConfig";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../../components/CustomButton";
import { ACCITEMS } from "../../data/dummy_data";

const AccountScreen = (props) => {
  const renderAccItems = (itemData) => {
    return (
      <CustomButton
        title={itemData.item.title}
        buttonItemStyle={{ borderRadius: 0 }}
        style={styles.accMenuItem}
        titleStyle={styles.accMenuItemText}
        arrow={
          <Ionicons
            name="md-chevron-forward"
            size={24}
            color={StyleConfig.colors.offshadeBlack}
            style={{ marginHorizontal: StyleConfig.width / 20 }}
          />
        }
      >
        {itemData.item.icon}
      </CustomButton>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.userDetailContainer}>
        <View style={styles.userImageContainer}>
          <Image
            source={StyleConfig.images.userIcon}
            resizeMode="contain"
            style={styles.userImage}
          />
        </View>
        <View style={styles.userDetail}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.userName}>Firstname Lastname</Text>
            <TouchableWithoutFeedback>
              <MaterialCommunityIcons
                name="pencil-outline"
                size={24}
                color={StyleConfig.colors.primaryColor}
              />
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.userEmail}>abc@xyz.com</Text>
        </View>
      </View>
      <View style={styles.accMenuContainer}>
        <FlatList data={ACCITEMS} renderItem={renderAccItems} />
      </View>
      <View style={styles.logoutButtonContainer}>
        <CustomButton
          title="Log Out"
          style={{ backgroundColor: StyleConfig.colors.offWhiteBtn }}
          titleStyle={styles.logoutButtonText}
          onSelect={() => {
            props.navigation.navigate("Auth", { screen: "LogIn" });
          }}
        >
          <MaterialIcons
            name="logout"
            size={24}
            color={StyleConfig.colors.primaryColor}
            style={{
              marginLeft: StyleConfig.width / 15,
            }}
          />
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConfig.colors.white,
  },
  userDetailContainer: {
    flexDirection: "row",
    marginHorizontal: StyleConfig.width / 15,
    marginTop: StyleConfig.height / 25,
  },
  userImageContainer: {
    borderRadius: 27,
    overflow: "hidden",
    marginRight: StyleConfig.width / 30,
  },
  userImage: {
    width: StyleConfig.width / 6,
    height: StyleConfig.width / 6,
  },
  userDetail: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  userName: {
    fontFamily: StyleConfig.fontBold,
    fontSize: 20,
    color: StyleConfig.colors.offshadeBlack,
    marginRight: StyleConfig.width / 70,
  },
  userEmail: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 16,
    color: StyleConfig.colors.secondryTextColor2,
  },
  accMenuContainer: {
    borderTopWidth: 1,
    borderColor: StyleConfig.colors.borderColor,
    marginTop: StyleConfig.height / 30,
  },
  accMenuItem: {
    backgroundColor: StyleConfig.colors.white,
    borderBottomWidth: 1,
    borderColor: StyleConfig.colors.borderColor,
    borderRadius: 0,
  },
  accMenuItemText: {
    flex: 1,
    color: StyleConfig.colors.offshadeBlack,
    marginRight: StyleConfig.width / 15,
    textAlign: "left",
  },
  logoutButtonContainer: {
    flex: 1,
    marginHorizontal: StyleConfig.width / 15,
    marginTop: StyleConfig.height / 15,
  },
  logoutButtonText: {
    flex: 1,
    color: StyleConfig.colors.primaryColor,
    marginRight: StyleConfig.width / 15,
  },
});

export default AccountScreen;
