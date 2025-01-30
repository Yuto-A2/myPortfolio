import Nav from "./Nav"
export default function Header() {
  return (
    <header id="header">
      <div className="titleBox">
        <h1 id="site-name">
          <a href="#"><img id="logo" src="/img/logo.png" alt="logo"/></a>
          <a href="/">Yuto-A</a>
        </h1>
      </div> {/* titleBox */}
      <ul className="socialMedia">
        <li className="sns1"><a href="https://github.com/Yuto-A2"><i className="fa-brands fa-github  fa-3x icon"></i></a></li>
        <li className="sns2"><a href="https://www.linkedin.com/in/yarimori/"><i class="fa-brands fa-linkedin fa-3x icon"></i></a></li>
      </ul>
      <Nav />
    </header>
  );
}