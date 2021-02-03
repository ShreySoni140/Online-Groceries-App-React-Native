import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default {
  width,
  height,

  colors: {
    primaryColor: "#53B175",
    bgColor: "#FCFCFC",
    bgColor2: "rgba(252, 252, 252, 0.6)",
    white: "#FFFFFF",
    offWhite: "#FFF9FF",
    captionColor: "rgba(252, 252, 252, 0.7)",
    black: "#030303",
    offshadeBlack: "#181725",
    google: "#5383EC",
    facebook: "#4A66AC",
    borderColor: "#E2E2E2",
    secondryTextColor: "#828282",
    secondryTextColor2: "#7C7C7C",
  },

  fontLight: "Gilroy-Light",
  fontRegular: "Gilroy-Regular",
  fontMedium: "Gilroy-Medium",
  fontBold: "Gilroy-Bold",
  fontHeavy: "Gilroy-Heavy",

  images: {
    logoMain: require("../../assets/images/logo_main.png"),
    logo: require("../../assets/images/logo.png"),
    bgGetStart: require("../../assets/images/bgImg1.png"),
    bgSignIn: require("../../assets/images/signinbg.png"),
    bgNum: require("../../assets/images/signupprocessbg.png"),
    bgAllProcess: require("../../assets/images/signupprocessbg2.png"),
    location: require("../../assets/images/location.png"),
  },
};
