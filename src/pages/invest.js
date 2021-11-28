import React, { Component } from "react";
import Layout from "../components/Layout";

class Invest extends Component {
  componentDidMount() {
    var logoslider = $(".partner-slider");
    if (logoslider.length) {
      logoslider.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplaySpeed: 1000,
        lazyLoad: true,
        singleItem: true,
        center: true,
        responsive: {
          0: {
            items: 1,
          },
          550: {
            items: 3,
          },
          992: {
            items: 5,
          },
        },
      });
    }
  }

  render() {
    return (
      <Layout
        navColor="white"
        forms={[
          {
            brand_id: "G6akbR",
            form_id: "hmihCv",
          },
        ]}
        customFormWidgetUrl="https://tdbcapital.erxes.io/widgets/build/formWidget.bundle.js"
      >
        <section className="invest-banner rogan-hero-section invest">
          <img src="/images/invest3.png" alt="img" />
          <div>
            <div>
              <a
                data-erxes-modal="hmihCv"
                className="theme-btn solid-button-one"
              >
                Стратегийн хөрөнгө оруулагч болох
              </a>
              <a
                href="https://bit.ly/30XA4id"
                className="theme-btn line-button-one"
                target="_blank"
                rel="noreferrer noopener"
              >
                Дэлгэрэнгүй мэдээлэл авах
              </a>
            </div>
            <div className="additional-info">
              <div className="additional-info-logo">
                <img src="/images/logo/tdb.png" alt="tdb" />
              </div>
              <p>
                Хөрөнгө оруулалт болон хувьцаа худалдан авахтай холбоотой
                дэлгэрэнгүй мэдээлэл авахыг хүсвэл TDB Securities-н &nbsp;
                <b>info@tdbsecurities.mn</b> хаяг руу хандаарай. Мөн &nbsp;
                <b>70100261, 11311914</b> утсаар нөхцөл байдалд тохирсон
                мэргэжлийн зөвлөгөөг аваарай.
              </p>
            </div>
          </div>
        </section>

        <section className="investment-sub agn-about-us invest pt-50 pb-100">
          <img src="images/shape/shape-61.svg" alt="" className="shape-one" />
          <img
            src="images/shape/shape-64.svg"
            alt=""
            className="shape-two aos-init aos-animate"
            data-aos="fade-left"
          />
          <img
            src="images/shape/shape-65.svg"
            alt=""
            className="shape-three aos-init"
            data-aos="fade-right"
          />
          <img src="images/shape/shape-60.svg" alt="" className="shape-four" />
          <div className="container">
            <div className="theme-title-three text-center">
              <p className=" pb-50">
                Эх орныхоо шавхагдашгүй нөөц болох Монгол залуусын оюун ухаанаар
                олон улсын технологийн салбарт өрсөлдөхүйц үнэ цэнийг бүтээн,
                стратегийн хөрөнгө оруулагчдын нэг болж Цахиурын Хөндийд
                гялалзах ирээдүйн амжилтыг хамтдаа бүтээцгээе.
              </p>
            </div>
            <div className="theme-title-one text-center">
              <h3>Хэнд хөрөнгө оруулах вэ?</h3>
            </div>
            <p style={{ background: "#fff" }}>
              Бид бүхэн 2010 оноос хойш 11 жилийн хугацаанд технологийн салбарт
              тасралтгүй үйл ажиллагаагаа явуулахдаа гадаад зах зээлд зориулсан
              “Peep”, “Mogulio”, “Nobile”, “TeamOn” дөрвөн платформыг хэрэглээнд
              нэвтрүүлсэн. Харин бидний тав дахь бүтээгдэхүүн болох erxes нь
              одоогоор дэлхийн 100+ гаруй улсад, 30+ гаруй хэл дээр орчуулагдан,
              25,000+ орчим хэрэглэгчид идэвхтэй ашиглан үйл ажиллагаагаа
              амжилттай явуулж буй Цахиурын хөндий дэх анхны Монгол компани юм.
            </p>
            <div className="row agn-what-we-do invest pt-30">
              <div className="col-lg-3 col-md-6">
                <div className="single-block">
                  <div className="icon">
                    <img src="images/shape/shape-2.svg" alt="" className="bg" />
                    <img
                      src="images/icon/erxes-19.png"
                      alt=""
                      className="shape aos-init aos-animate"
                      data-aos="zoom-in-down"
                    />
                  </div>
                  <p>Бизнес эрхлэгчдэд зориулсан маркетингийн технологи</p>
                  <a
                    href="https://erxes.mn/about"
                    className="line-button-two"
                    rel="noreferrer noopener"
                  >
                    Дэлгэрэнгүй
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-block">
                  <div className="icon">
                    <img src="images/shape/shape-2.svg" alt="" className="bg" />
                    <img
                      src="images/icon/icon4.png"
                      alt=""
                      className="shape aos-init aos-animate"
                      data-aos="zoom-in-down"
                    />
                  </div>
                  <p>11 гаруй жилийн туршлага 35+ залуус</p>
                  <a
                    href="https://erxes.mn/team"
                    className="line-button-two"
                    rel="noreferrer noopener"
                  >
                    Дэлгэрэнгүй
                  </a>
                </div>
              </div>

              <div className="col-lg-3 co-12 d-md-none d-lg-block">
                <div className="single-block">
                  <div className="icon">
                    <img src="images/shape/shape-2.svg" alt="" className="bg" />
                    <img
                      src="images/icon/icon5.png"
                      alt=""
                      className="shape aos-init aos-animate"
                      data-aos="zoom-in-down"
                    />
                  </div>
                  <p>АНУ-д төвтэй, Улаанбаатарт оффистой</p>
                  <a
                    href="https://erxes.mn/about"
                    className="line-button-two"
                    rel="noreferrer noopener"
                  >
                    Дэлгэрэнгүй
                  </a>
                </div>
              </div>

              <div className="col-lg-3 co-12 d-md-none d-lg-block">
                <div className="single-block">
                  <div className="icon">
                    <img src="images/shape/shape-2.svg" alt="" className="bg" />
                    <img
                      src="images/icon/icon6.png"
                      alt=""
                      className="shape aos-init aos-animate"
                      data-aos="zoom-in-down"
                    />
                  </div>
                  <p>
                    Компанийн үнэлгээ <br /> ₮59,9 тэрбум
                  </p>
                  <a
                    href="https://invest.erxes.io/home"
                    className="line-button-two"
                    rel="noreferrer noopener"
                  >
                    Дэлгэрэнгүй
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://bit.ly/30XA4id"
            className="learn-more theme-button-two aos-init invest"
            data-aos="fade-left"
            target="_blank"
            rel="noopener noreferer"
          >
            Зааварчилгаатай танилцах
            <i className="fa fa-angle-right icon-right" aria-hidden="true"></i>
          </a>
        </section>

        <section className="investment-info achivement-section pt-200 pb-250 pos-r md-pt-150 md-pb-150">
          <div className="shape-wrapper">
            <img
              src="/images/shape/46.svg"
              alt=""
              className="shape-bg img-shape"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 order-lg-last">
                <div className="theme-title-one">
                  <div class="upper-title mb-5">#ЦахиуртХамтдаа</div>
                  <h2 className="main-title underline line-height">
                    $ERXS үнэт цаасны тоон үзүүлэлт
                  </h2>
                </div>
                <p className="pt-50">
                  Бид нийт хувьцааныхаа 13.39%-ийг зах зээлд санал болгож байна.
                  <br /> <br />
                  Эрксис технологийн компани нь маркетингийн технологийг бүхий л
                  бизнесүүдэд хүртээмжтэй болгох, эх орныхоо эдийн засгийн
                  хөгжлийг тогтворжуулах, улмаар дэлхийн тавцанд Монгол
                  инженерүүдийн бүтээлийг аваачихыг зорьсоор ирсэн билээ.
                </p>
              </div>

              <div className="col-lg-7 order-lg-first">
                <div className="theme-counter-one pos-r md-mt-100 md-mb-110 sm-mt-60 sm-mb-10">
                  <div className="shape-wrapper">
                    <img
                      src="/images/shape/45.svg"
                      alt=""
                      className="shape-one img-shape"
                    />
                    <img
                      src="/images/shape/4.svg"
                      alt=""
                      className="shape-two img-shape"
                    />
                    <img
                      src="/images/shape/23.svg"
                      alt=""
                      className="shape-three img-shape"
                    />
                    <img
                      src="/images/shape/9.svg"
                      alt=""
                      className="shape-four img-shape"
                    />
                    <img
                      src="/images/shape/17.svg"
                      alt=""
                      className="shape-five img-shape"
                    />
                    <img
                      src="/images/shape/24.svg"
                      alt=""
                      className="shape-six img-shape"
                    />
                    <img
                      src="/images/shape/25.svg"
                      alt=""
                      className="shape-seven img-shape"
                    />
                  </div>
                  <div className="inner-round-shape pos-r">
                    <div className="counter-box-one pos-a">
                      <p>Компанийн үнэлгээ</p>
                      <h2 className="number color-one">$20,728,867</h2>
                    </div>
                    <div className="counter-box-one pos-a">
                      <p>Нийт хөрөнгө оруулалт</p>
                      <h2 className="number color-two">$1,220,469</h2>
                    </div>
                    <div className="counter-box-one pos-a">
                      <p>Хөрөнгө оруулах доод хэмжээ</p>
                      <h2 className="number color-three">$600</h2>
                    </div>
                    <div className="counter-box-one pos-a">
                      <p>Нэрлэсэн үнэ</p>
                      <h2 className="number color-four">$1.83</h2>
                    </div>
                    <div className="center-shape pos-a">
                      <img src="/images/icon/icon3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-blog-one pos-r pt-150 pb-150 md-pt-20 md-pb-200">
          <div className="container">
            <div className="row feature-block-wrapper">
              <div className="col-md-4">
                <div className="feature-block-one text-center main-p-color hover-state mb-40">
                  <div className="image-wrapper">
                    <img src="/images/icon/icon7.png" alt="invest-icon" />
                  </div>
                  <h5 className="pt-30 pb-25 tran3s title">Эрхэм зорилго</h5>
                  <p className="tran3s">
                    Бүх төрлийн бизнесүүдэд өсөн дэвжих тэгш боломжийг нээлттэй
                    эхийн технологиороо <br />
                    олгох
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feature-block-one text-center main-p-color hover-state mb-40">
                  <div className="image-wrapper">
                    <img src="/images/icon/icon8.png" alt="invest-icon" />
                  </div>
                  <h5 className="pt-30 pb-25 tran3s title">Алсын хараа</h5>
                  <p className="tran3s">
                    Монгол инженерүүдийн бүтээлийн тусламжтайгаар маркетинг
                    технологи бүгдэд тэгш хүртээмжтэй болгох
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-block-one text-center main-p-color hover-state">
                  <div className="image-wrapper">
                    <img src="/images/icon/icon9.png" alt="invest-icon" />
                  </div>
                  <h5 className="pt-30 pb-25 tran3s title">Үнэт зүйлс</h5>
                  <p className="tran3s">
                    <ul>
                      <li>Хүн төвтэй байгууллага</li>
                      <li>Нээлттэй эх болон ил тод байдал</li>
                      <li>Өсөн дэвжих сэтгэлгээ</li>
                      <li>Төрөл бүрийн талуудын оролцоо</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="investors pb-150">
          <div className="container">
            <div className="theme-title-one text-center pb-30">
              <h3>Онцлох хөрөнгө оруулагчид</h3>
            </div>
            <p>
              Биднийг дэмжиж өдийг хүртэл хөрөнгө оруулсан 80 хүн дунд 22 настай
              залуугаас эхлээд Япон улсад суугаа Их аварга Мөнхбатын Даваажаргал
              (Hakuho Sho) зэрэг олон төрлийн хүмүүс амжилтыг хамтдаа бүтээлцэж
              байгаад баяртай байна.
            </p>
            <img
              className="pt-90"
              src="/images/investors.png"
              alt="investors"
            />
          </div>
        </section>

        <section className="invest-stakeholders pt-90 pb-70 pos-r">
          <div class="shape-wrapper">
            <img src="images/shape/21.svg" alt="" class="shape-one img-shape" />
            <img src="images/shape/23.svg" alt="" class="shape-two img-shape" />
            <img src="images/shape/9.svg" alt="" class="shape-five img-shape" />
            <img src="images/shape/25.svg" alt="" class="shape-six img-shape" />
          </div>
          <div className="theme-title-one text-center pb-30">
            <h3>Оролцогч талууд</h3>
          </div>
          <div className="container">
            <p>
              Бид бүхэн хөрөнгө оруулалтын чиглэлээр олон улсад хүлээн
              зөвшөөрөгдсөн мэргэжлийн байгууллагуудтай хамтран тэгш хүртээмжтэй
              хөрөнгө оруулалтын системийг бүрдүүлэн ажиллаж байна.
            </p>
            <div className="row op-partner-section-one pt-50 pb-30">
              <div className="col-md-7">
                <h5 className="pb-30 text-center">
                  Олон улс дахь байгууллагууд
                </h5>
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="img-box bx-g">
                      <a
                        href="https://www.fairmint.co/"
                        target="_blank"
                        rel="noopener noopener noreferer"
                      >
                        <span>Технологийн шийдэл</span>
                        <img src="images/logo/fairmint.png" alt="fairmint" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="img-box bx-g mt-30">
                      <a
                        href="https://finvisor.com/"
                        target="_blank"
                        rel="noopener noopener noreferer"
                      >
                        <span>Үнэлгээ болон санхүүгийн загвар</span>
                        <img src="images/logo/finvisor.png" alt="finvisor" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="img-box bx-g">
                      <a
                        href="https://www.crowell.com/"
                        target="_blank"
                        rel="noopener noopener noreferer"
                      >
                        <span>SEC мэдүүлэг болон эрх зүйн зохицуулалтууд</span>
                        <img src="images/logo/crowell.png" alt="crowell" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <h5 className="pb-30 text-center">Монгол дахь байгууллагууд</h5>
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-6 col-md-4 col-12">
                    <div className="img-box bx-g mt-30">
                      <a
                        href="https://www.tdbsecurities.mn/"
                        target="_blank"
                        rel="noopener noopener noreferer"
                      >
                        <span>Үнэлгээ болон санхүүгийн загвар</span>
                        <img src="images/logo/tdb.png" alt="tdb" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-4 col-12">
                    <div className="img-box bx-g">
                      <a
                        href="https://khanlex.mn/"
                        target="_blank"
                        rel="noopener noopener noreferer"
                      >
                        <span>SEC мэдүүлэг болон эрх зүйн зохицуулалтууд</span>
                        <img src="images/logo/khanlex.png" alt="khanlex" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="invest-enterprise pt-150 pb-70">
          <div className="container">
            <div className="theme-title-one text-center pb-30">
              <h3>Энтерпрайз харилцагчид</h3>
            </div>
            <p className="pb-50">
              Эрксис технологийн энтерпрайз хувилбарыг Монголд 13 компани үйл
              ажиллагаандаа ашиглаж “Хүн төв”-тэй байгууллага болох дижитал
              шилжилтэд амжилттай нэгдээд байна.{" "}
            </p>
            <div className="partner-slider ">
              <div className="item">
                <a
                  href="http://www.tavanbogd.mn/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/tavanbogd.png" alt="" />
                </a>
              </div>
              <div className="item">
                <a
                  href="https://www.golomtbank.com/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/golomt.png" alt="" />
                </a>
              </div>
              <div className="item">
                <a
                  href="https://www.capitronbank.mn/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/capitron.png" alt="" />
                </a>
              </div>
              <div className="item">
                <a
                  href="https://www.mobicom.mn/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/mobicom.png" alt="" />
                </a>
              </div>
              <div className="item">
                <a
                  href="https://xacleasing.mn/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/xac.png" alt="" />
                </a>
              </div>
              <div className="item">
                <a
                  href="http://www.apu.mn/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/apu.png" alt="" />
                </a>
              </div>
              <div className="item">
                <a
                  href="https://www.skytel.mn/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/skytel.png" alt="" />
                </a>
              </div>
              <div className="item">
                <a
                  href="https://pmimongolia.mn/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/pmi.png" alt="" />
                </a>
              </div>
              <div className="item">
                <a
                  href="http://www.priuscenter.mn/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/prius.png" alt="" />
                </a>
              </div>
              <div className="item">
                <a
                  href="https://www.bid-finance.mn/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/bid.png" alt="" />
                </a>
              </div>
              <div className="item">
                <a
                  href="https://mdskhanlex.com/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/khanlex.png" alt="" />
                </a>
              </div>
              <div className="item">
                <a
                  href="https://jurur.mn/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/jurur.png" alt="" />
                </a>
              </div>
              <div className="item">
                <a
                  href="https://igeree.mn/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/igeree.png" alt="" />
                </a>
              </div>
              <div className="item">
                <a
                  href="http://ulaanbaatarbuyan.mn/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/ubbuyn.png" alt="" />
                </a>
              </div>
              <div className="item">
                <a
                  href="https://www.apex.mn/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src="images/logo/apex.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="text-inner-banner-one pos-r">
          <div className="container">
            <h3 className="faq-page-title">Хөрөнгө оруулалтын боломжууд</h3>
          </div>
        </div>

        <section className="invest-chances sass-our-pricing">
          <div className="container">
            <div className="tab-pane fade show active">
              <div className="row no-gutters">
                <div className="col-lg-4">
                  <div className="single-pr-table free">
                    <div className="pr-header">
                      <h4 className="price">Тэгш боломж</h4>
                    </div>
                    <div className="pr-body">
                      <p>
                        erxes нь дэлхийн хаанаас ч, хэзээ ч аль ч түвшний
                        хөрөнгө оруулагчид IPO-ийн өмнө нь хөрөнгө оруулж ид
                        өсөлтийн үеийн үр ашгийг хүртэх боломжийг CSO аргыг
                        ашиглан бүрдүүллээ.
                      </p>
                      <br />
                      <b>Хөрөнгө оруулалтын доод хэмжээ: $600</b>
                    </div>
                    <div className="pr-footer">
                      <a
                        href="https://invest.erxes.io/"
                        className="upgrade-button"
                        target="_blank"
                        rel="noopener noreferer"
                      >
                        Хөрөнгө оруулах
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="single-pr-table regular">
                    <div className="pr-header">
                      <h4 className="price">Стратегийн хөрөнгө оруулагч</h4>
                    </div>
                    <div className="pr-body">
                      <p>
                        Компанийн эрхэм зорилго, алсын хараа, үйл ажиллагаатай
                        нэгдэн урт хугацааны хамтын ажиллагаа бүхий стратегийн
                        хөрөнгө оруулагч хувь хүн, байгууллага байх боломжтой.
                      </p>
                      <br />
                      <b>Хөрөнгө оруулалтын доод хэмжээ: $5000</b>
                    </div>
                    <div className="pr-footer">
                      <a data-erxes-modal="hmihCv" className="upgrade-button">
                        Бүртгүүлэх
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="single-pr-table plus">
                    <div className="pr-header">
                      <h4 className="price">Энтерпрайз хөрөнгө оруулагч</h4>
                    </div>
                    <div className="pr-body">
                      <p>
                        Бидний үндсэн бүтээгдэхүүн болох томоохон байгууллага,
                        групп компаниудад зориулсан багцыг үйл ажиллагаандаа
                        нэвтрүүлэн ашиглах хэлбэрээр урт хугацааны хамтын
                        ажиллагаа хөрөнгө оруулалтыг бүтээх боломжтой.
                      </p>
                    </div>
                    <div className="pr-footer">
                      <a data-erxes-modal="hmihCv" className="upgrade-button">
                        Борлуулалтын Багтай Холбогдох
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Invest;
