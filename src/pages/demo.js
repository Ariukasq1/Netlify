import React, { Component } from "react";
import Layout from "../components/Layout";

class Demo extends Component {
  render() {
    return (
      <Layout forms={[{ brand_id: "m7DmKt", form_id: "Kuf9FA" }]}>
        <div className="our-service demo pt-150 pb-100">
          <div className="agn-about-us pt-250 pb-100">
            <img src="images/shape/shape-61.svg" alt="" className="shape-one" />
            <img
              src="images/shape/shape-64.svg"
              alt=""
              className="shape-two"
              data-aos="fade-left"
            />
            <img
              src="images/shape/shape-65.svg"
              alt=""
              className="shape-three"
              data-aos="fade-right"
            />
            <img
              src="images/shape/shape-60.svg"
              alt=""
              className="shape-four"
            />
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="theme-title-one">
                  <h2 className="main-title text-center pb-30">
                    Эрксис энтерпрайз багцыг сонгох шалтгаан
                  </h2>
                </div>
                <div className="col-md-6">
                  <div className="text-wrapper">
                    <p className="pb-30">
                      Эрксис нь аль ч салбарын байгууллагуудад хэрэглэгч болон
                      хамт олныхоо туршлагыг сайжруулах, удирдах байдлаар
                      бизнесээ “Хүн төв”-тэй байгууллага болох дижитал
                      шилжилтийн хөшүүрэг болох болно.
                    </p>
                    <p>
                      Бид бүхэн Эрксис энтерпрайз багцын хүрээнд компанийн
                      салбар, үйл ажиллагааны онцлог зэрэг зөвхөн тухайн
                      компанийн хэрэгцээ шаардлагад тохирсон онцгой шийдлийг
                      санал болгож аюулгүй байдал, засаглал, залгамж халаа,
                      хяналт болон тусгай нэмэлт үйлчилгээнүүдийг санал
                      болгодог.
                    </p>
                    <br />
                    <p>
                      Эрксис энтерпрайз багцын хамгийн чухал давуу тал бол
                      үйлчлүүлэгчдийн сэтгэл ханамжийг нэмэгдүүлэх, цаг хугацаа
                      их шаарддаг нарийн төвөгтэй ажлуудыг автоматжуулах,
                      технологийн тусламжтайгаар хөнгөвчилж удирдах явдал юм.
                    </p>
                    <br />
                    <p>
                      <b>Энтерпрайз багцын санал болгож буй үнэ цэнэ:</b>
                    </p>
                    <br />
                    <ul className="list">
                      <li className="flex">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <div>Хязгааргүй үндсэн болон нэмэлт боломжууд</div>
                      </li>
                      <li className="flex">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <div>BAA,HIPAA & HITECH шаардлагыг биелүүлсэн</div>
                      </li>
                      <li className="flex">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <div>
                          Privacy Shield certification хувь хүний нууцлал
                          хамгаалагдсан
                        </div>
                      </li>
                      <li className="flex">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <div>U2F, TOTP, SMS ашиглан баталгаажуулж нэвтрэнэ</div>
                      </li>
                      <li className="flex">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <div> Байгууллагын системрүү зөөх үйлчилгээ</div>
                      </li>
                      <li className="flex">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <div>SAML 2.0 ашиглан нэвтрэх боломжтой</div>
                      </li>
                      <li className="flex">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <div>Уян хатан төлбөрийн нөхцөл</div>
                      </li>
                      <li className="flex">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <div>Гүйцэтгэл, хяналтыг дэмжих нэмэлт үйлчилгээ</div>
                      </li>
                      <li className="flex">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <div>
                          Байгууллагын менежерүүдэд зориулсан тусгай сургалт,
                          дэмжлэг
                        </div>
                      </li>
                      <li className="flex">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <div>Байгууллагын тусгай чат групп</div>
                      </li>
                      <li className="flex">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <div>
                          Платформын ашиглалт хэвийн байгаа эсэхийг 7 хоног бүр
                          имэйлээр тайлагнана
                        </div>
                      </li>
                      <li className="flex">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <div>
                          Байгууллагад суурилуулах, ашиглах талаар тусгай
                          сургалтууд
                        </div>
                      </li>
                      <li className="flex">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <div>Серверийн аюулгүй байдалд зөвлөх үйлчилгээ</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    data-erxes-embed="Kuf9FA"
                    style={{ width: "100%", height: "850px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Demo;
