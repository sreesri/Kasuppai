// import { StyleSheet, Text, View, AppState } from "react-native";
// import React from "react";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
// import { supabase } from "../utils/supabase";
// import { useNavigation } from "@react-navigation/native";

// AppState.addEventListener("change", (state) => {
//   if (state === "active") {
//     supabase.auth.startAutoRefresh();
//   } else {
//     supabase.auth.stopAutoRefresh();
//   }
// });

// const LoginScreen = () => {
//   const navigation = useNavigation();
//   GoogleSignin.configure({
//     scopes: ["https://www.googleapis.com/auth/drive.readonly"],
//     webClientId:
//       "566402576398-03bs4ei1imns4fkmlkge0kcmf4gbebjk.apps.googleusercontent.com",
//   });

//   return (
//     <View style={styles.container}>
//       <GoogleSigninButton
//         size={GoogleSigninButton.Size.Wide}
//         color={GoogleSigninButton.Color.Dark}
//         onPress={async () => {
//           try {
//             await GoogleSignin.hasPlayServices();
//             const userInfo = await GoogleSignin.signIn();
//             if (userInfo.data.idToken) {
//               const { data, error } = await supabase.auth.signInWithIdToken({
//                 provider: "google",
//                 token: userInfo.data.idToken,
//               });
//               navigation.navigate("TabNavigationRoutes");
//             } else {
//               throw new Error("no ID token present!");
//             }
//           } catch (error) {
//             if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//               console.log("Sign in cancelled");
//             } else if (error.code === statusCodes.IN_PROGRESS) {
//               console.log("Inprogress");
//             } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//               console.log("Play services not available");
//             } else {
//               console.log(error);
//             }
//           }
//         }}
//       />
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
