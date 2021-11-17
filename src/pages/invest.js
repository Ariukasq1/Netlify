import React, { Component } from "react";
import Layout from "../components/Layout";

class Invest extends Component {
  componentDidMount() {
    window.fairmintSettings = {
      org: "erxes", // This is your organization id
      stage: "production", // Environment Stage value. possible values 'production', 'staging', 'development'.
      width: 123, // Invest button width in pixel. default: 132
      height: 44, // Invest button height in pixel. default: 48
      mobileWidth: 36, // Invest button width in pixel for mobile. default: 36
      mobileHeight: 36, // Invest button height in pixel for mobile. default: 36
      amountInvested: true, // Show Amount Invested field. default: false
      companyValuation: true, // Show Company Valuation field. default: false
      performance: false, // Show Performance field. default: false
    };

    window.addEventListener(
      "load",
      () => {
        const e = document.createElement("script");
        (e.type = "text/javascript"),
          (e.async = !0),
          (e.src = "https://static.fairmint.co/widget/fairmint.latest.js");
        const t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t);
      },
      !1
    );

    setTimeout(() => {
      const x = document.getElementsByClassName("fairmint-widget-frame");
      x[0].classList.add("fairmint-widget-frame-visible");

      const iFrame = x[0].getElementsByTagName("iframe")[0];
      iFrame.contentDocument.body.innerHTML =
        iFrame.contentDocument.body.innerHTML +
        "<style>body { overflow: hidden; } .fairmint-cafe-widget-card-footer {display: none; }</style>";
    }, 5000);
  }

  render() {
    return (
      <Layout>
        <div className="solid-inner-banner rogan-hero-section invest">
          <h2 className="page-title">Хөрөнгө оруулах</h2>
          <a
            href="https://invest.erxes.io/"
            className="theme-btn solid-button-one wow fadeInLeft animated"
            data-wow-delay="1.5s"
            target="_blank"
            rel="noreferrer noopener"
          >
            Хөрөнгө оруулах
          </a>
          <a
            href="https://bit.ly/2K3fHaF"
            className="theme-btn line-button-one wow fadeInRight animated"
            data-wow-delay="1.5s"
            target="_blank"
            rel="noreferrer noopener"
          >
            Зааварчилгаатай танилцах
          </a>
        </div>

        <div className="agn-about-us invest">
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
            <div className="theme-title-one text-center">
              <div className="upper-title">Цахиурт гялалзъя</div>
              <h2 className="main-title">
                Маркетинг технологио ч, хувьцаагаа ч <br /> бүгдэд тэгш
                хүртээмжтэй болгоё
              </h2>
            </div>

            <div className="row">
              <div className="col-lg-6 invest-content order-lg-last">
                <div className="text-wrapper">
                  <p>
                    Эрксис технологийн компани нь маркетингийн технологийг бүхий
                    л бизнесүүдэд хүртээмжтэй болгох, эх орныхоо эдийн засгийн
                    хөгжлийг тогтворжуулах, улмаар дэлхийн тавцанд Монгол
                    инженерүүдийн бүтээлийг аваачихыг зорьсоор ирсэн билээ.
                  </p>
                  <br />
                  <p>
                    Нээлттэй, ил тод, хүртээмжтэй байдлыг бид эрхэм үнэт зүйлээ
                    болгодог учраас хөрөнгө оруулалтаа ч гэсэн бүгдэд нээлттэй
                    болгон Зогсолгүй Хөрөнгө Оруулалт буюу Continuous Securities
                    Offering (CSO) хувьцаагаа арилжаалж байна. Ингэснээр
                    өнөөдрийг хүртэл бидэнтэй хамтран ажилласан хамтрагчид,
                    хэрэглэгчид, дэмжлэг үзүүлсэн хөрөнгө оруулагчид болон бүхий
                    л оролцогч талуудад компанийн ирээдүйн амжилтыг хуваалцах
                    боломжийг олгож байна.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="img-box">
                  <div className="fairmint-invest-widget" />
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://invest.erxes.io/"
            className="learn-more theme-button-two aos-init"
            data-aos="fade-left"
            target="_blank"
            rel="noopener noreferer"
          >
            Хөрөнгө оруулах
            <i className="fa fa-angle-right icon-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="agn-what-we-do pt-250 pb-70 invest">
          <img src="images/shape/shape-56.svg" alt="" className="shape-two" />
          <div className="container">
            <div className="theme-title-one text-center">
              <h3>CSO Хувьцааны Тухай</h3>
            </div>

            <p>
              Энэхүү аргачлал нь хөрөнгө босгох үйл явцад хийж буй эрс шинэчлэл
              ба хөрөнгө оруулагчид, бизнес эрхлэгчид болон бүхий л талуудад
              илүү ашигтайгаараа давуу талтай. CSO нь дараах шинэлэг боломжуудыг
              санал болгодог:
            </p>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-block">
                  <div className="icon">
                    <img src="images/shape/shape-2.svg" alt="" className="bg" />
                    <img
                      src="images/icon/icon1.svg"
                      alt=""
                      className="shape aos-init aos-animate"
                      data-aos="zoom-in-down"
                    />
                  </div>
                  <h5 className="title">Оролцогч талууд</h5>
                  <p>Хэн ч байсан бүх оролцогч талуудад илүү нээлттэй</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-block">
                  <div className="icon">
                    <img src="images/shape/shape-2.svg" alt="" className="bg" />
                    <img
                      src="images/icon/icon2.svg"
                      alt=""
                      className="shape aos-init aos-animate"
                      data-aos="zoom-in-down"
                    />
                  </div>
                  <h5 className="title">Хөрөнгө оруулагчид</h5>
                  <p>Хөрөнгө оруулагчдын хувьд хөрвөх чадвар илүү ихтэй</p>
                </div>
              </div>

              <div className="col-lg-4 co-12 d-md-none d-lg-block">
                <div className="single-block">
                  <div className="icon">
                    <img src="images/shape/shape-2.svg" alt="" className="bg" />
                    <img
                      src="images/icon/icon3.svg"
                      alt=""
                      className="shape aos-init aos-animate"
                      data-aos="zoom-in-down"
                    />
                  </div>
                  <h5 className="title">Үүсгэн байгуулагчид</h5>
                  <p>
                    Үүсгэн байгуулагчдад үнэ цэнэ, хяналтаа хадгалж үлдэх илүү
                    боломжтой
                  </p>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <b>Оролцогч талууд</b> — Хөрөнгө оруулах боломжит хэмжээ $600
                USD доллараас эхлэх учир цөөнх бус харин хүн бүхэн худалдан авч,
                компанийн санхүүгийн амжилтаас хуваалцах боломжийг олгодог.
              </li>
              <li>
                <b>Хөрөнгө оруулагчид</b> — Ердөө 1 жилийн дараа хувьцааг
                хоёрдогч зах зээл дээр борлуулах боломжтой учир хөрөнгө
                оруулалтын өгөөжөө түргэн хүртэх болно. Ихэнх технологийн
                гарааны бизнесүүд 7-оос олон Жилийн дараа IPO зарлах үед л
                хувьцаагаа арилжаалах боломж үүсдэг.
              </li>
              <li>
                <b>Үүсгэн байгуулагчид</b> — Компанид оруулсан үнэ цэнэ, эрх
                мэдлээ алдалгүйгээр санхүүжилт босгох боломжийг олгодог бөгөөд
                урт хугацаанд өөрсдийн алсын хараагаар компаниа удирдах боломж
                олгодог.
              </li>
            </ul>
          </div>
          <div className="demo-container-900 invest mt-70">
            <h3>Хөрөнгө оруулалтаар компанийн үр ашгийг хэн хүртдэг вэ?</h3>
            <div className="row">
              <img src="/images/chart.png" alt="chart" />
            </div>
          </div>
        </div>
        <div className="sass-contact-banner invest">
          <div className="u-shape">U</div>
          <div className="d-shape">D</div>
          <div className="container">
            <h3>Хувьцааны хувийг хүртээмжтэй болгоё</h3>
            <p>
              Сүүлийн 10 жилд бизнесийн бүхий л салбарын дотоод үйл ажиллагаа
              болон тэдний харилцагчтай харилцах үйл явцад технологи хүчтэй
              түрэн орж, үнэмлэхүй их дэвшлийг авч ирсэн. Үүнд интернет, ухаалаг
              утас, гар утасны аппликейшн, онлайн програмууд болон блокчейн
              багтдаг. Энэхүү жагсаалт үргэлжилсээр гагцхүү өдөр бүр цоо шинэ
              бизнесийг төрүүлсээр байна. Үүнд шууд зээл буюу зээлдэгч хүн, зээл
              авахыг хүссэн хүнийг холбосон үйлчилгээний жишээ болон Lending
              Club ба Prosper, зах зээлээ хуваалцах моделийн тод жишээ Airbnb
              болон Lyft-ийг дурдаж болно (sharing economy).{" "}
            </p>
            <p>
              Аж үйлдвэрийн хувьсгалаас хойш эдгээр бизнесийн загварууд
              хөгжихийн хэрээр эдийн засгийг дэмжих хөрөнгө оруулалтын
              хэрэгслүүд хангалтгүй болсоор байгааг олны танил томоохон хөрөнгө
              оруулагчид онцолсоор ирсэн. Эдгээр хэрэгслүүд нь олон зууны өсөлт
              болон инновацийг жолоодоход эргэлзээгүй түлхэц болсон. Гэвч энэ нь
              олон нийтээс илүү давуу эрх эдэлдэг цөөн тооны чинээлэг хувьцаа
              эзэмшигчдийн ашиг сонирхолд үйлчлэх хандлагатай байдаг.
            </p>
            <p>
              Компаниуд өөрсдийн харилцагч, хамтрагчид гээд бүхий л оролцогч
              талуудаа сэдэлжүүлэх, урамшуулах үүднээс ирээдүйн санхүүгийн
              амжилтаасаа хуваалцахыг хүсдэг байлаа. Гэвч энэ боломж нь өдийг
              хүртэл байгаагүй. Зарим компаниуд нээлттэй хувьцаа (IPO) зарлахаас
              өмнө ажиллагсдадаа урт хугацаанд авч үлдэхийн тулд хувьцаагаа
              дотооддоо зардаг. Гэвч хөрөнгө зохицуулалтын талаарх хууль
              тогтоомжийн дагуу энэхүү боломж нь гадны олон оролцогч талуудад
              хаалттай байдаг.
            </p>
            <p>
              Ингээд тухайн компани IPO зарлах үед хөгжлийн өндөр өсөлтийг анх
              бий болгоход нь тусалсан анхны хамтрагч, оролцогч талуудад энэ
              боломжийг хүртээж чаддаггүй. Гэтэл карьераа өөрчлөх, ямар нэгэн
              байдлаар хөрөнгө оруулалт хийх (машин, орон сууц гэх мэт) хүртэл
              хэмжээнд тухайн компаниа дэмжсэн эдгээр оролцогч талуудын хувьд
              IPO нь хэтэрхий ахадсан зүйл болдог.
            </p>
            <p>
              Түүнээс гадна уламжлалт IPO нь өөрөө оролцогч талуудын хэрээс улам
              хэтэрсээр байна. Компаниуд IPO зарлахаа илүү удаан хугацаагаар
              хүлээх болсон бөгөөд зарим нь хувийн хэвшлээр үлдэх болсон нь
              захиргаа болон зохицуулалтын дарамт нэмэгдэж байгаатай холбоотой.
              Бидний мэдэх Цахиурын Хөндийн эх оронд өнөөдрийн байдлаар нийт
              3671 хувьцаат компани байгаа нь 1996 оны 7322 компанитай
              харьцуулахад бараг тэн хагасаар цөөрсөн байна.
            </p>
            <div className="mt-30 pb-70">
              <b>
                <span>Уламжлалт аргаар</span> хөрөнгө оруулалт хийх боломжит
                хугацаа
              </b>
              <img
                className="mt-30"
                src="https://erxes.io/static/images/graph.svg"
                alt="chart"
              />
            </div>
            <b>
              <span>CSO аргаар</span> хөрөнгө оруулалт хийх боломжит хугацаа
            </b>
            <img
              className="mt-30"
              src="https://erxes.io/static/images/graph1.svg"
              alt="chart"
            />
            <p className="mt-30">
              Хэрвээ тухайн компани олон нийтэд хувьцаагаа гаргаагүй, эсвэл
              өөрийгөө худалдаагүй, эсвэл ногдол ашиг тараагаагүй л бол
              санхүүгийн үнэ цэнэ нь зөвхөн цөөн хэдэн хүмүүсийн гарт л үлддэг.
              Иймд баялгийг бүтээхэд гар бие оролцсон оролцогч талууд өөрсдийн
              зохих хувийг хүртэхгүй байна. Харин бидний санал болгож буй CSO
              энэ асуудлыг шийдэж, олон нийтэд хувьцааны хувийг хүртээмжтэй
              болгохыг зорьж байна.
            </p>
            <p className="quote mb-20">Баялгыг хамтдаа бүтээе!</p>
            <div className="rogan-hero-section invest">
              <iframe
                src="https://slides.com/mendorshikh/cso-mn-guideline/embed"
                width="800"
                height="450"
                scrolling="no"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
        <div className="text-inner-banner-one pos-r">
          <div className="shape-wrapper">
            <svg className="img-shape shape-one">
              <path
                fillRule="evenodd"
                fill="rgb(255, 223, 204)"
                d="M6.000,12.000 C9.314,12.000 12.000,9.314 12.000,6.000 C12.000,2.686 9.314,-0.000 6.000,-0.000 C2.686,-0.000 -0.000,2.686 -0.000,6.000 C-0.000,9.314 2.686,12.000 6.000,12.000 Z"
              />
            </svg>
            <svg className="img-shape shape-two">
              <path
                fillRule="evenodd"
                fill="rgb(182, 255, 234)"
                d="M6.000,12.000 C9.314,12.000 12.000,9.314 12.000,6.000 C12.000,2.686 9.314,-0.000 6.000,-0.000 C2.686,-0.000 -0.000,2.686 -0.000,6.000 C-0.000,9.314 2.686,12.000 6.000,12.000 Z"
              />
            </svg>
            <svg className="img-shape shape-three">
              <path
                fillRule="evenodd"
                fill="rgb(181, 198, 255)"
                d="M12.000,24.000 C18.627,24.000 24.000,18.627 24.000,12.000 C24.000,5.372 18.627,-0.000 12.000,-0.000 C5.372,-0.000 -0.000,5.372 -0.000,12.000 C-0.000,18.627 5.372,24.000 12.000,24.000 Z"
              />
            </svg>
            <svg className="img-shape shape-four">
              <path
                fillRule="evenodd"
                fill="rgb(255, 156, 161)"
                d="M7.500,15.000 C11.642,15.000 15.000,11.642 15.000,7.500 C15.000,3.358 11.642,-0.000 7.500,-0.000 C3.358,-0.000 -0.000,3.358 -0.000,7.500 C-0.000,11.642 3.358,15.000 7.500,15.000 Z"
              />
            </svg>
            <svg className="img-shape shape-five">
              <path
                fillRule="evenodd"
                fill="rgb(178, 236, 255)"
                d="M12.500,25.000 C19.403,25.000 25.000,19.403 25.000,12.500 C25.000,5.596 19.403,-0.000 12.500,-0.000 C5.596,-0.000 -0.000,5.596 -0.000,12.500 C-0.000,19.403 5.596,25.000 12.500,25.000 Z"
              />
            </svg>
          </div>
          <div className="container">
            <h3 className="faq-page-title">Түгээмэл Асуулт Хариулт</h3>
          </div>
        </div>
        <div className="faq-page faq-tab-wrapper invest">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion">
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse1"
                          >
                            Эрксис CSO гэж юу вэ?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse1" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Энэхүү аргачлал нь хөрөнгө оруулалтын салбарыг илүү
                            ардчилсан болгох, дижитал эрин үед зориулсан хөрөнгө
                            босгох цоо шинэ аргачлал юм. Хөрөнгө оруулах
                            боломжит хэмжээ харьцангуй бага учир хүн бүхэн
                            худалдан авах боломжтой. Цөөнх буюу чинээлэг хүмүүст
                            зөвхөн зориулагдаагүй. <br /> <br /> Нөгөө талаараа
                            энэ бол тухайн компанийн өсөлтийн мөчлөгөөс үл
                            хамааран цаг хугацааны хувьд өсөн дэвших боломжтой
                            стартапуудад эрт хөрөнгө оруулах боломж юм. Энэхүү
                            аргачлалыг эфириумаар ажиллах блокчейн технологийг
                            ашиглан Fairmint Technology бүрдүүлсэн.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse2"
                          >
                            Хэн хөрөнгө оруулж болох вэ?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse2" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Энэхүү боломж нь хүн бүрт нээлттэй. Харин АНУ-ын
                            иргэн, аж ахуй нэгж бол албан бүртгэлтэй хөрөнгө
                            оруулагч байх шаардлагатай.
                          </p>
                          <p>
                            Та хувь хүн болон байгууллагаараа хөрөнгө оруулалт
                            хийх боломжтой. Байгууллагаар хөрөнгө оруулалт хийх
                            бол нэмэлт материал шаардлагатайг анхаарна уу.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse3"
                          >
                            Хамгийн багадаа хэдээр хөрөнгө оруулах вэ?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse3" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Та хамгийн багадаа $600 ам.доллараар хөрөнгө
                            оруулалт хийх боломжтой. Цаашдаа энэхүү үнэ өсөж
                            болохыг анхаарна уу.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion2">
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion2"
                            href="#collapse11"
                          >
                            Хувьцааны тэмдэг болон нэрлэсэн нэгж үнэ нь хэд вэ?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse11" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Эрксисийн хувьцааг ERXS тэмдэг төлөөлөх ба нэрлэсэн
                            үнэ нь $1.83.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion2"
                            href="#collapse22"
                          >
                            Хэзээ хөрөнгө оруулж болох вэ?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse22" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            CSO загвар нь хөрөнгө оруулагчдад эрксисийн хувьцааг
                            тогтмол худалдан авах боломжийг олгодгоороо давуу
                            талтай. Нэг удаа хөрөнгө оруулалт хийгдээд 12 сарын
                            хугацаанд хөдөлгөөнгүй хадгалагдах хэдий ч энэ
                            хооронд дахин шинээр худалдан авах боломжтой.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion2"
                            href="#collapse33"
                          >
                            Хоёрдогч зах зээл дээр хэзээ $ERXS хувьцаагаа
                            борлуулж болох вэ?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse33" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>Анх худалдан авснаас 12 сарын дараа.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion2"
                            href="#collapse44"
                          >
                            Энэхүү CSO аргачлал нь бусад хөрөнгө оруулалтын
                            аргачлалаас юугаараа ялгаатай вэ?
                          </a>
                        </h6>
                      </div>
                      <div id="collapse44" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>
                            Уламжлалт IPO-той харьцуулахад арилжааг цахим
                            хуудсаараа дамжуулан хийх нь аль нэг хөрөнгийн
                            биржээр хязгаарлагдахгүй дэлхийн өнцөг булан бүрээс
                            арилжаа хийх боломжийг бүрдүүлж байгаа юм.
                          </p>
                        </div>
                      </div>
                    </div>
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

export default Invest;
