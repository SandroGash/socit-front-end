import { LinkTypes } from "@/lib/link-type";
import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const SocitSocietyView = () => {
  return (
    <Container className="flex justify-between">
      <div className="flex flex-col justify-center max-w-2xl space-y-5">
        <div className="flex items-center gap-2">
          <Logo size="very-small" />
          <Typography variant="caption2" component="span" weight="medium">
            Socit
          </Typography>
        </div>
        <Typography variant="h2" component="h2">
          Rentre dans le cercle des créateurs d'obscurité
        </Typography>
        <Typography
          variant="body-lg"
          component="p"
          theme="gray"
          className="max-w-lg"
        >
          La variété n'est pas pour nous... On veut du sale.
        </Typography>
        <Button baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
          Ne crains rien, sois la crainte !
        </Button>
      </div>
      <div className="relative w-[500px] h-[500px]">
        <Image fill src={"/assets/svg/bed.svg"} alt="forum" />
      </div>
    </Container>
  );
};
