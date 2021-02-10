import React from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { TouchableNativeFeedback } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import Entypo from "react-native-vector-icons/Entypo";

const ProductCard = (props) => {
  return (
    <View style={}>
      <TouchableNativeFeedback onPress={props.onSelect}>
        <View style={}>
          <Image source={props.image} />
          <Text>{props.name}</Text>
          <Text>{props.quantity}</Text>
          <View style={}>
            <Text>{props.price}</Text>
            <CustomButton style={}>
              <Entypo name="plus" size={24} color="white" />
            </CustomButton>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductCard;
