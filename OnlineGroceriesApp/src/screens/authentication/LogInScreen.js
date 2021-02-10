import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import Icon from "react-native-vector-icons/Ionicons";
import StyleConfig from "../../constants/StyleConfig";
import { ScrollView } from "react-native-gesture-handler";

const LogInScreen = ({ navigation }) => {
  const [secure, setSecure] = useState(true);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height"
        keyboardVerticalOffset={40}
      >
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
        <ScrollView>
          <View style={styles.topImage}>
            <Image source={StyleConfig.images.logoColor} resizeMode="contain" />
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.caption}>Log In</Text>
            <View style={styles.secondryTextContainer}>
              <Text style={styles.secondryText}>
                Enter your emails and password
              </Text>
            </View>
            <View style={styles.inputTitleContainer}>
              <Text style={styles.inputTitle}>Email</Text>
            </View>
            <View style={styles.authContainer}>
              <View style={styles.authInputContainer}>
                <TextInput
                  style={styles.authInput}
                  placeholder="Email"
                  placeholderTextColor={StyleConfig.colors.placeholderColor}
                />
              </View>
            </View>
            <View style={styles.inputTitleContainer}>
              <Text style={styles.inputTitle}>Password</Text>
            </View>
            <View style={styles.authContainer}>
              <View style={styles.authInputContainer}>
                <TextInput
                  secureTextEntry={secure}
                  style={styles.authInput}
                  placeholder="Password"
                  placeholderTextColor={StyleConfig.colors.placeholderColor}
                />
                <Icon
                  name={secure ? "md-eye-off-outline" : "md-eye-outline"}
                  size={24}
                  color="black"
                  onPress={() => {
                    setSecure(!secure);
                  }}
                />
              </View>
            </View>
            <View style={styles.forgotPassContainer}>
              <Text style={styles.forgotPassText}>Forgot Password?</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <CustomButton
              title="Log In"
              titleStyle={{ color: StyleConfig.colors.offWhite }}
              buttonItemStyle={{ flex: 1 }}
              onSelect={() => {
                navigation.navigate("Main", { screen: "MainTabNavigator" });
              }}
            />
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>
              Don’t have an account?&nbsp;
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <Text style={{ color: StyleConfig.colors.primaryColor }}>
                  SignUp
                </Text>
              </TouchableWithoutFeedback>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    marginHorizontal: StyleConfig.width / 15,
    marginTop: StyleConfig.height / 12,
    alignItems: "center",
  },
  contentContainer: {
    marginHorizontal: StyleConfig.width / 15,
    marginTop: StyleConfig.height / 8,
  },
  caption: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 26,
    fontWeight: "600",
    color: StyleConfig.colors.offshadeBlack,
  },
  secondryTextContainer: {
    marginTop: StyleConfig.height / 100,
  },
  secondryText: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 16,
    fontWeight: "600",
    color: StyleConfig.colors.secondryTextColor2,
  },
  inputTitleContainer: {
    marginTop: StyleConfig.height / 30,
  },
  inputTitle: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 16,
    fontWeight: "600",
    color: StyleConfig.colors.secondryTextColor2,
  },
  authContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: StyleConfig.colors.borderColor,
  },
  authInputContainer: {
    flexDirection: "row",
    height: StyleConfig.height / 20,
    width: StyleConfig.width * 0.86,
    alignItems: "center",
  },
  authInput: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 18,
    color: StyleConfig.colors.offshadeBlack,
    width: StyleConfig.width / 1.3,
  },
  forgotPassContainer: {
    marginTop: StyleConfig.height / 45,
    alignItems: "flex-end",
  },
  forgotPassText: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 14,
    fontWeight: "600",
    color: StyleConfig.colors.offshadeBlack,
  },
  footer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginHorizontal: StyleConfig.width / 15,
    marginTop: StyleConfig.height / 35,
  },
  signUpContainer: {
    marginTop: StyleConfig.height / 35,
    alignItems: "center",
  },
  signUpText: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 14,
    fontWeight: "600",
    color: StyleConfig.colors.offshadeBlack,
  },
});

export default LogInScreen;
