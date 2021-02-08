import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import StyleConfig from "../../constants/StyleConfig";

const SplashScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("GettingStarted")}
    >
      <View style={styles.container}>
        <Image source={StyleConfig.images.logoMain} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConfig.colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SplashScreen;
