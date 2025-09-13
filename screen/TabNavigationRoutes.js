import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./tabScreens/HomeScreen";

const Tab = createBottomTabNavigator();

const TabNavigationRoutes = () => {
  //   const [session, setSession] = useState(null);

  //   useEffect(() => {
  //     supabase.auth.getSession().then(({ data: { session } }) => {
  //       setSession(session);
  //     });
  //     supabase.auth.onAuthStateChange((_event, session) => {
  //       setSession(session);
  //     });
  //   }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigationRoutes;

const styles = StyleSheet.create({});
