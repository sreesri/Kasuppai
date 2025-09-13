import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screen/LoginScreen";
import SplashScreen from "./screen/SplashScreen";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase";
import TabNavigationRoutes from "./screen/TabNavigationRoutes";
import {
  LOGIN_SCREEN,
  SPLASH_SCREEN,
  TAB_NAVIGATION_ROUTES,
} from "./utils/constants";

const Stack = createStackNavigator();

export default function App() {
  // const [session, setSession] = useState<Session | null>(null);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session);
  //   });
  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SPLASH_SCREEN}
          component={SplashScreen}
          options={{ headerShown: false }}
          // initialParams={{ session: session }}
        />
        {/* <Stack.Screen
          name={LOGIN_SCREEN}
          component={LoginScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name={TAB_NAVIGATION_ROUTES}
          component={TabNavigationRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
