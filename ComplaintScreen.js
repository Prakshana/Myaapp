import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ComplaintScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>File a Complaint</Text>
      <Text style={styles.infoText}>
        This page will allow users to file a pothole complaint with image uploads.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f9f9f9" },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  infoText: { fontSize: 16, textAlign: "center", marginHorizontal: 20, marginBottom: 20 },
  button: { backgroundColor: "#4CAF50", paddingVertical: 12, paddingHorizontal: 20, borderRadius: 25 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default ComplaintScreen;