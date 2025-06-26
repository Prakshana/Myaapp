import React, { useEffect } from "react";
import { View, Image, StyleSheet,Text } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("LoginScreen"); // Ensure 'LoginScreen' is in the navigator
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigation]); // Add navigation as dependency

  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
      <Image source={require("./assets/logo.png")} 
      style={styles.logo} 
      resizeMode="contain"
      />
      </View>

      <Text style={styles.tex}>nagardootFE</Text>
     
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
      
  },
  logocontainer:{
    shadowColor: '#000',        
    overflow: 'hidden',         
             

  },
  logo: {
    width: 200,
    height: 150,
 
   
    
  },
  tex:{
    paddingTop:10,
    fontSize:20
  }
});

export default SplashScreen;