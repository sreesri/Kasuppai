import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { PieChart } from "react-native-gifted-charts";

const HomeScreen = () => {
  const sampleData = [
    { value: 50, color: "#fbd203", text: "A" },
    { value: 20, color: "#ffb300", text: "B" },
    { value: 10, color: "#ff9100", text: "C" },
    { value: 20, color: "#ff6c00", text: "D" },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <PieChart
          data={sampleData}
          textColor="black"
          textSize={20}
          donut
          focusOnPress
          extraRadius={10}
          showText
          showExternalLabels
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
});
