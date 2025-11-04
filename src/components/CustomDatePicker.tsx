import { useState } from "react";
import { useController } from "react-hook-form";
import { Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

type CustomDatePickerProps = {
  name: string;
  label?: string;
};

const CustomDatePicker = ({ name, label }: CustomDatePickerProps) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    onChange(date);
    hideDatePicker();
  };

  return (
    <View style={{ paddingVertical: 6 }}>
      {label && (
        <Text style={{ fontWeight: "600", color: "dimgray" }}>{label}</Text>
      )}
      <Text
        onPress={showDatePicker}
        style={[
          {
            padding: 10,
            color: "black",
            borderWidth: 1,
            borderRadius: 5,
            width: "100%",
            marginTop: 4,
            marginBottom: 2,
          },
          error && { borderColor: "crimson" },
        ]}
      >
        {value?.toLocaleDateString() || "Select Date of Birth"}
      </Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Text style={{ color: "crimson" }} numberOfLines={1}>
        {error?.message}
      </Text>
    </View>
  );
};

export default CustomDatePicker;
