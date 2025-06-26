import React,{useContext} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
 import { ThemeContext } from './ThemeContext';

const MenuScreen = ({ navigation }) => {
   const { colors } = useContext(ThemeContext);
  const handleOptionPress = (option) => {
    console.log(`${option} clicked`); 

  if (option === "Profile") {
    navigation.navigate("Profile");
  } else if (option === "About") {
    navigation.navigate("About");
  } else if (option === "Settings") {
    navigation.navigate("Settings"); 
  } else if (option === "Logout") {
    navigation.navigate("LoginScreen");
  }
};



  return (
    <View style={[styles.container,{backgroundColor:colors.background}]}>
      <Text style={[styles.header,{color:colors.text}]}>Menu</Text>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleOptionPress("Profile")}>
        <Text style={styles.menuText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleOptionPress("Settings")}>
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleOptionPress("About")}>
        <Text style={styles.menuText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.menuItem, styles.logout]} onPress={() => handleOptionPress("Logout")}>
        <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuItem: {
    width: "80%",
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    alignItems: "center",
  },
  menuText: {
    fontSize: 18,
  },
  logout: {
    backgroundColor: "#FF4D4D",
  },
  logoutText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default MenuScreen;