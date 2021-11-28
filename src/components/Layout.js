import Header from "./Header";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";
import PromotionBanner from "./PromotionBanner";
import HtmlHead from "./HtmlHead";

import "../style/css/custom.css";
import "../style/css/responsive.css";
import "../style/fonts/font-awesome/css/font-awesome.css";

const Layout = (props) => {
  return (
    <>
      <HtmlHead {...props} />
      {props.showInvest && (
        <PromotionBanner onShowBanner={props.onShowBanner} />
      )}
      <Header {...props} />
      {props.children}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Layout;
