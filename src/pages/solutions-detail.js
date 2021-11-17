import React, { Component } from "react";
import { withRouter } from "next/router";
import Layout from "../components/Layout";
import PriceCard from "../components/PriceCard";
import {
  INDUSTRY_PRICE_FEAUTURES,
  FEATURES,
  TITLES,
  SLOGANS,
  SHORT_DESC,
  SOLUTIONS,
  IMAGES,
  PAGE_DESC,
} from "../constant";

class SolutionDetail extends Component {
  static async getInitialProps(context) {
    const slug = context.query.slug;
    return { slug };
  }

  renderSingleFeature(data, i) {
    if (i % 2 === 0) {
      return (
        <div
          key={i}
          className={`row flex-center single-feature-box ${this.props.slug}`}
        >
          <div className="col-lg-6 order-lg-last">
            <div className="text-wrapper">
              <img src="../images/icon/icon30.svg" alt="" className="icon" />
              <h2 className="title">{data.title}</h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: data.desc }}
              />
              <ul className="mt-30">
                {data.list.map((el) => (
                  <li key={el.toString()}>
                    <div dangerouslySetInnerHTML={{ __html: el }} />
                  </li>
                ))}
              </ul>
              {data.additional && (
                <i>
                  <div dangerouslySetInnerHTML={{ __html: data.additional }} />
                </i>
              )}
            </div>
          </div>

          <div className="col-lg-6 order-lg-first">
            <div className="feature-img-box left">
              <div className="row img-wrapper pt-50">
                <img
                  src={`../images/${data.imgsrc}`}
                  alt=""
                  data-aos="fade-right"
                  data-aos-duration="1200"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (i % 2 !== 0) {
      return (
        <div
          key={i}
          className={`row flex-center single-feature-box ${this.props.slug}`}
        >
          <div className="col-lg-6">
            <div className="text-wrapper">
              <img src="../images/icon/icon33.svg" alt="" className="icon" />
              <h2 className="title">{data.title}</h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: data.desc }}
              />
              <ul className="mt-30">
                {data.list.map((el) => (
                  <li key={el.toString()}>
                    <div dangerouslySetInnerHTML={{ __html: el }} />
                  </li>
                ))}
              </ul>
              {data.additional && (
                <i>
                  <div dangerouslySetInnerHTML={{ __html: data.additional }} />
                </i>
              )}
            </div>
          </div>

          <div className="col-lg-6 order-lg-last">
            <div className="feature-img-box right">
              <div className="row img-wrapper">
                <img
                  src={`../images/${data.imgsrc}`}
                  alt=""
                  data-aos="fade-left"
                  data-aos-duration="1200"
                />
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
        <div className="theme-title-one text-center p0">
          <h2 id="property-pricing" className="main-title mt-70">
            Үнийн санал
          </h2>
        </div>

        <div className="items">
          <div className="col-lg-4 p10 ">
            <PriceCard
              color="#00e1ce"
              pname="Энгийн багц"
              price="₮ 2,999,000"
              formId="Db79tP"
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
              formId="6D94jB"
              price="₮ 8,999,000"
              package={"Нэг удаа"}
              feature={INDUSTRY_PRICE_FEAUTURES[1]}
            />
          </div>

          <div className="col-lg-4 p10 ">
            <PriceCard
              color="#9f4aff"
              pname="Энтерпрайз Багц"
              formId="hGRWSx"
              title="Цогцолбор хотхон"
              add={"Үнийн санал асуух"}
              feature={INDUSTRY_PRICE_FEAUTURES[2]}
            />
          </div>
        </div>
      </>
    );
  }

  renderDemo() {
    return (
      <>
        <div className="theme-title-one text-center">
          <h2 id="property-demo" className="main-title mt-70">
            Хотхоны цахим хуудаст байрлах жишээ загвар
          </h2>
          <div className="mt-70 flex-center">
            <div data-erxes-booking style={{ width: "100%", height: "50vh" }} />
          </div>
        </div>
      </>
    );
  }

  render() {
    const { slug } = this.props;

    return (
      <Layout
        forms={
          slug === "property"
            ? [
                {
                  brand_id: "m7DmKt",
                  form_id: "4uBFnr",
                },
                {
                  brand_id: "m7DmKt",
                  form_id: "Db79tP",
                },
                {
                  brand_id: "m7DmKt",
                  form_id: "6D94jB",
                },
                {
                  brand_id: "m7DmKt",
                  form_id: "hGRWSx",
                },
              ]
            : []
        }
        integrationId={slug === "property" && "CGgqGQWeBZbdxLM3i"}
      >
        <div className="text-inner-banner-one pos-r pt-150">
          <div className="shape-wrapper">
            <svg className="img-shape shape-one">
              <path
                fillRule="evenodd"
                fill="rgb(255, 223, 204)"
                d="M6.000,12.000 C9.314,12.000 12.000,9.314 12.000,6.000 C12.000,2.686 9.314,-0.000 6.000,-0.000 C2.686,-0.000 -0.000,2.686 -0.000,6.000 C-0.000,9.314 2.686,12.000 6.000,12.000 Z"
              ></path>
            </svg>
            <svg className="img-shape shape-two">
              <path
                fillRule="evenodd"
                fill="rgb(182, 255, 234)"
                d="M6.000,12.000 C9.314,12.000 12.000,9.314 12.000,6.000 C12.000,2.686 9.314,-0.000 6.000,-0.000 C2.686,-0.000 -0.000,2.686 -0.000,6.000 C-0.000,9.314 2.686,12.000 6.000,12.000 Z"
              ></path>
            </svg>
            <svg className="img-shape shape-three">
              <path
                fillRule="evenodd"
                fill="rgb(181, 198, 255)"
                d="M12.000,24.000 C18.627,24.000 24.000,18.627 24.000,12.000 C24.000,5.372 18.627,-0.000 12.000,-0.000 C5.372,-0.000 -0.000,5.372 -0.000,12.000 C-0.000,18.627 5.372,24.000 12.000,24.000 Z"
              ></path>
            </svg>
            <svg className="img-shape shape-four">
              <path
                fillRule="evenodd"
                fill="rgb(255, 156, 161)"
                d="M7.500,15.000 C11.642,15.000 15.000,11.642 15.000,7.500 C15.000,3.358 11.642,-0.000 7.500,-0.000 C3.358,-0.000 -0.000,3.358 -0.000,7.500 C-0.000,11.642 3.358,15.000 7.500,15.000 Z"
              ></path>
            </svg>
            <svg className="img-shape shape-five">
              <path
                fillRule="evenodd"
                fill="rgb(178, 236, 255)"
                d="M12.500,25.000 C19.403,25.000 25.000,19.403 25.000,12.500 C25.000,5.596 19.403,-0.000 12.500,-0.000 C5.596,-0.000 -0.000,5.596 -0.000,12.500 C-0.000,19.403 5.596,25.000 12.500,25.000 Z"
              ></path>
            </svg>
          </div>
          <div className="container about-us-standard">
            <div className="top-icon-box">
              <div className="icon">
                <i className="flaticon-value"></i>
              </div>
              <span>{SOLUTIONS[slug]}</span>
            </div>
            <div className="theme-title-three text-center">
              <h2 className="title">{TITLES[slug]}</h2>
            </div>
            <p className="sub-heading">{SHORT_DESC[slug]}</p>
          </div>
        </div>
        <div className="intro-text-block pos-r">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-last">
                <h5>
                  <div dangerouslySetInnerHTML={{ __html: SLOGANS[slug] }} />
                </h5>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: PAGE_DESC[slug] }}
                />
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="icon md-mt-40">
                  <img
                    src={`../images/${IMAGES[slug]}`}
                    alt="erxes-solutions"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-feature-app p0">
          {FEATURES &&
            FEATURES[slug] &&
            FEATURES[slug].map((el, i) => this.renderSingleFeature(el, i))}
        </div>

        {slug === "property" && (
          <div className="element-section mb-150 pt-50">
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
                </div>
                <div className="video-action-banner-one property mt-95">
                  <div className="overlay">
                    <a
                      data-fancybox=""
                      href="https://www.youtube.com/embed/lPPV0LeGu7g"
                      className="video-button fancybox"
                    >
                      <img src="/images/icon/icon47.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="container seo-our-pricing">
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
