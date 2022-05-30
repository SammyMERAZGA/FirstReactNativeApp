import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>À partir de 104 990€</Text>
      </View>
      <StyledButton
        type="primary"
        content={"Commander"}
        onPress={() => {
          console.warn("Commande effectuée !");
        }}
      />
      <StyledButton
        type="secondary"
        content={"Existing inventory"}
        onPress={() => {
          console.warn("Existing inventory was pressed");
        }}
      />
    </View>
  );
};

export default CarItem;
