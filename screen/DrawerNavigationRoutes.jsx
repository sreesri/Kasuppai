import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../utils/supabase";

const DrawerNavigationRoutes = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("//////////////////////////");
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View>
      <Text>DrawerNavigationRoutes</Text>
    </View>
  );
};

export default DrawerNavigationRoutes;

const styles = StyleSheet.create({});
