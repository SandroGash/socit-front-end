import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const HeroTopView = () => {
  return (
    <Container className="relative pt-40 pb-52 overflow-hidden">
      <div className="w-full max-w-2xl space-y-5">
        <Typography variant="h1" component="h1" className="max-w-lg">
          Expose ton talent, explose nos tympans !
        </Typography>
        <Typography
          variant="body-lg"
          theme="gray"
          component="p"
          className="mw-w-xl"
        >
          Les liens de la création sont sacrés. Trouve les connexions qui te
          permettront de développer ton talent. «La combinaison des forces fait
          la puissance d'une meute !» -Gash 21-
        </Typography>
        <div className="space-x-5 pt-2.5">
          <Button baseUrl="">Commencer</Button>
          <Button baseUrl="" variant="secondary">
            En savoir plus
          </Button>
        </div>
      </div>
      <Image
        src="/assets/svg/snoop.svg"
        alt="image Snoop"
        width={530}
        height={260}
        className="absolute top-12 right-0 z-0"
      />
    </Container>
  );
};
