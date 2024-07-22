import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

interface Props {
  title: string;
  handlePress: () => void;
}

const CustomButton = ({ title, handlePress }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={styles.button}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF8C00",
    borderRadius: 10,
    minHeight: 52,
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontWeight: "bold",
    color: "#161622",
    fontSize: 15,
  },
});
