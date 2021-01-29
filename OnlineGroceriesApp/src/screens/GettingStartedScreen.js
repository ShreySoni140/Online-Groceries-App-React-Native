import React from "react";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import CustomButton from "../components/CustomButton";
import StyleConfig from "../constants/StyleConfig";

const GettingStartedScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={StyleConfig.images.bgGetStart}
        style={styles.bgImage}
      >
        <View style={styles.container}>
          <Image source={StyleConfig.images.logo} />
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
          <CustomButton
            title="Get Started"
            style={styles.button}
            onSelect={() => {
              props.navigation.navigate("SignIn");
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

GettingStartedScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: StyleConfig.height / 15,
  },
  bgImage: {
    flex: 1,
  },
  welcomeTextContainer: {
    marginTop: StyleConfig.height / 50,
    height: StyleConfig.height / 10,
    width: "70%",
  },
  welcomeText: {
    fontFamily: StyleConfig.fontRegular,
    fontWeight: "600",
    fontSize: 48,
    textAlign: "center",
    color: StyleConfig.colors.white,
  },
  captionTextContainer: {
    marginTop: StyleConfig.height / 25,
    height: StyleConfig.height / 60,
    width: "90%",
  },
  captionText: {
    fontFamily: StyleConfig.fontMedium,
    fontSize: 16,
    textAlign: "center",
    color: StyleConfig.colors.captionColor,
  },
  button: {
    marginTop: StyleConfig.height / 15,
    width: StyleConfig.width / 1.2,
  },
});

export default GettingStartedScreen;
