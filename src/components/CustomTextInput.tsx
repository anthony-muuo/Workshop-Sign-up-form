import { TextInput, View, StyleSheet, Text } from "react-native";
import { ComponentProps } from "react";

type CustomTextInputProps = {
  label?: string;
} & ComponentProps<typeof TextInput>;

const CustomTextInput = ({
  label,
  ...textInputProps
}: CustomTextInputProps) => {
  const error = { message: "This field is Required" };
  return (
    <View style={{ paddingVertical: 6 }}>
      <Text
        style={{
          fontWeight: "600",
          color: "dimgray",
        }}
      >
        {label}
      </Text>
      <TextInput
        {...textInputProps}
        style={[
          styles.input,
          textInputProps.style,
          error.message && styles.errorInput,
        ]}
      />
      <Text style={{ color: "crimson", height: 17 }} numberOfLines={1}>
        {error.message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    color: "gainsboro",
    borderRadius: 5,
    width: "100%",
    marginTop: 4,
    marginBottom: 2,
  },
  errorInput: {
    borderColor: "crimson",
  },
});

export default CustomTextInput;
