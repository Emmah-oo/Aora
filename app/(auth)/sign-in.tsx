import { View, Text, StyleSheet, Image, TextInput, Alert } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const signIn = () => {
    if (!form.email || !form.password) {
      Alert.alert("Sign in", "Please fill all details");
      return;
    }
    router.replace("/home");
    //handle sign in
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.view}>
        <Image source={images.logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.text}>Sign in</Text>

        <View style={styles.inputView}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            style={styles.input}
            value={form.email}
            onChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            placeholder="Your email address"
            placeholderTextColor="#7B7B8B"
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            style={styles.input}
            value={form.password}
            onChangeText={(e) => setForm({ ...form, password: e })}
            placeholder="Your Password"
            placeholderTextColor="#7B7B8B"
            keyboardType="numeric"
            secureTextEntry
          />
        </View>
        <Text
          style={{
            textAlign: "right",
            marginTop: 5,
            color: "#CDCDE0",
            fontSize: 14,
          }}
        >
          Forgot password?
        </Text>

        <CustomButton title="Log in" handlePress={signIn} />

        <Text
          style={{
            textAlign: "center",
            color: "#CDCDE0",
            fontWeight: "400",
            marginTop: 10,
          }}
        >
          Don't have an account?{" "}
          <Link href="/sign-up" style={{ color: "#FF9001", fontWeight: "600" }}>
            Sign up
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: "#161622",
    height: "100%",
  },
  view: {
    width: "90%",
    marginHorizontal: "auto",
    rowGap: 10,
    flex: 1,
    height: '85%',
    // justifyContent: 'center'
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 25,
  },
  logo: {
    width: 130,
    height: 84,
  },
  inputView: {
    rowGap: 10,
    marginTop: 20,
  },
  input: {
    borderColor: "#232533",
    height: 60,
    borderRadius: 10,
    backgroundColor: "#1E1E2D",
    borderWidth: 1,
    color: "#FFFFFF",
    paddingHorizontal: 15,
  },
  inputText: {
    fontWeight: "500",
    color: "#fff",
    fontSize: 18,
  },
});
