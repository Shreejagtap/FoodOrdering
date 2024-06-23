import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign Up" }} />
      <Text style={styles.labelText}>Email</Text>
      <TextInput
        placeholder="johndoe@gmail.com"
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
      />
      <Text style={styles.labelText}>Password</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button text="Create account" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  textInput: {
    backgroundColor: "white",
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  labelText: {
    marginBottom: 4,
  },
});

export default SignUp;
