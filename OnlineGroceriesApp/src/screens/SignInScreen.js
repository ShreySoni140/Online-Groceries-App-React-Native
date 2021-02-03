import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Flags from "react-native-flags";
import CustomButton from "../components/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome";
import StyleConfig from "../constants/StyleConfig";

const SignInScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image source={StyleConfig.images.bgSignIn} />
      <View style={{ width: StyleConfig.width / 1.2 }}>
        <View style={styles.captionContainer}>
          <Text style={styles.caption}>Get your groceries with nectar</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            props.navigation.navigate("Number");
          }}
        >
          <View style={styles.contactContainer}>
            <Flags code="IN" size={32} />
            <Text style={styles.countryCode}>+91</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.secondryTextContainer}>
          <Text style={styles.secondryText}>Or connect with social media</Text>
        </View>
        <View style={styles.footer}>
          <CustomButton
            title="Continue with Google"
            style={styles.googleButton}
          >
            <Icon name="google" color="white" size={25} />
          </CustomButton>
          <CustomButton
            title="Continue with Facebook"
            style={styles.facebookButton}
          >
            <Icon name="facebook" color="white" size={25} />
          </CustomButton>
        </View>
      </View>
      <Image
        style={styles.bgImage}
        source={StyleConfig.images.bgAllProcess}
        resizeMode="contain"
        blurRadius={15}
      />
    </View>
  );
};

SignInScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: StyleConfig.colors.bgColor,
  },
  captionContainer: {
    width: StyleConfig.width / 1.6,
    marginTop: StyleConfig.height / 20,
  },
  caption: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 26,
    fontWeight: "600",
    color: StyleConfig.colors.black,
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: StyleConfig.colors.borderColor,
    marginTop: StyleConfig.height / 70,
  },
  countryCode: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 18,
    marginHorizontal: StyleConfig.width / 40,
    color: StyleConfig.colors.black,
  },
  secondryTextContainer: {
    marginVertical: StyleConfig.height / 20,
  },
  secondryText: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 14,
    fontWeight: "600",
    color: StyleConfig.colors.secondryTextColor,
    textAlign: "center",
  },
  footer: {
    height: StyleConfig.height / 5.5,
    justifyContent: "space-between",
  },
  googleButton: {
    backgroundColor: StyleConfig.colors.google,
  },
  facebookButton: {
    backgroundColor: StyleConfig.colors.facebook,
  },
  bgImage: {
    position: "absolute",
    zIndex: -99,
    marginTop: StyleConfig.height / 1.23,
  },
});

export default SignInScreen;
