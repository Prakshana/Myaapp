import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch,Image } from 'react-native';
import { ThemeContext } from './ThemeContext'; 

const Settings = ({ navigation }) => {
  const { darkMode, colors, toggleTheme } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
         <Image
                style={styles.img}
                source={require('./assets/pinkicon.png')}
              />
      <Text style={[styles.heading, { color: colors.text }]}>Settings</Text>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Appearance</Text>
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.text }]}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={toggleTheme} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Account</Text>
        
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Profile')}>
          <Text style={{ color: colors.text }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>App</Text>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Appinfo')}>
          <Text style={{ color: colors.text }}>App Info</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('About')}>
          <Text style={{ color: colors.text }}>About</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Support</Text>

        <TouchableOpacity style={styles.option} onPress={() => alert('Contact us at:support@example.com')}>
          <Text style={{ color: colors.text }}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.visionContainer}>
        <Text style={[styles.visionText, { color: colors.text }]}>
          To create safer roads and empowered communities by enabling effortless pothole reporting and action.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    borderBottomWidth:1,
    paddingVertical:20,
    marginTop:0,
    width:"93%"
  },
  visionContainer: {
    marginTop: 50,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
 
  
  visionText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  img:{
    marginLeft:0,
    marginTop:1
  }
});
