import ForgetPassword from "@/pages/connexion/mot-de-passe-perdu";
import { ForgetPasswordView } from "./forget-pasword.view";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFieldType, FormsType } from "@/types/forms";

export const ForgetPasswordContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ForgetPasswordFormFieldType>();

  const onSubmit: SubmitHandler<ForgetPasswordFormFieldType> = async (
    FormData
  ) => {
    setIsLoading(true);
  };
  return (
    <>
      <ForgetPasswordView
        form={{
          errors,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
        }}
      />
    </>
  );
};
