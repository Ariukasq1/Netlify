import React, { Component } from "react";
import Layout from "../components/Layout";

class Team extends Component {
  renderMember(name, position, image, fb, twt, gb, lkdn) {
    return (
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-team-member">
          <div className="wrapper">
            <div>
              <img src={image} alt="" />
            </div>
            <div className="info-meta">
              <h6 className="name">
                <div
                  dangerouslySetInnerHTML={{
                    __html: name,
                  }}
                />
              </h6>
              <span>{position}</span>
            </div>
          </div>
          <div className="hover-content">
            <ul>
              {fb && (
                <li>
                  <a href={fb} target="_blank">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
              )}
              {twt && (
                <li>
                  <a href={twt} target="_blank">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
              )}
              {gb && (
                <li>
                  <a href={gb} target="_blank">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
              )}
              {lkdn && (
                <li>
                  <a href={lkdn} target="_blank">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <div className="solid-inner-banner">
          <h2 className="page-title">Баг хамт олон</h2>
        </div>
        <div className="team-standard agn-about-us our-team mt-70 pb-100">
          <div className="shape-wrapper">
            <img
              src="images/shape/shape-64.svg"
              alt=""
              className="shape-two"
              data-aos="fade-left"
            />
          </div>
          <div className="container">
            <div className="row">
              {this.renderMember(
                "Баттулгын <br /> Бат-Амар",
                "Технологи хариуцсан захирал, Хамтран үүсгэн байгуулагч",
                "images/team/bat-amar.jpg",
                "",
                "https://twitter.com/b_batamar",
                "https://github.com/batamar",
                "https://www.linkedin.com/in/mrbatamar/"
              )}
              {this.renderMember(
                "Батжаргалын <br /> Наран",
                "Үйл ажиллагаа хариуцсан захирал, Хамтран үүсгэн байгуулагч",
                "images/team/naran.png",
                "",
                "https://twitter.com/NaranBNayantai",
                "https://github.com/batamar",
                "https://www.linkedin.com/in/nauren/"
              )}
              {this.renderMember(
                "Амартайваны <br /> Мэнд-Орших",
                "Гүйцэтгэх захирал, Хамтран үүсгэн байгуулагч",
                "images/team/mend-orshikh.jpg",
                "https://www.facebook.com/MendOrshikh/",
                "https://twitter.com/MendOrshikh",
                "https://github.com/mendorshikh",
                "https://www.linkedin.com/in/mendorshikh/"
              )}
              {this.renderMember(
                "Ганзоригийн <br /> Индра",
                "Маркетинг хариуцсан захирал",
                "images/team/indra.png",
                "",
                "https://twitter.com/IndraGanzorig",
                "https://github.com/indraganzorig",
                "https://www.linkedin.com/in/indraganzorig/"
              )}
              {this.renderMember(
                "Эрдэнийн Энхдэлгэр",
                "Санхүүгийн ахлах менежер",
                "https://erxes.io/static/images/team/square/enkhdelger.jpg",
                "",
                "",
                "",
                "https://www.linkedin.com/in/#/"
              )}
              {this.renderMember(
                "Энхтөрийн Түвшинтөгс",
                "Бүтээгдэхүүний ахлах менежер",
                "https://erxes.io/static/images/team/square/tuvshintugs.jpg",
                "",
                "",
                "",
                ""
              )}
              {this.renderMember(
                "Баатарын Одончимэг",
                "Ахлах нягтлан бодогч",
                "https://erxes.io/static/images/team/square/odonchimeg.png",
                "",
                "",
                "",
                ""
              )}
              {this.renderMember(
                "Зоригтбаатарын Цэрэнлхам",
                "Төслийн ахлах менежер",
                "https://erxes.io/static/images/team/square/tserenlham.jpg",
                "",
                "",
                "",
                "https://www.linkedin.com/in/tserenlkham-z-17074594/"
              )}
              {this.renderMember(
                "Ганчимэгийн Мөнхсайхан",
                "Систем хөгжүүлэгч",
                "https://erxes.io/static/images/team/square/munkhsaikhan.jpg",
                "",
                "",
                "https://github.com/munkhsaikhan",
                ""
              )}
              {this.renderMember(
                "Энхбатын <br /> Мөнгөншагай",
                "Систем хөгжүүлэгч",
                "images/team/mungunshagai.jpg",
                "",
                "https://twitter.com/mungunshagai",
                "https://github.com/mungunshagai",
                "https://www.linkedin.com/in/mungunshagai/"
              )}
              {this.renderMember(
                "Бадамхандын Мөнхжин",
                "Систем хөгжүүлэгч",
                "https://erxes.io/static/images/team/square/munkhjin.jpg",
                "",
                "https://twitter.com/#",
                "https://github.com/#",
                "https://www.linkedin.com/in/#/"
              )}
              {this.renderMember(
                "Бат-Өлзийн </br> Ану-Үжин",
                "Веб инженер",
                "https://erxes.io/static/images/team/square/anu.jpg",
                "",
                "https://twitter.com/anuvjin1",
                "https://github.com/Anu-Ujin",
                "https://www.linkedin.com/in/anu-ujin/"
              )}
              {this.renderMember(
                "Самбуугийн Буянтогтох",
                "Систем хөгжүүлэгч",
                "https://erxes.io/static/images/team/square/buynaa.jpg",
                "",
                "https://twitter.com/munkhjin",
                "https://github.com/munkhjin0223",
                ""
              )}
              {this.renderMember(
                "Бат-Эрдэнийн <br /> Соёмбо",
                "Мобайл хөгжүүлэгч",
                "https://erxes.io/static/images/team/square/soyombo.jpg",
                "",
                "https://twitter.com/soko_e11iot",
                "https://github.com/soyombo-cook",
                "https://www.linkedin.com/in/soyombo-bat-erdene-772a9a62/"
              )}
              {this.renderMember(
                "Нармандахын <br /> Энхтүвшин",
                "Систем хөгжүүлэгч",
                "https://erxes.io/static/images/team/square/enkhtuwshin.jpg",
                "",
                "https://twitter.com/Enkhtuv40099032",
                "https://github.com/Enkhtuvshin0513",
                "https://www.linkedin.com/in/narmandakh-enkhtuvshin-340443175/"
              )}
              {this.renderMember(
                "Галтын <br /> Итгэл",
                "Мобайл хөгжүүлэгч",
                "https://erxes.io/static/images/team/square/itgel.jpg",
                "",
                "https://twitter.com/iwalker7",
                "https://github.com/iwalker7",
                "https://www.linkedin.com/in/itgel-galt-9801aa183/"
              )}
              {this.renderMember(
                "Нямбаярын <br /> Бат-Орших",
                "Мобайл хөгжүүлэгч",
                "https://erxes.io/static/images/team/square/bataorshih.n.png",
                "",
                "",
                "",
                ""
              )}
              {this.renderMember(
                "Амгалангийн Мягмарсүрэн",
                "Систем админ",
                "https://erxes.io/static/images/team/square/myagmarsuren.jpg",
                "",
                "",
                "",
                "https://www.linkedin.com/in/#/"
              )}
              {this.renderMember(
                "Махгалсүрэнгийн Мягмарсүрэн",
                "Систем админ",
                "https://erxes.io/static/images/team/square/miigaa.png",
                "",
                "",
                "",
                "https://www.linkedin.com/in/makhgalsuren-myagmarsuren-9154331a8/"
              )}
              {this.renderMember(
                "Насан-Очирын Бат-Амгалан",
                "Систем хөгжүүлэгч",
                "https://erxes.io/static/images/team/square/batuka.jpg",
                "",
                "",
                "",
                ""
              )}
              {this.renderMember(
                "Баатархүүгийн Мягмарсүрэн",
                "Систем хөгжүүлэгч",
                "https://erxes.io/static/images/team/square/miigaa.jpg",
                "",
                "",
                "",
                "https://www.linkedin.com/in/#/"
              )}
              {this.renderMember(
                "Даваасамбуугийн Мөнх-Хишиг",
                "Харилцагчийн менежер",
                "https://erxes.io/static/images/team/square/mo.jpg",
                "",
                "",
                "",
                "https://www.linkedin.com/in/#/"
              )}
              {this.renderMember(
                "Мөнгөнцэцгийн Амарзаяа",
                "Харилцагчийн менежер",
                "https://erxes.io/static/images/team/square/amarzaya.jpg",
                "",
                "",
                "",
                ""
              )}
              {this.renderMember(
                "Ганбаатрын Дашням",
                "Mаркетингийн мэргэжилтэн",
                "https://erxes.io/static/images/team/square/dashka.jpg",
                "",
                "https://twitter.com/KbyJMQjGaqq5WmP",
                "",
                "https://www.linkedin.com/in/dashnyam-ganbaatar-2a276117b/"
              )}
              {this.renderMember(
                "Хатанбаатрын Марал",
                "Контент мэргэжилтэн",
                "https://erxes.io/static/images/team/square/maral.jpg",
                "",
                "",
                "",
                "https://www.linkedin.com/in/maral-khatanbaatar-78a4271a8/"
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Team;
