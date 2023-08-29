import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

// SCREENS
import Home from "./screens/Home";
import Favorites from "./screens/Favorites";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: "Anasayfa" }}
      />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <MyDrawer/>
        {/* <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Anasayfa" }}
          />
          <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator> */}
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
