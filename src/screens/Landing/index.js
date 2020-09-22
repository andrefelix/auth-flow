import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Public Landing Screen</Text>
      <Button
        title="Clique aqui para obter o modal de erro"
        onPress={() => navigation.navigate("isso vai gerar um erro")}
      />
    </View>
  );
};

export default LandingScreen;
