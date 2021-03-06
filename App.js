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
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const Tab = createMaterialBottomTabNavigator();
// Forum Tab
function Forum() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.text}>Forum!</Text>
      </View>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
} // End of Forum tab

////////////////////////////////////////////////////////////////////////////////////////////////////
//Profile tab
function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Profile tab</Text>
    </View>
  );
} //End of Profile tab

////////////////////////////////////////////////////////////////////////////////////////////////////
// Map tab
function Map() {
  return (
    <View style={styles.mapcontainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 33.9716,
          longitude: -6.8498,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showUserLocation={true}
        toolbarEnabled={true}
        loadingEnabled={true}
      >
        <Marker
          coordinate={{
            latitude: 33.9716,
            longitude: -6.8498,
          }}
        />
      </MapView>
    </View>
  );
} // End of Map tab

////////////////////////////////////////////////////////////////////////////////////////////////////
// My Tabs
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
// End of My Tabs

// Default function
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// Style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontWeight: "bold",
  },
  mapcontainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
