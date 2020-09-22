import React, { useState } from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RadialGradient from "react-native-radial-gradient";
import SideMenu from "react-native-side-menu";

import LandingScreen from "./screens/Landing";
import HomeScreen from "./screens/Home";
import SignInScreen from "./screens/SignIn";
import SignUpScreen from "./screens/SignUp";
import PasswordForgetScreen from "./screens/PasswordForget";

const RootStack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    // TODO implement real sign in mechanism
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // TODO implement real sign out mechanism
    setIsAuthenticated(false);
  };

  const handleSignUp = () => {
    // TODO implement real sign up mechanism
    setIsAuthenticated(true);
  };

  return (
    <RadialGradient
      style={{ width: 200, height: 200, flex: 1 }}
      colors={["black", "green", "blue", "red"]}
      stops={[0.1, 0.4, 0.3, 0.75]}
      center={[0, 100]}
      radius={800}
    >
      <SideMenu>
        <NavigationContainer>
          <RootStack.Navigator>
            {isAuthenticated ? (
              <RootStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerRight: () => (
                    <Button title="Sign Out" onPress={handleSignOut} />
                  )
                }}
              />
            ) : (
              <>
                <RootStack.Screen
                  name="Landing"
                  component={LandingScreen}
                  options={{ animationTypeForReplace: "pop" }}
                />
                <RootStack.Screen name="Sign In">
                  {props => <SignInScreen {...props} onSignIn={handleSignIn} />}
                </RootStack.Screen>
                <RootStack.Screen name="Sign Up">
                  {props => <SignUpScreen {...props} onSignUp={handleSignUp} />}
                </RootStack.Screen>
                <RootStack.Screen
                  name="Password Forget"
                  component={PasswordForgetScreen}
                />
              </>
            )}
          </RootStack.Navigator>
        </NavigationContainer>
      </SideMenu>
    </RadialGradient>
  );
};

export default App;
