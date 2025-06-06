import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Linking, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from 'expo-file-system';

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  const handleCall = () => {
    Linking.openURL("tel:8093297445"); // Replace with actual helpline number
  };

  const getPresignedUrl = async (fileName) => {
    try {
      const url = `http://10.0.7.85:8080/s3/get-upload-url?fileName=${encodeURIComponent(fileName)}`;
      const response = await fetch(url, {
        method: "GET",
      });
  
      if (!response.ok) {
        const text = await response.text();
        console.log("Failed to get presigned URL:", text);
        throw new Error("Failed to get presigned URL");
      }
  
      const data = await response.json();
      console.log("Presigned URL:", data.uploadUrl);
      return data.uploadUrl;
    } catch (error) {
      console.log("Error fetching presigned URL:", error);
      throw error;
    }
  };
  const uploadToS3 = async (imageUri, presignedUrl) => {
    const base64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
  
    const blob = new Blob([Uint8Array.from(atob(base64), c => c.charCodeAt(0))], {
      type: 'image/jpeg',
    });
  
    const upload = await fetch(presignedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'image/jpeg',
      },
      body: blob,
    });
  
    if (!upload.ok) throw new Error("Upload to S3 failed");
  };

  const handleCameraUpload = async () => {
    try {
      setUploading(true);

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.8,
      });

      if (result.canceled || !result.assets || result.assets.length === 0) return;

      const imageUri = result.assets[0].uri;
      const fileName = `complaint_${Date.now()}.jpg`;
      const contentType = "image/jpeg";

      const presignedUrl = await getPresignedUrl(fileName);
      await uploadToS3(imageUri, presignedUrl);

      Alert.alert("Success", "Image uploaded successfully!");
    } catch (error) {
      console.error(error);
      Alert.alert("Upload Failed", "Something went wrong during upload.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Image source={require("./assets/logo.png")} style={styles.icon} />
        <Text style={styles.title}>NagarDoot</Text>
        <TouchableOpacity onPress={() => navigation.navigate("MenuScreen")}>
          <Image source={require("./assets/menu.png")} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>

      {/* Map Section (Top) */}
      <View style={styles.mapContainer}>
        {location ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={location} title="You are here" />
          </MapView>
        ) : (
          <Image source={require("./assets/map.png")} style={styles.mapPlaceholder} />
        )}
      </View>

      {/* Buttons Section (Middle) */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ComplaintScreen")}>
          <Text style={styles.buttonText}>File a Complaint</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("StatusScreen")}>
          <Text style={styles.buttonText}>Check Complaint Status</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
          <Text style={styles.buttonText}>Call Support</Text>
        </TouchableOpacity>
      </View>

      {/* Camera Button (Bottom) */}
      <View style={styles.cameraContainer}>
        <TouchableOpacity style={styles.cameraButton} onPress={handleCameraUpload}>
          <Image source={require("./assets/camera.png")} style={styles.cameraIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "#f2f2f2" },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#b3e0f2",
    height: 60,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  icon: { width: 30, height: 30 },
  title: { fontSize: 18, fontWeight: "bold" },
  menuIcon: { width: 30, height: 30 },

  mapContainer: {
    flex: 1.3,
    justifyContent: "center",
    alignItems: "center",
  },
  map: { width: "100%", height: "100%" },
  mapPlaceholder: { width: "100%", height: "100%", resizeMode: "cover" },

  buttonContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "75%",
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 10,
  },
  callButton: {
    width: "75%",
    backgroundColor: "#f44336",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  cameraContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cameraIcon: { width: 70, height: 70 },
});

export default HomeScreen;