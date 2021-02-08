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
import Flags from "react-native-flags";
import CustomButton from "../../components/CustomButton";
import Icon from "react-native-vector-icons/Ionicons";
import StyleConfig from "../../constants/StyleConfig";

const NumberScreen = ({ navigation }) => {
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
            navigation.goBack();
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
            <Text style={styles.caption}>Enter your mobile number</Text>
          </View>
          <View style={styles.secondryTextContainer}>
            <Text style={styles.secondryText}>Mobile Number</Text>
          </View>
          <View style={styles.contactContainer}>
            <Flags code="IN" size={32} />
            <Text style={styles.countryCode}>+91</Text>
            <View style={styles.contactInputContainer}>
              <TextInput
                autoFocus
                style={styles.contactInput}
                maxLength={10}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.nextButtonContainer}>
            <CustomButton
              style={styles.nextButton}
              onSelect={() => {
                navigation.navigate("Verification");
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConfig.colors.bgColor2,
  },
  bgImage: {
    position: "absolute",
    zIndex: -98,
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
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: StyleConfig.colors.borderColor,
  },
  contactInputContainer: {
    height: StyleConfig.height / 20,
    width: StyleConfig.width * 0.65,
  },
  countryCode: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 18,
    marginBottom: StyleConfig.height / 300,
    marginHorizontal: StyleConfig.width / 40,
    color: StyleConfig.colors.offshadeBlack,
  },
  contactInput: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 18,
    color: StyleConfig.colors.offshadeBlack,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: StyleConfig.width / 15,
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

export default NumberScreen;
