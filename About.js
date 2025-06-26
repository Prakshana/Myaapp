
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const About = () => {
 
  

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      
      <Text style={styles.aboutt}>{'> About'}</Text>

      <Image source={require('./assets/logo.png')} style={styles.img} />

      <Text style={styles.versiontex}>App version: 1.0.0</Text>
      <Text style={styles.appname}>nagardootFE</Text>
      <Text style={styles.installedText}>installed</Text>

      <View style={styles.descriptionHeader}>
        <Text style={styles.descriptionTitle}>Description</Text>
      </View>

     
          <Text style={styles.descriptionContent}>
            NagardootFE is a user-friendly app designed to help citizens report issues like potholes, 
            garbage, or streetlight problems directly to their local municipal authorities. With easy location tagging and image uploads, 
            it bridges the gap between residents and civic departments.
          </Text>



      <View>
        <Text style={styles.sectiont}>Key Features</Text>
        
        <View style={styles.list}>
          <Text style={styles.listtext}>📍 Location-based issue reporting (via Google Maps)</Text>
          <Text style={styles.listtext}>🖼️ Upload images of civic issues</Text>
          <Text style={styles.listtext}>📨 Track complaint status</Text>
          <Text style={styles.listtext}>🔒 Privacy-focused – no unnecessary data collection</Text>
        </View>
      </View>
      
    </ScrollView>
  );
};

export default About;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2'
  },
  scrollContent: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  aboutt: {
    fontSize: 28,
    fontWeight: '300',
    color: 'black',
    marginBottom: 20,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 20,
    marginBottom: 10,
  },
  versiontex: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
  },
  appname: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  installedText: {
    color: 'black',
    fontWeight: '500',
    marginBottom: 20,
  },
  descriptionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  arrow: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  clickHere: {
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
  },
  hide: {
    marginTop: 10,
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'underline',
  },
  descriptionContent: {
    marginTop: 10,
    color: 'black',
    fontSize: 15,
    lineHeight: 22,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 10,
  },
  sectiont: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  list: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 10,
    padding: 15,
  },
  listtext: {
    fontSize: 16,
    marginVertical: 4,
  },
});
