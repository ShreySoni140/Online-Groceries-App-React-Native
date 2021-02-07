import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GettingStartedScreen from "../screens/GettingStartedScreen";
import SignInScreen from "../screens/SignInScreen";
import SplashScreen from "../screens/SplashScreen";
import NumberScreen from "../screens/NumberScreen";
import VerificationScreen from "../screens/VerificationScreen";
import SelectLocationScreen from "../screens/SelectLocationScreen";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const GroceryNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="GettingStarted" component={GettingStartedScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Number" component={NumberScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="SelectLocation" component={SelectLocationScreen} /> */}
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GroceryNavigator;
