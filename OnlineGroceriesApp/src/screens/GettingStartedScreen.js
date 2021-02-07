import React from "react";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import CustomButton from "../components/CustomButton";
import StyleConfig from "../constants/StyleConfig";

const GettingStartedScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={StyleConfig.images.bgGetStart}
        style={styles.bgImage}
      >
        <View style={styles.container}>
          <Image source={StyleConfig.images.logo} />
          <View style={styles.contentContainer}>
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeText} numberOfLines={2}>
                Welcome to our Store
              </Text>
            </View>
            <View style={styles.captionTextContainer}>
              <Text style={styles.captionText}>
                Get your groceries in as fast as one hour
              </Text>
            </View>
            <View style={styles.footer}>
              <CustomButton
                title="Get Started"
                style={{ color: StyleConfig.colors.offWhite }}
                buttonItemStyle={{ flex: 1 }}
                onSelect={() => {
                  navigation.navigate("SignIn");
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: StyleConfig.height / 20,
  },
  bgImage: {
    flex: 1,
  },
  contentContainer: {
    height: StyleConfig.height / 3,
    marginHorizontal: StyleConfig.width / 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
  welcomeTextContainer: {
    width: StyleConfig.width / 1.45,
  },
  welcomeText: {
    fontFamily: StyleConfig.fontRegular,
    fontWeight: "600",
    fontSize: 48,
    textAlign: "center",
    color: StyleConfig.colors.white,
  },
  captionTextContainer: {
    marginTop: -StyleConfig.height / 30,
  },
  captionText: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 16,
    textAlign: "center",
    color: StyleConfig.colors.captionColor,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: StyleConfig.width / 15,
  },
});

export default GettingStartedScreen;
