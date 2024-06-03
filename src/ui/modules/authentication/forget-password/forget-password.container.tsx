import { ForgetPasswordView } from "./forget-pasword.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFieldType, FormsType } from "@/types/forms";
import { useToggle } from "@/hooks/use-toggle";
import { sendEmailToResetPassword } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const ForgetPasswordContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ForgetPasswordFormFieldType>();

  const handleResetPassword = async ({
    email,
  }: ForgetPasswordFormFieldType) => {
    const { error } = await sendEmailToResetPassword(email);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success(`Un e-mail a été envoyé à l'adresse ${email}`);
    setIsLoading(false);
    reset();
    router.push("/connexion");
  };

  const onSubmit: SubmitHandler<ForgetPasswordFormFieldType> = async (
    formData
  ) => {
    setIsLoading(true);
    handleResetPassword(formData);
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
