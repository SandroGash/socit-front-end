import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "@/ui/components/container/container";
import Image from "next/image";
import { RiPlayCircleLine } from "react-icons/ri";

export const DocumentationNewsView = () => {
  return (
    <div className="bg-gray-300">
      <Container className="py-24 text-center">
        <Typography variant="h2" component="h2" className="mb-2.5">
          Maintiens les fondations, propage l'information
        </Typography>
        <Typography variant="lead" component="h3" className="mb-5">
          L'enseignement et la transmission sont le ciment de notre édifice
        </Typography>
        <Typography
          variant="caption3"
          theme="gray"
          component="p"
          className="mb-16"
        >
          Le savoir est une arme, ici c'est l'armurerie !
        </Typography>
        <a href="#/" target="_blank">
          <div className="relative bg-gray-400 rounded h-[400px]">
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2 text-white rounded opacity-0 bg-gray hover:opacity-95 animate">
              <RiPlayCircleLine size={42} />
              <Typography
                variant="caption2"
                theme="white"
                className="uppercase"
                weight="medium"
              >
                s'instruire
              </Typography>
            </div>
            <Image
              fill
              src="assets/images/classroom.jpg"
              alt="photo school"
              className="object-cover object-center rounded"
            />
          </div>
        </a>
      </Container>
    </div>
  );
};
