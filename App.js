import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  Image,
} from "react-native";

const image = {
  uri: "http://cn8ce.e-monsite.com/medias/images/logo-off.jpg?fx=r_550_550",
};

const onPress = () => Alert.alert("Test");

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Big Title ?</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press to find out</Text>
      </TouchableOpacity>

      <Image source={image} style={styles.backgroundImage} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3000,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 155,
  },
});
