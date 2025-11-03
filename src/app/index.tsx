import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTextInput from "../components/CustomTextInput";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>SignUp</Text>
        <CustomTextInput label="Full Name" />
        <CustomTextInput label="Email" />
        <CustomTextInput label="Password" />
        <CustomTextInput label="Confirm Password" />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    paddingBottom: 12,
  },
});
