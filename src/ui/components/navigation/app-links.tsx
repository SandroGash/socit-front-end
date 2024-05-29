import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
  {
    label: "Accueil",
    baseUrl: "/",
    type: "internal",
  },

  {
    label: "Projets",
    baseUrl: "/#",
    type: "internal",
  },

  {
    label: "Coders Monkey",
    baseUrl: "/#",
    type: "internal",
  },

  {
    label: "Gash Production",
    baseUrl: "https://www.image-line.com",
    type: "internal",
  },
];

const footerUserLinks: AppLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },

  {
    label: "Connexion",
    baseUrl: "/#",
    type: "internal",
  },

  {
    label: "Inscription",
    baseUrl: "/#",
    type: "internal",
  },

  {
    label: "Mot de passe oublié",
    baseUrl: "/#",
    type: "internal",
  },
];

const footerInformationLinks: AppLinks[] = [
  {
    label: "CGU",
    baseUrl: "/#",
    type: "internal",
  },

  {
    label: "Confidentialité",
    baseUrl: "/#",
    type: "internal",
  },

  {
    label: "À propos",
    baseUrl: "/#",
    type: "internal",
  },

  {
    label: "Contact",
    baseUrl: "/#",
    type: "internal",
  },
];

export const footerSocialNetworksLinks: AppLinks[] = [
  {
    label: "Youtube",
    baseUrl: "https://www.youtube.com/@nbaextra-beinsports",
    type: "external",
    icon: RiYoutubeFill,
  },

  {
    label: "Linkedin",
    baseUrl: "https://www.linkedin.com/jobs/",
    type: "external",
    icon: RiLinkedinFill,
  },

  {
    label: "Slack",
    baseUrl: "https://slack.com/intl/fr-fr",
    type: "external",
    icon: RiSlackFill,
  },
];

export const footerLinks = [
  {
    label: "App",
    links: footerApplicationLinks,
  },

  {
    label: "Utilisateurs",
    links: footerUserLinks,
  },

  {
    label: "Information",
    links: footerInformationLinks,
  },

  {
    label: "Réseaux",
    links: footerSocialNetworksLinks,
  },
];
