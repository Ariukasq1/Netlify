import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Partner from "../components/Partner";
import Service from "../components/Service";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";

const Index = () => {
  const [showBanner, setShowBanner] = React.useState(true);
  const onShowBanner = () => setShowBanner(!showBanner);

  return (
    <Layout
      forms={[
        {
          brand_id: "m7DmKt",
          form_id: "Kuf9FA",
        },
      ]}
      showInvest={showBanner ? true : false}
      onShowBanner={onShowBanner}
    >
      <Banner />
      <Service />
      <Feature />
      <Pricing />
      <Partner />
    </Layout>
  );
};

export default Index;
