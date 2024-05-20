import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiAncientGateFill, RiUser6Fill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Seo title="socit" description="description..." />

      <RiUser6Fill />
      <Typography variant="display" component="h1">
        Socit
      </Typography>
    </>
  );
}
