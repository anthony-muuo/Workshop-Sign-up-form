import { SafeAreaView } from "react-native-safe-area-context";
import { PropsWithChildren } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Platform,
} from "react-native";

const Keyboard = ({ children }: PropsWithChildren) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "white" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={110}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "white" }}
      >
        <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
          {children}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    gap: 5,
  },
});

export default Keyboard;
