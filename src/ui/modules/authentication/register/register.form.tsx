import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
  form: FormsType;
}

export const RegisterForm = ({ form }: Props) => {
  const { onSubmit, errors, isLoading, register, handleSubmit } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        placeholder="Royce.rockcity@gmail.com"
        type="email"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ce champ correctement"
        id="email"
      />

      <Input
        isLoading={isLoading}
        placeholder="Mot de Passe"
        type="password"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ce champ correctement"
        id="password"
      />

      <Input
        isLoading={isLoading}
        placeholder="Comment nous as-tu connu ?"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ce champ correctement"
        id="how-did-hear"
      />

      <Button isLoading={isLoading} type="submit" fullWidth>
        S'inscrire
      </Button>
    </form>
  );
};
