import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { Button } from "@/ui/design-system/button/button";

export const WelcomeStep = ({ nextStep }: BaseComponentProps) => {
  return (
    <div>
      Welcome Step
      <Button action={nextStep}>Suivant</Button>
    </div>
  );
};
