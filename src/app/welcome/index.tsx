import { View, Text } from "react-native";
import { useSignUp } from "../../contexts/SignUpContextProvider";

const WelcomePage = () => {
  const { signupDetails } = useSignUp();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontWeight: "400", fontSize: 18 }}>
        Welcome{" "}
        <Text style={{ color: "#9A0000", fontWeight: "bold" }}>
          {signupDetails?.fullName}
        </Text>
        !
      </Text>
      <Text>btw you could go back and change your details</Text>
    </View>
  );
};

export default WelcomePage;
