import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import {
  SignUpInfoSchema,
  SignUpInfo,
  useSignUp,
} from "../contexts/SignUpContextProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomDatePicker from "../components/CustomDatePicker";
import CustomCheckBox from "../components/CustomCheckBox";
import Keyboard from "../components/Keyboard";

export default function App() {
  const { onSubmit, setSignupDetails, signupDetails } = useSignUp();

  const form = useForm<SignUpInfo>({
    resolver: zodResolver(SignUpInfoSchema),
    defaultValues: signupDetails,
  });

  const handleSubmit: SubmitHandler<SignUpInfo> = (data) => {
    setSignupDetails(data);
    onSubmit();
  };

  return (
    <Keyboard>
      <View style={styles.container}>
        <Text style={styles.title}>SignUp</Text>
        <FormProvider {...form}>
          <CustomTextInput label="Full Name" name="fullName" />
          <CustomTextInput label="Email" name="email" inputMode="email" />
          <CustomTextInput label="Password" name="password" secureTextEntry />
          <CustomTextInput
            label="Confirm Password"
            name="confirm"
            secureTextEntry
          />
          <CustomDatePicker name="dob" label="Date of Birth" />
          <CustomCheckBox
            name="terms"
            label="I accept the terms and privacy policy"
          />

          <Pressable
            style={styles.button}
            onPress={form.handleSubmit(handleSubmit)}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: 16,
                letterSpacing: 1.5,
              }}
            >
              Submit
            </Text>
          </Pressable>
        </FormProvider>
        <StatusBar style="auto" />
      </View>
    </Keyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 24,
    paddingHorizontal: 12,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    paddingBottom: 12,
  },
  button: {
    marginTop: "auto",
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
