import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { RegisterContainer } from "@/ui/modules/authentication/register/register.container";
import { GUEST } from "@/lib/session-status";

export default function Register() {
  return (
    <>
      <Seo title="Connexion à Socit" description="Page de conneixon" />

      <Layout sessionStatus={GUEST}>
        <RegisterContainer />
      </Layout>
    </>
  );
}
