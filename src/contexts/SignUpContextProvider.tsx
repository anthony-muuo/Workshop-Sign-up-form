import { createContext, useContext } from "react";
import * as z from "zod";
import { useState } from "react";
import { router } from "expo-router";

export const SignUpInfoSchema = z
  .object({
    fullName: z
      .string({ message: "full Name is required" })
      .min(3, { message: "Full Name must be longer than 3 characters" }),
    email: z.string().email(),
    dob: z.date(),
    password: z
      .string({
        required_error: "Please enter a password",
      })
      .min(3, { message: "password must be longer than 3 characters" }),
    confirm: z
      .string({
        required_error: "Please confirm your password",
      })
      .min(3, { message: "password must be longer than 3 characters" }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Password do not match",
    path: ["confirm"],
  });

export type SignUpInfo = z.infer<typeof SignUpInfoSchema>;

type FormContextProps = {
  signupDetails: SignUpInfo | undefined;
  setSignupDetails: (data: SignUpInfo | undefined) => void;
  onSubmit: () => void;
};

const SignUpContext = createContext<FormContextProps>({
  signupDetails: undefined,
  setSignupDetails: () => {},
  onSubmit: () => {},
});

const SignUPContextProvider = ({ children }: React.PropsWithChildren) => {
  const [signupDetails, setSignupDetails] = useState<SignUpInfo | undefined>();

  const onSubmit = () => {
    if (!signupDetails) {
      console.log("this form is incomplete");
      return;
    }
    router.push("/welcome");
  };

  return (
    <SignUpContext.Provider
      value={{ signupDetails, setSignupDetails, onSubmit }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUp = () => useContext(SignUpContext);

export default SignUPContextProvider;
