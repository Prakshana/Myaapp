import React, { useState,useEffect } from "react";
import { Text, View, StyleSheet, TextInput,Button ,TouchableOpacity,ImageBackground} from "react-native";

const Profile = () => {
  const [name, setName] = useState("");
  const[number,setNumber]=useState("");
  const[location,setLocation]=useState("");
  useEffect(()=>{
    if(name!=="" && number!=="" ){
      console.log("name and number both are filled")
    }
  },[name,number]);


  return (
    <ImageBackground 
      source={require('./assets/expressway.jpg')} 
      style={styles.background}
      imageStyle={styles.image}
      resizeMode="cover" 
    >
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pro}>Profile</Text>
      </View>
      

      
      <View style={styles.body}>
        <Text style={styles.label}> Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="type your name here"
          value={name}
          onChangeText={(text) => setName(text)}
          placeholderTextColor="#aaa"
        />
        <Text style={styles.lab}> Phone number:</Text>
        <TextInput 
        style={styles.in}
        placeholder="type your phone number"
        value={number}
        onChangeText={(text)=>setNumber(text)}
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"

        />
       <Text style={styles.lab}> Location:</Text>
  <TextInput 
  style={styles.in}
  placeholder="Enter your location"
  value={location}
  onChangeText={setLocation}
  placeholderTextColor="#aaa"
/>
 <TouchableOpacity
  style={styles.btn}
  onPress={() => {
    console.log("Submitted");
    alert("Saved");
  }}
>
  <Text style={styles.btnText}>Submit</Text>
</TouchableOpacity>


   </View>
</View>
</ImageBackground>
    

  );
};

export default Profile;

const styles = StyleSheet.create({
  background:{
    flex:1,
    width: '100%',  
  height: '100%',
  position: 'absolute',
  top: 0,      
  left: -0,
  },
  image:{
   transform: [{ scale: 1.0}],  
  alignSelf: 'center',
  },
  container: {
    flex: 1,
    
  },
  header: {
    backgroundColor: "#FF4D4D",
    padding: 20,
    paddingTop: 30, 
  },
  pro: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
  },
  body: {
    paddingBottom:190,
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    color: "white",
    fontWeight:"bold",
    paddingTop:150,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding:10,
    borderRadius: 0,
    width:250,
  },
  lab:{
    marginTop:20,
    fontSize:18,
    color:"white",
    fontWeight:"bold"

  },
  in:{
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 0,
    width:250
  },
  btn: {
  backgroundColor: '#FF4D4D',
  padding: 12,
  marginTop: 30,
  borderRadius: 60,
  alignItems: 'center',
  width:250
},
btnText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},

});
