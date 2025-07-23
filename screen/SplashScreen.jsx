import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = ({ route }) => {
  const navigation = useNavigation();
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
      console.log(route.session);
      navigation.navigate("LoginScreen");
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
