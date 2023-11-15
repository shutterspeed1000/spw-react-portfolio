import "../App.css";

function Header() {
  return (
    <div>
      <div className="headerImg"></div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light navSet">
        <a className="navbar-brand" href="#">
          Paul Worrell
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/about">
                About <span className="sr-only"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
