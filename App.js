import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();

// Feed Tab
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
  );
} // End of Feed tab

//Profile tab
function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
} //End of Profile tab

// Notification tab
function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
} // End of Notification tab

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e7ab3c"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
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
