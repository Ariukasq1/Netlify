const Header = () => (
  <div className="theme-main-menu theme-menu-one d-align-item">
    <div className="logo">
      <a href="/">
        <img src="/images/erxes-logo.svg" alt="" />
      </a>
    </div>
    <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
      <div className="ml-auto nav-container">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="flaticon-setup" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/invest" className="nav-link">
                Хөрөнгө оруулах
              </a>
            </li>
            <li className="nav-item">
              <a href="/success-story" className="nav-link">
                Амжилтын түүх
              </a>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link">
                Блог
              </a>
            </li>
            <li className="nav-item">
              <a href="/solutions" className="nav-link">
                Боломжууд
              </a>
            </li>
            <li className="nav-item">
              <a href="/pricing" className="nav-link">
                Үнийн санал
              </a>
            </li>
            <li className="login-button">
              <a href="https://erxes.io/signin" target="_blank">
                Нэвтрэх
              </a>
            </li>
            <li className="login-button">
              <a href="https://erxes.io/create" target="_blank">
                Бүртгүүлэх
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
