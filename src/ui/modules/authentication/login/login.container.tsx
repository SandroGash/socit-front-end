import { LoginView } from "./login.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFieldType } from "@/types/forms";
import { useToggle } from "@/hooks/use-toggle";
import { firebaseSignInUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldType>();

  const handleSignIngUser = async ({ email, password }: LoginFormFieldType) => {
    const { error } = await firebaseSignInUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Bienvenu sur Socit");
    setIsLoading(false);
    reset();
    router.push("/mon-espace");
  };
  const onSubmit: SubmitHandler<LoginFormFieldType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;
    if (password.length <= 5) {
      setError("password", {
        type: "manuel",
        message: "ton mot de passe doit comporter au minimum 6 caractères",
      });
      setIsLoading(false);
      return;
    }
    handleSignIngUser(formData);
  };
  return (
    <>
      <LoginView
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
