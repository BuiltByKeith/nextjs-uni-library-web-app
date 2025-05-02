"use client";


import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const Signup = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        fullname: "",
        email: "",
        password: "",
        universityId: 0,
        universityCard: "",
      }}
      onSubmit={() => {}}
    />
  );
};

export default Signup;
