import React, { Component } from "react";
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";
import Card from "../components/Card"
class Solutions extends Component {
    render() {
        const feature1 = [
            "Таны одоогийн цахим хуудас дээр зөвхөн танай үл хөдлөх хөрөнгийн хотхонд тохирсон тохиргоог хийх (1 удаа)",
            "Эрксис системийг 1 жил ашиглах эрх",
            "Маркетингийн автоматжуулалт тохиргоо",
            "Сургалт",
            "24/7 Техник Тусламж"
        ];
        const feature2 = [
            "Цор ганц та бүхний онцлогт тохирсон цахим хуудас",
            "Эрксис системийг 1 жил ашиглах эрх"   
        ];

        const feature3 = [
            "Цор ганц та бүхний онцлогт тохирсон цахим хуудас",
           " Хэрэглэгч нарийгаа хувь лизингд хамруулж эргэн төлөлтийг хянах боломж",
            "Калл-центэр боломж",
            "Санхүүгийн програм холбох"
            
        ];


        return (
            <Layout forms={[
              {
                brand_id: "m7DmKt",
                form_id: "4uBFnr",
              },
            ]}>
                <div className="solid-inner-banner rogan-hero-section invest">
                <h2 className="page-title">Захиалгын явцаа автоматжуулж <br /> ажлаа 30%-аар хурдасга</h2>  
                <p>Үл хөдлөх хөрөнгийн талаарх мэдээлэл авах, боломжит бүтээгдэхүүнүүдээс сонгох, захиалга өгөх зэрэг механик ажлуудыг автоматжуулан харилцагч бүрээ алдалгүй хүрч үйлчлэх боломж нээгдлээ.</p>
                        <a
                    href="#solution-demo"
                    className="theme-btn solid-button-one"
                    data-wow-delay="1.5s"
                    target="_self"
                    rel="noreferrer noopener"
                >
                    Demo
                </a>
                <a
                    href="#solution-pricing"
                    className="theme-btn line-button-one"
                    data-wow-delay="1.5s"
                    target="_self"
                    rel="noreferrer noopener"
                >
                     Үнийн санал
                </a>
                </div>
                <div className="container">
                    <div className="row mt-30 ">
                    <div className="theme-title-one text-center ">
                    <div className="upper-title">Боломж бүрийг борлуулалт болго</div>
                    <p>
                    erxes компани Үл хөдлөх хөрөнгө захиалах болон борлуулахтай холбоотой үйлдлийг автоматжуулж, илүү хялбар болгох технологийн шийдлийг нэвтрүүлснээр Монголын Үл хөдлөх салбарын дижитал хувьсгал эхэллээ! Энэхүү шийдэл нь бүтээмжийг хэд дахин нэмэгдүүлж борлуулалтыг өсгөх боломжтойг салбарын мэргэжилтнүүд дүгнэж байна. Энэ нь зөвхөн байгууллага гэлтгүй захиалагч, хэрэглэгчдэд илүү хялбараар байр, үл хөдлөх хөрөнгийн талаарх мэдээлэл авах, захиалах цагийг хэмнэж хүссэн мэдээллээ хаанаас ч, хэзээ ч авах боломжтой болсон нь энэхүү технологийн шийдлийн онцлог юм.

                    </p>
                </div>
                    </div>
                
                </div>
                <div className="our-feature-app p0 mt-70">
                <div className="row single-feature-box">
              <div className="col-lg-6 order-lg-last">
                <div className="text-wrapper">
                  <img src="images/icon/icon30.svg" alt="" className="icon" />
                  <h2 className="title">Хэрэглэгчдэд таатай захиалгын систем</h2>
                  <p>Харилцагчдад хамгийн ойлгомжтой хэлбэрээр шаардлагатай бүхий л мэдээллийг дижиталаар хүргэж хэрэглэгч болох замналыг товчлох, цаг хугацааг хэмнэх боломж бүрдлээ. </p>
                  <ul>
                  <li>Захиалагч биечлэн очих, ажилтнаас гар утсаар мэдээлэл авах шаардлагагүй бодит орчныг хүссэн газраасаа хүссэн үедээ захиална</li>
                  <li>Захиалагч өөрийн хүссэн байраа чөлөөтэй сонгох боломжтой</li>
                  <li>Захиалга өгөх үед борлогдсон эсвэл түрээслэгдсэн эсэх нь автоматаар харагдах тул захиалагч цагаа хэмнэх боломжтой</li>
                  <li>Захиалагчдад тохирсон саналыг харуулах боломжтой</li>
                  <li>Захиалагчдад өгөх мэдээллээ байгууллага хүссэн хэлбэрээр бүрдүүлэх боломжтой</li>
                  </ul>
                </div>
                </div>

              <div className="col-lg-6 order-lg-first">
                  <div className="feature-img-box left">
                    <img src="images/shape/shape-45.svg" alt="" className="shape-one" />
                    <img src="images/shape/shape-46.svg" alt="" className="shape-two" />
                    <img src="images/shape/shape-47.svg" alt="" className="shape-three" />
                    <img src="images/shape/shape-48.svg" alt="" className="shape-four" />
                    <img src="images/shape/shape-49.svg" alt="" className="shape-five" />
                    <div className="row" style={{alignItems:"center"}}>
                      
                    </div>
                  </div>
                </div>
            </div>

            <div className="row single-feature-box">
              <div className="col-lg-6">
                <div className="text-wrapper">
                  <img src="images/icon/icon33.svg" alt="" className="icon" />
                  <h2 className="title">Харицагч бүрдээ хүрч үйлчлэх боломж</h2>
                  <p>Нийт захиалагчдаа сегментчлэхээс эхлээд захиалагч бүрийн мэдээлэлд үндэслэн онцгой нөхцлүүдийг санал болгож борлуулалтаа нэмэгдүүлж боломжоо ашиглаарай</p>
                  <ul>
                      <li>Хэрэглэгчээ онцгой нөхцлүүдээр сегментчлэх боломжтой</li>
                      <li>Өөрсдийн борлуулалтад таатай захиалагч нарыг ялган харах боломжтой</li>
                      <li>
                      Тухайн захиалагчийн хүсэл хэрэгцээ болон ямар үе шатанд явж байгааг мэдэх боломжтой
                      </li>
                      <li>
                      Сонирхсон сэжим бүрийг бүртгэж тэдний хүсэл, шаардлагыг олж илрүүлэх, цаашид байнга холбоотой байж шинэ мэдээллээ түгээх боломж
                      </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature-img-box">
                  <img src="images/shape/shape-45.svg" alt="" className="shape-one" />
                  <img src="images/shape/shape-46.svg" alt="" className="shape-two" />
                  <img src="images/shape/shape-47.svg" alt="" className="shape-three" />
                  <img src="images/shape/shape-48.svg" alt="" className="shape-four" />
                  <img src="images/shape/shape-49.svg" alt="" className="shape-five" />
                  <div className="access-screen-holder">
                    <div className="clearfix js-tilt">
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row single-feature-box">
              <div className="col-lg-6 order-lg-last">
                <div className="text-wrapper">
                  <img src="images/icon/icon34.svg" alt="" className="icon" />
                  <h2 className="title">Сэжим бүрийг борлуулалт болгох боломж </h2>
                  <p>Захиалагчийн хүсэж буй мэдээллийг Form хэлбэрээр авч хэрэглэгчийнхээ хэрэгцээ шаардлагыг урьдчилан мэдэж тохирсон санал тавьж борлуулалтаа нэмэгдүүлэх таатай боломж бүрдлээ. </p>
                  <ul>
                      <li>Байгууллагын зүгээс захиалагчаас мэдэх шаардлагатай бүхий мэдээллээ бүрдүүлж нэгтгэх боломжтой. /Үнийн санал, байршил, хувийн мэдээлэл гэх мэт/</li>
                      <li>Хэрэглэгчдээ тохирсон саналыг загвар болгон автоматаар илгээх бүрэн боломжтой</li>
                      <li>
                      Түрүүлж мэдээд эхэлж залга
                      </li>
                      <li>Бүх захиалагч нарын мэдээллийг нэгдсэн байдлаар хянаж удирдах боломжтой</li>
                      <li>Захиалгын бүхий л түвшинг нарийн тодорхойлж санал болгох боломжтой</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 order-lg-first">
                <div className="feature-img-box left">
                  <img src="images/shape/shape-45.svg" alt="" className="shape-one" />
                  <img src="images/shape/shape-46.svg" alt="" className="shape-two" />
                  <img src="images/shape/shape-47.svg" alt="" className="shape-three" />
                  <img src="images/shape/shape-48.svg" alt="" className="shape-four" />
                  <img src="images/shape/shape-49.svg" alt="" className="shape-five" />
                  <div className="screen-mockup js-tilt">
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="row single-feature-box">
              <div className="col-lg-6">
                <div className="text-wrapper">
                  <img src="images/icon/icon33.svg" alt="" className="icon" />
                  <h2 className="title">Механик үйлдлүүдээ автоматжуулж бүтээмжтэй ажиллах боломж</h2>
                  <p>Захиалагчдаа мэдээлэл хүргэхээс эхлээд гэрээ байгуулах бүхий л процессыг автоматжуулж, хэрэглэгч өөрийн хүссэн нөхцлөө өөрөө бүрдүүлэх эерэг туршлагыг бий болгон борлуулалтын таатай нөхцлийг бүрдүүлээрэй.</p>
                  <ul>
                      <li>Захиалагчдад хүргэх шаардлагатай мэдээллийг автоматжуулах</li>
                      <li>Захиалгын санал болон гэрээг автоматжуулах</li>
                      <li>Захиалагчийн мэдээлэлд тохирсон саналыг автоматжуулах</li>
                      <li>Захиалга хийгдсэн эсэхээс хамаарч процессыг автоматжуулах</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature-img-box">
                  <img src="images/shape/shape-45.svg" alt="" className="shape-one" />
                  <img src="images/shape/shape-46.svg" alt="" className="shape-two" />
                  <img src="images/shape/shape-47.svg" alt="" className="shape-three" />
                  <img src="images/shape/shape-48.svg" alt="" className="shape-four" />
                  <img src="images/shape/shape-49.svg" alt="" className="shape-five" />
                  <div className="access-screen-holder">
                    <div className="clearfix js-tilt">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
                </div>

                <div className="element-section mb-150">
                    <div className="agn-our-pricing sass-our-pricing p0">
                        <div className="section-shape-one">
                            <img src="images/shape/shape-18.svg" alt="" />
                        </div>
                        <img src="images/shape/shape-55.svg" alt="" className="shape-one" />
                        <img src="images/shape/shape-62.svg" alt="" className="shape-two" />
                        <img
                            src="images/shape/shape-24.svg"
                            alt=""
                            className="section-shape-two"
                            data-aos="fade-right"
                            data-aos-duration="3000"
                        />
                        <img
                            src="images/shape/shape-25.svg"
                            alt=""
                            className="section-shape-three"
                        />
                        <div className="section-shape-four"></div>
                        <img
                            src="images/shape/shape-1.svg"
                            alt=""
                            className="shape-three"
                        />
                        <img
                            src="images/shape/shape-60.svg"
                            alt=""
                            className="shape-four"
                        />
                        <img
                            src="images/shape/shape-57.svg"
                            alt=""
                            className="shape-five"
                        />
                        <img
                            src="images/shape/shape-26.svg"
                            alt=""
                            className="section-shape-five"
                        />
                        <img
                            src="images/shape/shape-27.svg"
                            alt=""
                            className="section-shape-six"
                            data-aos="fade-left"
                            data-aos-duration="3000"
                        />

                        <div className="element-section mb-150">
                                <div className="container">
                                <div className="theme-title-one text-center">
                                        <h2 id="solution-demo" className="main-title mt-70">
                                           Demo
                                        </h2>
                                    </div>

                                    <div className="theme-title-one text-center">
                                        <h2 id="solution-pricing" className="main-title mt-70">
                                           Үнийн санал
                                        </h2>
                                    </div>

                                        <div className="items">
                                            <div className="col-lg-4 p10 ">
                                                <Card
                                                color="#00e1ce"
                                                pname="Энгийн багц"
                                                price="₮ 2,999,000"
                                                title="Хороолол"
                                                package={"Нэг удаа"}
                                                feature={feature1}
                                            /></div>
                                            <div className="col-lg-4 p10 ">
                                            <Card
                                                color="#ffcd63"
                                                pname="Мэргэжлийн багц"
                                                title="Хотхон"
                                                price="₮ 8,999,000"
                                                package={"Нэг удаа"}
                                                feature={feature2}
                                            />
                                            </div>

                                            <div className="col-lg-4 p10 ">
                                            <Card
                                                color="#9f4aff"
                                                pname="Энтерпрайз Багц"
                                                title="Цогцолбор хотхон"
                                                add={"Үнийн санал асуух"}
                                                feature={feature3}
                                            />
                                            </div>
                                            
                                        </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Solutions;
