import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { useNavigation } from "@react-navigation/native";
import { TAB_NAVIGATION_ROUTES } from "../utils/constants";

const SplashScreen = ({ route }) => {
  const navigation = useNavigation();
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
      navigation.navigate(TAB_NAVIGATION_ROUTES);
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={animate} number={100} size="large" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});
