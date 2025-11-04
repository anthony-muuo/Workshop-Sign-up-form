import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SignUPContextProvider from "../contexts/SignUpContextProvider";

const RootLayout = () => {
  return (
    <SignUPContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </SignUPContextProvider>
  );
};

export default RootLayout;
