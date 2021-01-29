import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
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
          {/* <View style={styles.contactInputContainer}>
          <TextInput
            style={styles.contactInput}
            maxLength={10}
            keyboardType="numeric"
            onFocus={() => {
              props.navigation.navigate("Number");
            }}
          />
        </View> */}
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.secondryTextContainer}>
        <Text style={styles.secondryText}>Or connect with social media</Text>
      </View>
      <CustomButton title="Continue with Google" style={styles.googleButton}>
        <Icon name="google" color="white" size={25} />
      </CustomButton>
      <CustomButton
        title="Continue with Facebook"
        style={styles.facebookButton}
      >
        <Icon name="facebook" color="white" size={25} />
      </CustomButton>
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
    justifyContent: "flex-start",
    backgroundColor: StyleConfig.colors.bgColor,
  },
  captionContainer: {
    alignSelf: "flex-start",
    width: StyleConfig.width / 1.6,
    marginLeft: StyleConfig.width / 15,
    marginTop: StyleConfig.height / 15,
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
    width: StyleConfig.width / 1.2,
    height: StyleConfig.height / 20,
    marginTop: StyleConfig.height / 70,
  },
  contactInputContainer: {
    height: StyleConfig.height / 20,
    width: StyleConfig.width * 0.64,
    alignItems: "flex-start",
  },
  countryCode: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 18,
    marginBottom: StyleConfig.height / 300,
    marginHorizontal: StyleConfig.width / 40,
    color: StyleConfig.colors.black,
  },
  contactInput: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 18,
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
  },
  googleButton: {
    backgroundColor: StyleConfig.colors.google,
    width: StyleConfig.width / 1.2,
  },
  facebookButton: {
    backgroundColor: StyleConfig.colors.facebook,
    marginTop: StyleConfig.height / 50,
    width: StyleConfig.width / 1.2,
  },
});

export default SignInScreen;
