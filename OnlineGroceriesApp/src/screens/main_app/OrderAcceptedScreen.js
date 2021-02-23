import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import StyleConfig from "../../constants/StyleConfig";

const OrderAcceptedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={StyleConfig.images.bgNum}
        resizeMode="contain"
        blurRadius={20}
      />
      <Image
        style={styles.bgImage2}
        source={StyleConfig.images.bgAllProcess}
        resizeMode="contain"
        blurRadius={15}
      />

      <View style={styles.topImage}>
        <Image source={StyleConfig.images.orderAccepted} resizeMode="contain" />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.caption}>Your Order has been accepted</Text>
        <View style={styles.secondryTextContainer}>
          <Text style={styles.secondryText}>
            Your order has been placed and is on it’s way to being processed
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <CustomButton
          title="Track Order"
          titleStyle={{ color: StyleConfig.colors.offWhite }}
          buttonItemStyle={{ flex: 1 }}
        />
      </View>
      <View style={styles.backHomeContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("MainTabNavigator", { screen: "Home" });
          }}
        >
          <Text style={styles.backHomeText}>Back to home</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConfig.colors.bgColor2,
  },
  bgImage: {
    position: "absolute",
    zIndex: -99,
  },
  bgImage2: {
    position: "absolute",
    zIndex: -99,
    marginTop: StyleConfig.height / 1.23,
  },
  topImage: {
    marginLeft: StyleConfig.width / 15,
    marginRight: StyleConfig.width / 7,
    marginTop: StyleConfig.height / 7,
    alignItems: "center",
  },
  contentContainer: {
    marginHorizontal: StyleConfig.width / 15,
    marginTop: StyleConfig.height / 15,
  },
  caption: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 28,
    fontWeight: "600",
    color: StyleConfig.colors.offshadeBlack,
    textAlign: "center",
  },
  secondryTextContainer: {
    marginTop: StyleConfig.height / 50,
  },
  secondryText: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 16,
    fontWeight: "600",
    color: StyleConfig.colors.secondryTextColor2,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginHorizontal: StyleConfig.width / 15,
    marginTop: StyleConfig.height / 5,
  },
  backHomeContainer: {
    marginTop: StyleConfig.height / 50,
    alignItems: "center",
  },
  backHomeText: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 18,
    fontWeight: "600",
    color: StyleConfig.colors.offshadeBlack,
  },
});

export default OrderAcceptedScreen;
