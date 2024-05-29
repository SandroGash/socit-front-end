import { CallToActionView } from "@/ui/design-system/call-to-action/call-to-action.view";
import { CreatorToolsView } from "./components/creators-tools/creators-tools.view";
import { DocumentationNewsView } from "./components/documentation-news/documentation-news.view";
import { FeaturedView } from "./components/featured/featured.view";
import { HeroTopView } from "./components/hero-top/hero-top.view";
import { SocitSocietyView } from "./components/socit-community/socit-community.view";

export const LandingPageView = () => {
  return (
    <>
      <HeroTopView />
      <FeaturedView />
      <SocitSocietyView />
      <DocumentationNewsView />
      <CreatorToolsView />
      <CallToActionView />
    </>
  );
};
