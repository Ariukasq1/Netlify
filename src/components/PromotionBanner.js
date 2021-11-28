const PromotionBanner = (props) => {
  return (
    <div className="promotion-banner row">
      <div className="col-md-11">
        <span className="content">
          🚀&nbsp;&nbsp;Стратегийн хөрөнгө оруулагч болох дэлгэрэнгүй мэдээллийг
          авна уу
        </span>{" "}
        <a href="/invest">
          <button className="button-one">Хөрөнгө оруулах</button>
        </a>
      </div>
      <div className="col-md-1 second">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
          className="svg-inline--fa fa-times fa-w-11"
          onClick={() => props.onShowBanner()}
        >
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            className=""
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default PromotionBanner;
