import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { footerApplicationLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";
import { AppLinks } from "@/types/app-links";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerApplicationLinks.map((element) => (
    <div key={uuidv4()}>{element.label}</div>
  ));

  return (
    <div className="bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typography variant="caption1" theme="white" weight="medium">
            Gash 21 Productions
          </Typography>
          <Typography variant="caption3" theme="gray">
            Simple & Pure
          </Typography>
          <a href="https://www.image-line.com" target="_blank">
            <Image
              src="/assets/svg/Alecive-Flatwoken-Apps-Feedly-B.svg"
              width={70}
              height={50}
              alt="FL Studio"
            />
          </a>
        </div>
        <div className="">
          <FooterLink data={footerApplicationLinks} />
        </div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption4" theme="gray">
            {`Copyright © ${currentYear} | Propulsed by `}
            <a
              href="https://www.reasonstudios.com/"
              target="_blank"
              className="underline"
            >
              Gash21
            </a>
          </Typography>
          <div className=""></div>
        </div>
      </Container>
    </div>
  );
};

interface footerLinkProps {
  data: AppLinks[];
}

const FooterLink = ({ data }: footerLinkProps) => {
  const linksList = data.map((link) => (
    <div key={uuidv4()}>
      {link.type === "internal" && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === "external" && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        Titre
      </Typography>
      <Typography theme="gray" variant="caption3" className="space-y-4">
        {linksList}
      </Typography>
    </div>
  );
};
