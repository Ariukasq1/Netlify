import React, { Component } from "react";
import Layout from "../components/Layout";
import WPAPI from "wpapi";
import Config from "../config";
import { getData } from "../utils";
import moment from "moment";

const wp = new WPAPI({ endpoint: Config.apiUrl });

class HumanResource extends Component {
  static async getInitialProps() {
    const posts = await wp
      .posts()
      .category(1)
      .perPage(40)
      .embed();

    return { posts };
  }

  render() {
    const { posts } = this.props;

    return (
      <Layout
        forms={[
          {
            brand_id: "m7DmKt",
            form_id: "FMbmkB",
          },
        ]}
      >
        <div className="solid-inner-banner">
          <h2 className="page-title">Нээлттэй ажлын байр</h2>
        </div>

        <div className="jobs faq-page faq-tab-wrapper pt-50 pb-200">
          <div className="container">
            <div className="row">
              <div className="pb-30 job-application">
                <button
                  className="theme-btn solid-button-one"
                  data-erxes-modal="FMbmkB"
                >
                  Анкет бөглөх
                  <i
                    className="fa fa-angle-right icon-right"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
              <div className="col-lg-12">
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion">
                    {posts.map((post) => {
                      return (
                        <div key={post.id} className="panel">
                          <div className="panel-heading">
                            <h6 className="panel-title">
                              <a
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href={`#${post.id}`}
                              >
                                {post.title.rendered}{" "}
                                <span>
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  {moment(post.date).format("L")}
                                </span>
                              </a>
                            </h6>
                          </div>
                          <div id={post.id} className="panel-collapse collapse">
                            <div className="panel-body">
                              <div className="panel-row pt-30 pb-30">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: post.content.rendered,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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

export default HumanResource;
