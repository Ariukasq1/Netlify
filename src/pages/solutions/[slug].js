import React, { Component } from "react";
import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import Pricing from "../../components/Pricing";
import PriceCard from "../../components/PriceCard";
import {
  INDUSTRY_PRICE_FEAUTURES,
  FEATURES,
  TITLES,
  SLOGANS,
  SHORT_DESC,
  PAGE_DESC,
} from "./constant";
("./[detail]");
class SolutionDetail extends Component {
  static async getInitialProps(context) {
    const slug = context.query.slug;
    return { slug };
  }

  renderSingleFeature(data, i) {
    if (i % 2 === 0) {
      return (
        <div className="row flex-center single-feature-box">
          <div className="col-lg-6 order-lg-last">
            <div className="text-wrapper">
              <img src="../images/icon/icon30.svg" alt="" className="icon" />
              <h2 className="title">{data.title}</h2>
              <p>{data.desc}</p>
              <ul className="mt-30">
                {data.list.map((el) => (
                  <li key={el.toString()}>{el}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6 order-lg-first">
            <div className="feature-img-box left">
              <div className="row img-wrapper">
                <img src={`../images/${data.imgsrc}`} alt="" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (i % 2 !== 0) {
      return (
        <div className="row flex-center single-feature-box">
          <div className="col-lg-6">
            <div className="text-wrapper">
              <img src="../images/icon/icon33.svg" alt="" className="icon" />
              <h2 className="title">{data.title}</h2>
              <p>{data.desc}</p>
              <ul className="mt-30">
                {data.list.map((el) => (
                  <li key={el.toString()}>{el}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6 order-lg-last">
            <div className="feature-img-box left">
              <div className="row img-wrapper">
                <img src={`../images/${data.imgsrc}`} alt="" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  renderPriceCards() {
    return (
      <>
        <div className="theme-title-one text-center">
          <h2 id="industry-pricing" className="main-title mt-70">
            Үнийн санал
          </h2>
        </div>

        <div className="items">
          <div className="col-lg-4 p10 ">
            <PriceCard
              color="#00e1ce"
              pname="Энгийн багц"
              price="₮ 2,999,000"
              title="Хороолол"
              package={"Нэг удаа"}
              feature={INDUSTRY_PRICE_FEAUTURES[0]}
            />
          </div>
          <div className="col-lg-4 p10 ">
            <PriceCard
              color="#ffcd63"
              pname="Мэргэжлийн багц"
              title="Хотхон"
              price="₮ 8,999,000"
              package={"Нэг удаа"}
              feature={INDUSTRY_PRICE_FEAUTURES[1]}
            />
          </div>

          <div className="col-lg-4 p10 ">
            <PriceCard
              color="#9f4aff"
              pname="Энтерпрайз Багц"
              title="Цогцолбор хотхон"
              add={"Үнийн санал асуух"}
              feature={INDUSTRY_PRICE_FEAUTURES[2]}
            />
          </div>
        </div>
      </>
    );
  }

  renderHeaderButtons() {
    return (
      <>
        <a
          href="#industry-demo"
          className="theme-btn solid-button-one"
          data-wow-delay="1.5s"
          target="_self"
          rel="noreferrer noopener"
        >
          Demo
        </a>
        <a
          href="#industry-pricing"
          className="theme-btn line-button-one"
          data-wow-delay="1.5s"
          target="_self"
          rel="noreferrer noopener"
        >
           Үнийн санал
        </a>
      </>
    );
  }

  renderDemo() {
    return (
      <>
        <div className="theme-title-one text-center">
          <h2 id="solution-demo" className="main-title mt-70">
            Demo
          </h2>
          <div className="mt-30 flex-center">
            <div
              data-erxes-booking
              style={{ width: "500px", height: "500px" }}
            ></div>
          </div>
        </div>
      </>
    );
  }

  render() {
    const { slug } = this.props;
    return (
      <Layout forms={[{ brand_id: "m7DmKt", form_id: "4uBFnr" }]}>
        <div className="solid-inner-banner rogan-hero-section invest">
          <div className="flex-center">
            <h2 className="solution-page-title">{TITLES[slug]}</h2>
          </div>
          {slug === "industry" && this.renderHeaderButtons()}
        </div>
        <div className="container">
          <div className="row mt-30 ">
            <div className="theme-title-one text-center ">
              <div className="upper-title mt-30 fw-500">{SLOGANS[slug]}</div>
              <p>{PAGE_DESC[slug]}</p>

              <div className="centered-img">
                <img
                  src={
                    slug === "hr"
                      ? "../images/hr/First.png"
                      : slug === "marketing"
                      ? "../images/marketing/info.png"
                      : ""
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="our-feature-app p0">
          {FEATURES[slug] &&
            FEATURES[slug].map((el, i) => this.renderSingleFeature(el, i))}
        </div>

        {slug === "industry" && (
          <div className="element-section mb-150">
            <div className="agn-our-pricing sass-our-pricing p0">
              <div className="section-shape-one">
                <img src="../images/shape/shape-18.svg" alt="" />
              </div>
              <img
                src="../images/shape/shape-55.svg"
                alt=""
                className="shape-one"
              />
              <img
                src="../images/shape/shape-62.svg"
                alt=""
                className="shape-two"
              />
              <img
                src="../images/shape/shape-24.svg"
                alt=""
                className="section-shape-two"
                data-aos="fade-right"
                data-aos-duration="3000"
              />
              <img
                src="../images/shape/shape-25.svg"
                alt=""
                className="section-shape-three"
              />
              <div className="section-shape-four"></div>
              <img
                src="../images/shape/shape-1.svg"
                alt=""
                className="shape-three"
              />
              <img
                src="../images/shape/shape-60.svg"
                alt=""
                className="shape-four"
              />
              <img
                src="../images/shape/shape-57.svg"
                alt=""
                className="shape-five"
              />
              <img
                src="../images/shape/shape-26.svg"
                alt=""
                className="section-shape-five"
              />
              <img
                src="../images/shape/shape-27.svg"
                alt=""
                className="section-shape-six"
                data-aos="fade-left"
                data-aos-duration="3000"
              />

              <div className="element-section mb-150">
                <div className="container seo-our-pricing">
                  {this.renderDemo()}
                  {this.renderPriceCards()}
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    );
  }
}

export default withRouter(SolutionDetail);
