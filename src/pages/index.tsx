import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiAncientGateFill, RiUser6Fill } from "react-icons/ri";
import { Logo } from "@/ui/design-system/logo/logo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/navigation/footer";

export default function Home() {
  return (
    <>
      <Seo title="socit" description="description..." />

      <Navigation />

      <Footer />

      <Typography variant="display" component="h1">
        Socit
      </Typography>

      <Container className="py-10 space-y-5">
        <div className="flex items-start gap-7">
          <div className="space-y-2">
            <Typography variant="caption2" weight="medium">
              Avatar
            </Typography>
            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
              <Avatar
                size="small"
                src="/assets/images/9856312_microphone_record_sound_audio_mic_icon.png"
                alt="Avatar de Unknown Listener"
              />
              <Avatar
                src="/assets/images/9856312_microphone_record_sound_audio_mic_icon.png"
                alt="Avatar de Unknown Listener"
              />
              <Avatar
                size="large"
                src="assets/images/reynier-carl-wf0c0d-h2fE-unsplash.jpg"
                alt="Avatar de Unknown Listener"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
