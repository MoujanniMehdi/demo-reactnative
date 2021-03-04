import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Tab = createMaterialBottomTabNavigator();
//const image = { uri: "https://reactjs.org/logo-og.png" };
// Forum Tab
function Forum() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.background}>
        <Text>Forum!</Text>
      </View>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
} // End of Forum tab

//Profile tab
function Profile() {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
     <Text style={styles.text}>Inside</Text>
    </View>
  );
} //End of Profile tab

// Map tab
function Map() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map!</Text>
      <StatusBar style="dark" />
    </View>
  );
} // End of Map tab

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Forum"
      activeColor="#ffffff"
      inactiveColor="#545454"
      barStyle={{ backgroundColor: "#000000", paddingTop: 6, paddingBottom: 6 }}
    >
      <Tab.Screen
        name="Forum"
        component={Forum}
        options={{
          tabBarLabel: "Forum",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="forum" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#1f65ff",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  background:{
    
  }
});
