import Header from "./Header";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";
import HtmlHead from "./HtmlHead";

import "../style/css/custom.css";
import "../style/css/responsive.css";
import "../style/fonts/font-awesome/css/font-awesome.css";

const Layout = (props) => {
  return (
    <>
      <HtmlHead
        forms={props.forms}
        integrationId={props.integrationId}
        customFormWidgetUrl={props.customFormWidgetUrl}
      />
      <Header navColor={props.navColor} />
      {props.children}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Layout;
