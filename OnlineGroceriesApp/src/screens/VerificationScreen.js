import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import CustomButton from "../components/CustomButton";
import Icon from "react-native-vector-icons/Ionicons";
import StyleConfig from "../constants/StyleConfig";

const SignInScreen = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
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
        <CustomButton
          style={styles.backButton}
          onPressFeedback="hidden"
          onSelect={() => {
            props.navigation.navigate("Number");
          }}
        >
          <Icon
            name="md-chevron-back"
            size={32}
            color={StyleConfig.colors.offshadeBlack}
          />
        </CustomButton>
        <View style={styles.contentContainer}>
          <View style={styles.captionContainer}>
            <Text style={styles.caption}>Enter your 4-digit code</Text>
          </View>
          <View style={styles.secondryTextContainer}>
            <Text style={styles.secondryText}>Code</Text>
          </View>
          <View style={styles.pinContainer}>
            <View style={styles.pinInputContainer}>
              <TextInput
                autoFocus
                style={styles.pinInput}
                maxLength={4}
                keyboardType="numeric"
                placeholder="- - - -"
                placeholderTextColor={StyleConfig.colors.offshadeBlack}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableWithoutFeedback>
            <View style={styles.resendCodeTextContainer}>
              <Text style={styles.resendCodeText}>Resend Code</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.nextButtonContainer}>
            <CustomButton
              style={styles.nextButton}
              onSelect={() => {
                props.navigation.navigate("SelectLocation");
              }}
            >
              <Icon
                name="md-chevron-forward"
                size={32}
                color={StyleConfig.colors.white}
              />
            </CustomButton>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

SignInScreen.navigationOptions = {
  headerShown: false,
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
  backButton: {
    marginHorizontal: StyleConfig.width / 30,
    width: StyleConfig.width / 10,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  contentContainer: {
    flex: 1,
    width: StyleConfig.width / 1.16,
    marginHorizontal: StyleConfig.width / 15,
  },
  captionContainer: {
    marginTop: StyleConfig.height / 9,
  },
  caption: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 26,
    fontWeight: "600",
    color: StyleConfig.colors.offshadeBlack,
  },
  secondryTextContainer: {
    marginTop: StyleConfig.height / 25,
  },
  secondryText: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 14,
    fontWeight: "600",
    color: StyleConfig.colors.secondryTextColor2,
  },
  pinContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: StyleConfig.colors.borderColor,
  },
  pinInputContainer: {
    height: StyleConfig.height / 20,
    width: StyleConfig.width * 0.86,
  },
  pinInput: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 18,
    color: StyleConfig.colors.offshadeBlack,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    margin: StyleConfig.width / 15,
  },
  resendCodeTextContainer: {
    flex: 1,
  },
  resendCodeText: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 18,
    color: StyleConfig.colors.primaryColor,
  },
  nextButtonContainer: {
    borderRadius: 100,
    overflow: "hidden",
  },
  nextButton: {
    borderRadius: 100,
    width: StyleConfig.width / 6,
    justifyContent: "center",
  },
});

export default SignInScreen;
