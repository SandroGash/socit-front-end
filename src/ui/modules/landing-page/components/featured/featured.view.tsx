import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { Button } from "@/ui/design-system/button/button";
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";

interface FeaturesListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}

const featuresData: FeaturesListInterface[] = [
  {
    imagePath: "/assets/svg/temple-bali.svg",
    imageAlt: "illustration",
    title: "Le Temple",
    description:
      "Renforce tes connaissances grâce aux ressources de la communauté.",
  },

  {
    imagePath: "/assets/svg/jungle.svg",
    imageAlt: "illustration",
    title: "La jungle",
    description:
      "Inspire-toi de tes semblables, observe ce qui a déjà été accompli pour trouver ta voie.",
  },

  {
    imagePath: "/assets/svg/theater.svg",
    imageAlt: "illustration",
    title: "La scène",
    description: "Expose ton talent, l'accomplissement de ton travail.",
  },

  {
    imagePath: "/assets/svg/network.svg",
    imageAlt: "illustration",
    title: "Le réseau",
    description:
      "Connecte-toi avec d'autres créateurs, l'union fait la force !",
  },
];

export const FeaturedView = () => {
  const featuredList = featuresData.map((feature) => (
    <div
      key={uuidv4()}
      className="flex flex-col items-center justify-center bg-white rounded p-7"
    >
      <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 bg-gray-400 overflow-hidden">
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down blur-2xl"
        />
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down"
        />
      </div>
      <Typography
        variant="lead"
        component="h3"
        weight="medium"
        className="text-center mb-2.5"
      >
        {feature.title}
      </Typography>
      <Typography
        variant="body-base"
        component="p"
        theme="gray"
        className="text-center"
      >
        {feature.description}
      </Typography>
    </div>
  ));

  return (
    <div className="bg-gray-400">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="grid grid-cols-2 col-span-7 gap-7">{featuredList}</div>
        <div className="flex flex-col justify-between col-span-5 gap-10">
          <div>
            <Typography variant="h2" component="h2" className="mb-5">
              L'environnement de création idéal, pour faire du sale
            </Typography>
            <Typography
              variant="body-lg"
              component="p"
              theme="gray"
              className="mb-8"
            >
              Développe ton "don", ta passion , c'est ta mission !
            </Typography>
            <Button
              variant="accent"
              baseUrl="/#"
              icon={{ icon: RiArrowRightLine }}
              iconPosition="right"
            >
              Commencer
            </Button>
          </div>
          <div>
            <Typography
              variant="caption3"
              component="div"
              theme="gray"
              className="mb-4"
            >
              Nos réseaux sociaux
            </Typography>
            <SocialNetworksButtons />
          </div>
        </div>
      </Container>
    </div>
  );
};
