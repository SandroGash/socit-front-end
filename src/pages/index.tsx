import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="socit" description="description..." />
      <Typography variant="display" component="h1">
        Socit
      </Typography>
    </>
  );
}
