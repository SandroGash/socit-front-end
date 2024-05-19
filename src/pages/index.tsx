import { Seo } from "@/ui/components/seo";
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
