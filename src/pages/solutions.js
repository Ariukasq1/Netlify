import React, { Component } from "react";
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";
import Card from "../components/Cards"
class Solutions extends Component {
    render() {
        const feature1 = [
            "Таны одоогийн цахим хуудас дээр зөвхөн танай үл хөдлөх хөрөнгийн хотхонд тохирсон тохиргоог хийх (1 удаа)",
            "Эрксис системийг 1 жил ашиглах эрх",
            "Маркетингийн автоматжуулалт тохиргоо",
            "Сургалт",
            "24/7 Техник Тусламж"
        ];

        return (
            <Layout>
                <div className="solid-inner-banner mb-150">
                    <h2 className="page-title">Үнийн санал</h2>
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
                            <div className="sass-our-pricing">
                                <div className="container">
                                    <div className="theme-title-one text-center">
                                        <div className="upper-title">
                                            ҮЛ ХӨДЛӨХ, МЕНЕЖМЕНТИЙН САЛБАРЫН ДИЖИТАЛ ХУВЬСГАЛ
                                        </div>
                                        <h2 className="main-title">
                                            Захиалга, борлуулалт, маркетинг, хэрэглэгчтэй харилцах үйл ажиллагаагаа цогцоор нь удирдах боломж
                                        </h2>
                                    </div>

                                    <div className="container">
                                        <div className="col-lg-4">
                                            <Card
                                                color="#ffcd63"
                                                pname="Энгийн багц"
                                                title="Хороолол"
                                                feature={feature1}
                                            />
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

export default Solutions;
