import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiAncientGateFill, RiUser6Fill } from "react-icons/ri";
import { Logo } from "@/ui/design-system/logo/logo";
import { Avatar } from "@/ui/design-system/avatar/avatar";

export default function Home() {
  return (
    <>
      <Seo title="socit" description="description..." />

      <Typography variant="display" component="h1">
        Socit
      </Typography>

      <div className="space-y-2">
        <Typography variant="caption2" weight="medium">
          Avatar
        </Typography>
        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
          <Avatar
            size="small"
            src="/asset/images/reynier-carl-wf0c0d-h2fE-unsplash.jpg"
            alt="Avatar de Unknown Listener"
          />
          <Avatar
            src="/asset/images/reynier-carl-wf0c0d-h2fE-unsplash.jpg"
            alt="Avatar de Unknown Listener"
          />
          <Avatar
            size="large"
            src="/asset/images/reynier-carl-wf0c0d-h2fE-unsplash.jpg"
            alt="Avatar de Unknown Listener"
          />
        </div>
      </div>
    </>
  );
}
