import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ForgetPasswordContainer } from "@/ui/modules/authentication/forget-password/forget-password.container";

export default function ForgetPassword() {
  return (
    <>
      <Seo title="Connexion à Socit" description="Page de conneixon" />

      <Layout>
        <ForgetPasswordContainer />
      </Layout>
    </>
  );
}
