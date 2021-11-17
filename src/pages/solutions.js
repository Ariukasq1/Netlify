import React, { Component } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";

class Solutions extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: "team" };
  }

  renderCompanyFeatures() {
    return (
      <div className="our-feature-app p0 mt-70">
        <div className="row flex-center single-feature-box">
          <div className="col-lg-6 order-lg-last">
            <div className="text-wrapper">
              <img src="images/icon/icon30.svg" alt="" className="icon" />
              <h2 className="title">Багийн нэгдсэн инбокс</h2>
              <p>
                Сувгийн удирдлагад холбогдсон бүх интеграцуудаас ирсэн мессеж,
                коммент, имэйлүүд багийн инбокс цэсэнд огноогоороо эрэмбэлэгдэн
                харагдана. Админ фэйсбүүк, твиттер, имэйл, цахим хуудасны
                мессенжер зэрэг янз бүрийн сувгаар холбогдсон хэрэглэгчдэд нэг
                цонхноос хариулж, харилцан яриа бүрд тохирох нэршил /tag/
                үүсгэснээр дараа нь энэ 7 хоногт ирсэн шинэ захиалга, санал
                гомдол зэргийг tag-аар нь шүүж харж болно.
              </p>
            </div>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="feature-img-box left">
              <img
                src="images/shape/shape-45.svg"
                alt=""
                className="shape-one"
              />
              <img
                src="images/shape/shape-46.svg"
                alt=""
                className="shape-two"
              />
              <img
                src="images/shape/shape-47.svg"
                alt=""
                className="shape-three"
              />
              <img
                src="images/shape/shape-48.svg"
                alt=""
                className="shape-four"
              />
              <img
                src="images/shape/shape-49.svg"
                alt=""
                className="shape-five"
              />
              <div className="row">
                <img
                  className="support-feature js-tilt"
                  src="images/features/in1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row flex-center single-feature-box">
          <div className="col-lg-6">
            <div className="text-wrapper">
              <img src="images/icon/icon33.svg" alt="" className="icon" />
              <h2 className="title">Борлуулалт</h2>
              <p>
                B2B зах зээл буюу байгууллагын борлуулалтын шатуудаа
                тодорхойлон, ямар шатанд хэдэн байгууллага борлуулалт болох
                магадлалтайг тооцоолж, тухайн борлуулалтыг хийхэд хэдэн удаагийн
                уулзалт хийсэн тэмдэглэлээ уг борлуулалтын картанд бичсэнээр
                олон байгууллагатай харьцдаг ажилтнуудад мэдээллийн алдагдал
                үүсэхгүй байх давуу талтай. Борлуулалт тус бүрт нэг карт үүсгэн,
                түүнийгээ борлуулалтын шат бүрд зөөгөөд явах боломжтой.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="feature-img-box">
              <img
                src="images/shape/shape-45.svg"
                alt=""
                className="shape-one"
              />
              <img
                src="images/shape/shape-46.svg"
                alt=""
                className="shape-two"
              />
              <img
                src="images/shape/shape-47.svg"
                alt=""
                className="shape-three"
              />
              <img
                src="images/shape/shape-48.svg"
                alt=""
                className="shape-four"
              />
              <img
                src="images/shape/shape-49.svg"
                alt=""
                className="shape-five"
              />
              <div className="access-screen-holder">
                <div className="clearfix js-tilt">
                  <img
                    src="images/features/sales1.png"
                    alt=""
                    className="screen"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row flex-center single-feature-box">
          <div className="col-lg-6 order-lg-last">
            <div className="text-wrapper">
              <img src="images/icon/icon34.svg" alt="" className="icon" />
              <h2 className="title">Хэрэглэгчийн нэгдсэн сан</h2>
              <p>
                Хэрэглэгч танай байгууллагаас бүтээгдэхүүн худалдан авсан,
                фэйсбүүк, цахим хуудсаар харилцан яриа үүсгэсэн, аль нэг
                фэйсбүүк постны дор коммент бичсэн, урамшууллын имэйлд тань
                хариу илгээсэн зэрэг сувгийн удирдлагад холбогдсон интеграциудад
                ямар нэг хариу үйлдэл хийсэн болгон системд хадгалагдаж,
                харилцааны түүх нь бүртгэгдэнэ.
              </p>
            </div>
          </div>

          <div className="col-lg-6 order-lg-first">
            <div className="feature-img-box left">
              <img
                src="images/shape/shape-45.svg"
                alt=""
                className="shape-one"
              />
              <img
                src="images/shape/shape-46.svg"
                alt=""
                className="shape-two"
              />
              <img
                src="images/shape/shape-47.svg"
                alt=""
                className="shape-three"
              />
              <img
                src="images/shape/shape-48.svg"
                alt=""
                className="shape-four"
              />
              <img
                src="images/shape/shape-49.svg"
                alt=""
                className="shape-five"
              />
              <div className="screen-mockup js-tilt">
                <img
                  src="images/features/customer.png"
                  alt=""
                  className="mockup"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row flex-center single-feature-box mt-70">
          <div className="col-lg-6">
            <div className="text-wrapper">
              <img src="images/icon/icon33.svg" alt="" className="icon" />
              <h2 className="title">Бизнес мессенжер</h2>
              <p>
                Цахим хуудас бол танай байгууллагын албан ёсны нэрийн хуудас.
                Иймд бид энгийн нэг мессенжер биш, гар ажиллагаа багатай,
                хэрэглэгчийг өөрөө замчилсан шийдэлтэй боловсронгуй мессенжерийг
                санал болгож байна. Мессенжерт танай байгууллагын сошиал
                хаягуудын холбоос байхаас гадна хэн гэдэг ажилтантай холбогдож
                байгааг харуулах зургууд байрлана.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="feature-img-box">
              <img
                src="images/shape/shape-45.svg"
                alt=""
                className="shape-one"
              />
              <img
                src="images/shape/shape-46.svg"
                alt=""
                className="shape-two"
              />
              <img
                src="images/shape/shape-47.svg"
                alt=""
                className="shape-three"
              />
              <img
                src="images/shape/shape-48.svg"
                alt=""
                className="shape-four"
              />
              <img
                src="images/shape/shape-49.svg"
                alt=""
                className="shape-five"
              />
              <div className="access-screen-holder">
                <div className="clearfix js-tilt">
                  <img
                    src="images/features/messenger.png"
                    alt=""
                    className="screen"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  />
                  <img
                    src="images/features/messenger1.png"
                    alt=""
                    className="screen"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="250"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row flex-center single-feature-box">
          <div className="col-lg-6 order-lg-last">
            <div className="text-wrapper">
              <img src="images/icon/icon34.svg" alt="" className="icon" />
              <h2 className="title">Маркетингийн автоматжуулалт</h2>
              <p>
                Баярын мэндчилгээ илгээх, ажиллах цагийн хуваарь салбарын
                мэдээллийг имэйлээр илгээх нь бүх хэрэглэгчдэд ашигтай. Гэхдээ
                та илүү нарийвчлалтай буюу маркетинг, борлуулалтын бодлогын
                хүрээнд үнэнч хэрэглэгчдээ илүү халамжлах зорилгоор зөвхөн
                тэдэнд хандах сонирхолтой бол өмнө дурдсан сегментүүдээ ашиглах
                хэрэгтэй.
              </p>
            </div>
          </div>

          <div className="col-lg-6 order-lg-first">
            <div className="feature-img-box left">
              <img
                src="images/shape/shape-45.svg"
                alt=""
                className="shape-one"
              />
              <img
                src="images/shape/shape-46.svg"
                alt=""
                className="shape-two"
              />
              <img
                src="images/shape/shape-47.svg"
                alt=""
                className="shape-three"
              />
              <img
                src="images/shape/shape-48.svg"
                alt=""
                className="shape-four"
              />
              <img
                src="images/shape/shape-49.svg"
                alt=""
                className="shape-five"
              />
              <div className="screen-mockup js-tilt">
                <img
                  src="images/features/mail.png"
                  alt=""
                  className="mockup"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row flex-center single-feature-box">
          <div className="col-lg-6">
            <div className="text-wrapper">
              <img src="images/icon/icon33.svg" alt="" className="icon" />
              <h2 className="title">Поп-ап форм</h2>
              <p>
                Захиалгын хуудас, шаардлагын хуудас, холбоо барих цонх гэх мэт
                асуулт хариулт бүхий форм үүсгэх боломж бас бий. Банкны салбарт
                картын захиалгаа форм бөглүүлж авах, худалдааны салбарт
                бүтээгдэхүүнийхээ захиалгыг цахим хуудсаараа авдаг байгууллагууд
                ч олширсон үед танай байгууллага ч мөн адил онлайн борлуулалтаа
                уг цэсийг ашиглан дэмжээрэй.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="feature-img-box">
              <img
                src="images/shape/shape-45.svg"
                alt=""
                className="shape-one"
              />
              <img
                src="images/shape/shape-46.svg"
                alt=""
                className="shape-two"
              />
              <img
                src="images/shape/shape-47.svg"
                alt=""
                className="shape-three"
              />
              <img
                src="images/shape/shape-48.svg"
                alt=""
                className="shape-four"
              />
              <img
                src="images/shape/shape-49.svg"
                alt=""
                className="shape-five"
              />
              <div className="access-screen-holder">
                <div className="clearfix js-tilt">
                  <img
                    src="images/features/popup.png"
                    alt=""
                    className="screen"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row flex-center single-feature-box">
          <div className="col-lg-6 order-lg-last">
            <div className="text-wrapper">
              <img src="images/icon/icon30.svg" alt="" className="icon" />
              <h2 className="title">Мэдлэгийн сан</h2>
              <p>
                Байгууллагууд цахим хуудсандаа хэрэглэгчид зориулсан түгээмэл
                асуулт, хариултын буланг үүсгэж, давтагддаг асуултууддаа
                хариулсан байдаг. Хэрэглэгчид ч өөрт байгаа асуултаа
                байгууллагатай шууд холбогдож асуухаасаа илүү энд байгаа
                мэдээллүүдтэй танилцдаг. Хэрэв танай байгууллага олон цахим
                хуудас ажлуулдаг бол танд олон асуулт хариулт хариуцах ажил
                үүснэ гэсэн үг.
              </p>
            </div>
          </div>

          <div className="col-lg-6 order-lg-first">
            <div className="feature-img-box left">
              <img
                src="images/shape/shape-45.svg"
                alt=""
                className="shape-one"
              />
              <img
                src="images/shape/shape-46.svg"
                alt=""
                className="shape-two"
              />
              <img
                src="images/shape/shape-47.svg"
                alt=""
                className="shape-three"
              />
              <img
                src="images/shape/shape-48.svg"
                alt=""
                className="shape-four"
              />
              <img
                src="images/shape/shape-49.svg"
                alt=""
                className="shape-five"
              />
              <div className="screen-mockup js-tilt">
                <img
                  src="images/features/kb.png"
                  alt=""
                  className="mockup"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                />
                <img
                  src="images/features/kb2.png"
                  alt=""
                  className="screen-one"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="150"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row flex-center single-feature-box">
          <div className="col-lg-6">
            <div className="text-wrapper">
              <img src="images/icon/icon33.svg" alt="" className="icon" />
              <h2 className="title">Сувгийн удирдлага</h2>
              <p>
                Та байгууллагынхаа ашигладаг бүхий л интеграци буюу сошиал
                хаягуудаа эрксис-т холбоно. Тухайн интеграцуудыг брэндэд
                хамруулна. Танай байгууллагын аль нэг бүтээгдэхүүн үйлчилгээ
                тань нэг брэнд гэж бодъё. Харин тус брэндэд цахим хуудас,
                фэйсбүүк, твиттер зэрэг 3 интеграци байдаг бол түүнийг нэгтгэж
                брэнд дотор нь хамааруулна гэсэн үг.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="feature-img-box">
              <img
                src="images/shape/shape-45.svg"
                alt=""
                className="shape-one"
              />
              <img
                src="images/shape/shape-46.svg"
                alt=""
                className="shape-two"
              />
              <img
                src="images/shape/shape-47.svg"
                alt=""
                className="shape-three"
              />
              <img
                src="images/shape/shape-48.svg"
                alt=""
                className="shape-four"
              />
              <img
                src="images/shape/shape-49.svg"
                alt=""
                className="shape-five"
              />
              <div className="access-screen-holder">
                <div className="clearfix js-tilt">
                  <img
                    src="images/features/appstore.png"
                    alt=""
                    className="screen"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderTabs() {
    if (this.state.activeTab === "team") {
      return (
        <div className="flex-center mt-30">
          <Card
            linkTo={"solutions-detail?slug=hr"}
            text={"Хүний Нөөц"}
            content={
              "Байгууллагынхаа хүн бүрд эерэг туршлагыг бий болгон хөдөлмөрийн бүтээмжийг нь нэмэгдүүлж хамт олныхоо уур амьсгал, эерэг соёлыг бүтээ"
            }
            iconsrc={"images/card/meeting.png"}
          />
          <Card
            linkTo={"solutions-detail?slug=marketing"}
            text={"Маркетинг"}
            content={
              "Маркетингийн бүтээлч санаанаас эхлээд үйл ажиллагааны үр дүнг хэмжиж сайжруулах бүхий л процессыг технологи ашиглан хөнгөвчилж хэрэглэгчдийнхээ датанд үндэслэн оновчтой шийдвэр гаргахад erxes танд туслах болно"
            }
            iconsrc={"images/card/presentation.png"}
          />
          <Card
            linkTo={"solutions/sales"}
            text={"Борлуулалт"}
            content={
              "Өөрсдийн онцлогтоо тохируулан хүссэн хэлбэрээр үйл явцаа төлөвлөж, удирдах боломжийг олгож, харилцагчидтайгаа холбогдох сувгуудыг нэгтгэхийн зэрэгцээ цахим захиалгын системийг цогцоор бүрдүүллээ"
            }
            iconsrc={"images/card/money.png"}
          />
          <Card
            linkTo={"solutions/management"}
            text={"Менежмент"}
            content={
              "Менежментийн технологийг ашиглан байгууллагынхаа уялдаа холбоог нэмэгдүүлж бүтээмжээ дээшүүлэх боломж"
            }
            iconsrc={"images/card/suitcase.png"}
          />
          <Card
            linkTo={"solutions/service"}
            text={"Хэрэглэгчийн үйлчилгээ"}
            content={
              "Хэрэглэгчтэйгээ илүү ойр байж хүсэл сонирхол, асуудлыг нь илүү хялбараар мэдэж шийдэх боломжтой"
            }
            iconsrc={"images/card/support.png"}
          />
        </div>
      );
    }

    if (this.state.activeTab === "property") {
      return (
        <div className="flex-center mt-30">
          <Card
            linkTo={"solutions/property"}
            text={"Үл хөдлөх хөрөнгө"}
            content={
              "Захиалагч, хэрэглэгчдэд илүү хялбараар байр, үл хөдлөх хөрөнгийн талаарх мэдээлэл авах, захиалах цагийг хэмнэж хүссэн мэдээллээ хаанаас ч, хэзээ ч авах боломжтой болсон нь энэхүү технологийн шийдлийн онцлог юм"
            }
            iconsrc={"images/card/company.png"}
          />
          <Card
            linkTo={""}
            text={"Банк санхүү"}
            content={"Тун удахгүй"}
            iconsrc={"images/card/bank.png"}
          />
          <Card
            linkTo={""}
            text={"Технологи"}
            content={"Тун удахгүй"}
            iconsrc={"images/card/configuration.png"}
          />
          <Card
            linkTo={""}
            text={"Жижиглэн болон бөөний худалдаа"}
            content={"Тун удахгүй"}
            iconsrc={"images/card/store.png"}
          />
        </div>
      );
    }
  }

  changeTab(name) {
    document
      .getElementById(`li-${this.state.activeTab}`)
      .classList.remove("is-checked");
    document.getElementById(`li-${name}`).classList.add("is-checked");

    this.setState({ activeTab: name });
  }

  render() {
    return (
      <Layout>
        <div className="blog-filter-title">
          <h2 className="main-title">Шийдэлүүд</h2>
        </div>
        <div classList="solution-tab">
          <div className="blog-filer solution-tab">
            <ul className="isotop-menu-wrapper blog-filter-nav">
              <li
                className="is-checked"
                id="li-team"
                onClick={() => this.changeTab("team")}
              >
                <span>Байгууллагын нэгж, хэлтэс</span>
              </li>
              <li id="li-property" onClick={() => this.changeTab("property")}>
                <span>Байгууллагын салбар</span>
              </li>
            </ul>
          </div>
        </div>

        {this.renderTabs()}
        {this.renderCompanyFeatures()}
      </Layout>
    );
  }
}

export default Solutions;
