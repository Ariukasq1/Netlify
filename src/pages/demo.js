import React, { Component } from "react";
import Layout from "../components/Layout";

class Training extends Component {
  render() {
    return (
      <Layout forms={[{ brand_id: "m7DmKt", form_id: "3QPxQs" }]}>
        <div className="our-service pt-150 pb-100">
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
                <div className="col-md-9">
                  <div className="text-wrapper">
                    <div className="theme-title-one">
                      <h2 className="main-title text-center">
                        Эрксисийн цахим танилцуулга, зөвлөгөө
                      </h2>
                    </div>
                    <p className="pb-30">
                      Хэрэв та Эрксисийг өөрийн бизнестээ нэвтрүүлж эхлэх
                      сонирхолтой байгаа бол эсвэл аль хэдийн ашиглаад эхэлсэн
                      бол бидэнд хандаарай. Энэхүү сургалт нь цахимаар явагдана.
                      Бизнесийн үйл ажиллагаагаа сайжруулахын тулд эрксис
                      програмийг хэрхэн ашиглах талаар тодорхой мэдлэгтэй болно.
                      Мөн түүнчлэн энэхүү онлайн уулзалтын явцад та бидэнд санал
                      сэтгэгдлээ хэлж болно.
                    </p>
                    <ul>
                      <li className="mb-5">
                        &emsp;<i className="fa fa-check" aria-hidden="true"></i>
                        &nbsp;Эрксис бүтээгдэхүүний ерөнхий танилцуулга
                      </li>
                      <li className="mb-5">
                        &emsp;<i className="fa fa-check" aria-hidden="true"></i>
                        &nbsp;Таны бизнес онцлогт таарсан нэмэлт зөвөлгөө
                      </li>
                      <li className="mb-5">
                        &emsp;<i className="fa fa-check" aria-hidden="true"></i>
                        &nbsp;Асуулт, хариулт
                      </li>
                    </ul>
                    <br />
                    Та доорх анкетыг бөглөснөөр манай хамт олон онлайн уулзалтыг
                    таны имэйлээр товлох болно.
                  </div>
                  <br />
                  <br />
                  <div
                    data-erxes-embed="3QPxQs"
                    style={{ width: "100%", height: "750px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Training;
