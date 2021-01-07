import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GettingStartedScreen from "../screens/GettingStartedScreen";
import SignInScreen from "../screens/SignInScreen";
import SplashScreen from "../screens/SplashScreen";
import NumberScreen from "../screens/NumberScreen";

const GroceryNavigator = createStackNavigator({
  Splash: SplashScreen,
  GettingStarted: GettingStartedScreen,
  SignIn: SignInScreen,
  Number: NumberScreen,
});

export default createAppContainer(GroceryNavigator);
