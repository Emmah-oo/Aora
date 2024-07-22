import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const signUp = () => {
    if (!form.email || !form.password || !form.username) {
      Alert.alert("Sign up", "Please fill all details");
      return;
    }
    router.replace("/home");
    //handle sign up
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.safeView}>
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View style={styles.view}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.text}>Sign up</Text>

            <View style={styles.inputView}>
              <Text style={styles.inputText}>Username</Text>
              <TextInput
                style={styles.input}
                value={form.username}
                onChangeText={(e) => setForm({ ...form, username: e })}
                placeholder="Your email address"
                placeholderTextColor="#7B7B8B"
              />
            </View>

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

            <CustomButton title="Sign up" handlePress={signUp} />

            <Text
              style={{
                textAlign: "center",
                color: "#CDCDE0",
                fontWeight: "400",
                marginTop: 10,
              }}
            >
              Already have an account?{" "}
              <Link
                href="/sign-in"
                style={{ color: "#FF9001", fontWeight: "600" }}
              >
                Sign in
              </Link>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: "#161622",
    height: "100%",
  },
  view: {
    width: "90%",
    marginHorizontal: "auto",
    rowGap: 10,
    marginVertical: 10,
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
