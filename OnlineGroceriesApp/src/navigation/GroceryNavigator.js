import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GettingStartedScreen from "../screens/authentication/GettingStartedScreen";
import SignInScreen from "../screens/authentication/SignInScreen";
import SplashScreen from "../screens/authentication/SplashScreen";
import NumberScreen from "../screens/authentication/NumberScreen";
import VerificationScreen from "../screens/authentication/VerificationScreen";
import SelectLocationScreen from "../screens/authentication/SelectLocationScreen";
import LogInScreen from "../screens/authentication/LogInScreen";
import SignUpScreen from "../screens/authentication/SignUpScreen";
import HomeScreen from "../screens/main_app/HomeScreen";

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
        {/* <Stack.Screen name="LogIn" component={LogInScreen} /> */}
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GroceryNavigator;
