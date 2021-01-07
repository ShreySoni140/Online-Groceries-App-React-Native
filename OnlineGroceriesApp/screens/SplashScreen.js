import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Colors from "../constants/Colors";

const SplashScreen = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.navigation.navigate("GettingStarted");
      }}
    >
      <View style={styles.container}>
        <Image source={require("../assets/images/logo_main.png")} />
      </View>
    </TouchableWithoutFeedback>
  );
};

SplashScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SplashScreen;
