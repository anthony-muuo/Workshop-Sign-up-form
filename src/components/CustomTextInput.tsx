import { TextInput, View, StyleSheet, Text } from "react-native";
import { ComponentProps } from "react";
import { useController } from "react-hook-form";

type CustomTextInputProps = {
  label?: string;
  name: string;
} & ComponentProps<typeof TextInput>;

const CustomTextInput = ({
  label,
  name,
  ...textInputProps
}: CustomTextInputProps) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name });

  return (
    <View style={{ paddingVertical: 6 }}>
      {label && (
        <Text
          style={{
            fontWeight: "600",
            color: "dimgray",
          }}
        >
          {label}
        </Text>
      )}
      <TextInput
        {...textInputProps}
        value={value}
        onBlur={onBlur}
        onChangeText={onChange}
        style={[styles.input, textInputProps.style, error && styles.errorInput]}
      />
      <Text style={{ color: "crimson", height: 17 }} numberOfLines={1}>
        {error?.message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
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
