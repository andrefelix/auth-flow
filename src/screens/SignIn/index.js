import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const SignInScreen = ({ onSignIn, navigation }) => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => setCount(c => c + 1)}
          title="Update count"
          color="#CCC"
        />
      )
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Text>Public Sign In Screen</Text>
      <Button title="Sign In" onPress={onSignIn} />
      <Text>OR</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate("Sign Up")}
      />
      <Button
        title="Go to Password Forget"
        onPress={() => navigation.navigate("Password Forget")}
      />
    </View>
  );
};

export default SignInScreen;
