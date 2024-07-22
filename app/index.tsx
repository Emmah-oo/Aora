import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center justify-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text style={style.mainText}>
              Discover Endless Possiblities with{" "}
              <Text style={style.aora}>Aora</Text>
            </Text>

            <Image
              source={images.path}
              style={style.path}
              resizeMode="contain"
            />
          </View>

          <Text style={style.subText}>
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
          />

          <StatusBar backgroundColor="#161622" style="light" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  mainText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  aora: {
    color: "#FF8C00",
  },
  path: {
    width: 135,
    height: 15,
    marginTop: 10,
    position: "absolute",
    bottom: -8,
    right: -40,
  },
  subText: {
    color: "#CDCDE0",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 20,
    textAlign: "center",
  },
});
