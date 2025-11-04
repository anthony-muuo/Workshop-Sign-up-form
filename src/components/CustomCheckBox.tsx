import Checkbox from "expo-checkbox";
import { useController } from "react-hook-form";
import { View, Text } from "react-native";

type CustomCheckBoxProps = {
  name: string;
  label?: string;
};

const CustomCheckBox = ({ name, label }: CustomCheckBoxProps) => {
  const {
    field: { value, onChange },
  } = useController({ name });

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Checkbox
        value={value}
        onValueChange={onChange}
        color={value ? undefined : "crimson"}
      />
      <Text style={{ color: value ? undefined : "crimson" }}>{label}</Text>
    </View>
  );
};

export default CustomCheckBox;
