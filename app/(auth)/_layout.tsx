import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
            headerBackTitle: "Home",
            headerStyle: { backgroundColor: "#000000" },
          }}
        />
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
            headerBackTitle: "Home",
            headerStyle: { backgroundColor: "#000000" },
          }}
        />
      </Stack>
    </>
  );
};

export default AuthLayout;
