import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => (
  <nav className="nav">
    <Link className="nav__home" to="/">
      Home
    </Link>
    <Link
      className="nav__about"
      to="/about"
      // to={{
      //   pathname: "/about",
      //   state: {
      //     fromNavigation: true,
      //   },
      // }}
    >
      About
    </Link>
  </nav>
);

export default Navigation;
