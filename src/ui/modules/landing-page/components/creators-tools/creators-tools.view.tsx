import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { Button } from "@/ui/design-system/button/button";
import { RiCheckboxCircleLine, RiArrowRightLine } from "react-icons/ri";

export const CreatorToolsView = () => {
  return (
    <Container className="py-4 space-y-10">
      <div className="flex justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image fill src="assets/svg/writter.svg" alt="writter" />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            On ne t'apprend pas à écrire, on te fourni l'inspiration
          </Typography>
          <div className="space-y-3">
            <ListPoint>Oublie Biggie, crée ta propre légende.</ListPoint>
            <ListPoint>
              Les anciens te donnent des outils, façonne ton écriture.
            </ListPoint>
            <ListPoint>
              Sers-toi de la tendance si tu veux, mais remplace-la vite !
            </ListPoint>
          </div>
          <div className="relative inline-block">
            <Button
              baseUrl="/#"
              icon={{ icon: RiArrowRightLine }}
              iconPosition="right"
            >
              Commence à gratter
            </Button>
            <Image
              width={25}
              height={27}
              src="/assets/svg/pointer.svg"
              alt="pointer"
              className="absolute -bottom-3 right-7"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image fill src="assets/svg/piano.svg" alt="piano" />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            On ne t'apprend pas à jouer, on te donne des techniques pour
            exceller
          </Typography>
          <div className="space-y-3">
            <ListPoint>Oublie Alchemist, salis à ta façon.</ListPoint>
            <ListPoint>
              Peu importe tes outils, le tout c'est de les maîtriser.
            </ListPoint>
            <ListPoint>
              Les lunettes ne sont pas pour le soleil, mais pour les flammes.
            </ListPoint>
          </div>
          <div className="relative inline-block">
            <Button
              baseUrl="/#"
              icon={{ icon: RiArrowRightLine }}
              iconPosition="right"
            >
              Commence à composer
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

interface Props {
  children: React.ReactNode;
}

const ListPoint = ({ children }: Props) => {
  return (
    <div className="flex items-start gap-2">
      <RiCheckboxCircleLine size={24} className="mt-1 text-primary" />
      <Typography variant="body-lg" component="span">
        {children}
      </Typography>
    </div>
  );
};
