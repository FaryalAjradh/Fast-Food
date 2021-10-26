import { StatusBar as ExpoStatusBar} from "expo-status-bar";
import React from "react";
//import { Searchbar } from "react-native-paper";
//import { StatusBar,SafeAreaView, StyleSheet, Text, View} from "react-native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";


export default function App() {
  return (
    <>
      <RestaurantsScreen/>
      <ExpoStatusBar style="auto"/>
    </>
    
  );
}

//const styles = StyleSheet.create({});
  
