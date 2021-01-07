import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import CustomButton from "../components/CustomButton";

const GettingStartedScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/bgImg1.png")}
        style={styles.bgImage}
      >
        <View style={styles.container}>
          <Image source={require("../assets/images/logo.png")} />
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
    marginBottom: Dimensions.get("window").height / 15,
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  welcomeTextContainer: {
    marginTop: Dimensions.get("window").height / 50,
    height: 86,
    width: "70%",
  },
  welcomeText: {
    fontFamily: "Gilroy-Medium",
    fontWeight: "600",
    fontSize: 48,
    textAlign: "center",
    color: "#FFFFFF",
  },
  captionTextContainer: {
    marginTop: Dimensions.get("window").height / 25,
    height: 15,
    width: "90%",
  },
  captionText: {
    fontFamily: "Gilroy-Medium",
    fontSize: 16,
    textAlign: "center",
    color: "rgba(252, 252, 252, 0.7)",
  },
  button: {
    marginTop: Dimensions.get("window").height / 15,
    width: Dimensions.get("window").width / 1.2,
  },
});

export default GettingStartedScreen;
