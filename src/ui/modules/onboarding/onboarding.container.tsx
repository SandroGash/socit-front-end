import { useState } from "react";
import { OnboardingView } from "./onboarding.view";
import { WelcomeStep } from "./components/steps/welcome-step/welcome-step";
import { onboardingStepListInterface } from "@/types/onboarding-steps-list";
import { ProfileStep } from "./components/steps/profile-step/profile-step";

export const OnboardingContainer = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const stepsList: onboardingStepListInterface[] = [
    { id: 1, label: "Bienvenue", component: { step: WelcomeStep } },
    { id: 2, label: "Profile", component: { step: ProfileStep } },
  ];

  const getCurrrentStep = () => {
    return stepsList.find((element) => element.id === currentStep);
  };

  const nextStep = () => {
    if (currentStep < stepsList.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isFirstStep = () => {
    if (currentStep === 1) {
      return true;
    }
    return false;
  };

  const isFinalStep = () => {
    if (currentStep === stepsList.length) {
      return true;
    }
    return false;
  };

  return (
    <OnboardingView
      getCurrentStep={getCurrrentStep}
      nextStep={nextStep}
      prevStep={prevStep}
      isFirstStep={isFirstStep}
      isFinalStep={isFinalStep}
      stepsList={stepsList}
    />
  );
};
