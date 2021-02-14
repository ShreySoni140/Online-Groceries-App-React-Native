import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import GettingStartedScreen from "../screens/authentication/GettingStartedScreen";
import SignInScreen from "../screens/authentication/SignInScreen";
import SplashScreen from "../screens/authentication/SplashScreen";
import NumberScreen from "../screens/authentication/NumberScreen";
import VerificationScreen from "../screens/authentication/VerificationScreen";
import SelectLocationScreen from "../screens/authentication/SelectLocationScreen";
import LogInScreen from "../screens/authentication/LogInScreen";
import SignUpScreen from "../screens/authentication/SignUpScreen";
import HomeScreen from "../screens/main_app/HomeScreen";
import ExploreScreen from "../screens/main_app/ExploreScreen";
import CartScreen from "../screens/main_app/CartScreen";
import FavoritesScreen from "../screens/main_app/FavoritesScreen";
import AccountScreen from "../screens/main_app/AccountScreen";
import ProductDetailScreen from "../screens/main_app/ProductDetailScreen";
import ExploreDetailScreen from "../screens/main_app/ExploreDetailScreen";
import SearchScreen from "../screens/main_app/SearchScreen";
import OrderAcceptedScreen from "../screens/main_app/OrderAcceptedScreen";
import StyleConfig from "../constants/StyleConfig";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Splash" component={SplashScreen} />
      <AuthStack.Screen
        name="GettingStarted"
        component={GettingStartedScreen}
      />
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="Number" component={NumberScreen} />
      <AuthStack.Screen name="Verification" component={VerificationScreen} />
      <AuthStack.Screen
        name="SelectLocation"
        component={SelectLocationScreen}
      />
      <AuthStack.Screen name="LogIn" component={LogInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

const MainTabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      barStyle={{
        backgroundColor: StyleConfig.colors.white,
      }}
      shifting={false}
      activeColor={StyleConfig.colors.primaryColor}
      inactiveColor={StyleConfig.colors.offshadeBlack}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Entypo name="shop" size={24} color={color} />;
          },
          tabBarLabel: <Text style={styles.tabLabel}>Shop</Text>,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="text-search"
                size={24}
                color={color}
              />
            );
          },
          tabBarLabel: <Text style={styles.tabLabel}>Explore</Text>,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="cart-outline"
                size={24}
                color={color}
              />
            );
          },
          tabBarLabel: <Text style={styles.tabLabel}>Cart</Text>,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialIcons name="favorite-border" size={24} color={color} />
            );
          },
          tabBarLabel: <Text style={styles.tabLabel}>Favorite</Text>,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome5 name="user" size={24} color={color} />;
          },
          tabBarLabel: <Text style={styles.tabLabel}>Account</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      <MainStack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <MainStack.Screen name="ExploreDetail" component={ExploreDetailScreen} />
      <MainStack.Screen name="Search" component={SearchScreen} />
      <MainStack.Screen name="OrderAccepted" component={OrderAcceptedScreen} />
    </MainStack.Navigator>
  );
};

const GroceryNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="OrderAcc" component={OrderAcceptedScreen} /> */}
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: 12,
    color: StyleConfig.colors.offshadeBlack,
  },
});

export default GroceryNavigator;
