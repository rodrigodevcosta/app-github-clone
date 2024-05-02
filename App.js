import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Octicons } from "@expo/vector-icons";
import { Image } from "react-native";
//Telas
import { LoginScreen } from "./screens/LoginScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { NotificationScreen } from "./screens/NotificationScreen";
import { ExplorerScreen } from "./screens/ExplorerScreen";
import { Foundation } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Foundation name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="notificacao"
        component={NotificationScreen}
        options={{
          title: "Notificações",
          tabBarIcon: ({ size, color }) => (
            <Octicons name="bell-fill" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="explorar"
        component={ExplorerScreen}
        options={{
          title: "Explorar",
          tabBarIcon: ({ size, color }) => (
            <Octicons name="telescope-fill" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: "Perfil",
          tabBarIcon: () => (
            <Image
              style={{ height: 25, width: 25, borderRadius: 25 }}
              source={require("./assets/foto.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false, // Esconde o cabeçalho e a barra de guias para esta tela
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false, // Esconde o cabeçalho e a barra de guias para esta tela
          }}
          name="MainTabs"
          component={MainTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
