import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./SplashScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import HomeScreen from "./HomeScreen";
import StatusScreen from "./StatusScreen";
import ComplaintScreen from "./ComplaintScreen";
import MenuScreen from "./MenuScreen";
import Profile from "./Profile";
import Settings from "./Settings";
import About from "./About"; 
import { ThemeProvider } from './ThemeContext';





const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="StatusScreen" component={StatusScreen} />
        <Stack.Screen name="ComplaintScreen" component={ComplaintScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="Profile" component={Profile}/>
         <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="About" component={About} />
       
      
      </Stack.Navigator>
    </NavigationContainer>
      </ThemeProvider>
  );
};

export default AppNavigator;         