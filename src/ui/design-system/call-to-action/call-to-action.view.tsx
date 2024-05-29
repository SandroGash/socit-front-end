import { Container } from "@/ui/components/container/container";
import { Typography } from "../typography/typography";
import { Button } from "../button/button";
import { LinkTypes } from "@/lib/link-type";
import Image from "next/image";

export const CallToActionView = () => {
  return (
    <div className="relative overflow-hidden bg-primary">
      <Container className="py-20">
        <div className="relative z-10 max-w-3xl space-y-5 left-[20px]">
          <Typography variant="h2" theme="white" component="h2">
            Demain c'est loin, démarre maintenant !
          </Typography>
          <div>
            <Button
              variant="success"
              baseUrl="#/"
              linkType={LinkTypes.EXTERNAL}
            >
              Rejoins le réseau
            </Button>
          </div>
        </div>
        <div>
          <Image
            width={200}
            height={200}
            src="/assets/svg/headphones.svg"
            alt="headphones"
            className="absolute -bottom-[5px] right-[150px]"
          />
        </div>
      </Container>
    </div>
  );
};
