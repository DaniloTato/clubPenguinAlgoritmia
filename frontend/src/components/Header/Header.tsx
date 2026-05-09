import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

interface NavItemProps {
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ label }) => (
  <li className="nav-item">{label}</li>
);

export default function Header() {
  return (
    <header className="header">
      {/* LEFT */}
      <div className="header-section header-left">
        <div className="header-inner-left">
          {/* LOGO → HOME */}
          <Link to="/">
            <img src={logo} alt="Club Penguin Logo" className="logo-img" />
          </Link>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="header-section header-middle">
        <ul className="nav-links">
          <NavItem label="Membership" />
          <NavItem label="Community" />
          <NavItem label="Parents" />
          <NavItem label="Shop" />
          <NavItem label="Help" />
        </ul>

        <div className="announcement-pill">
          Waddle around and meet <span>new friends!</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="header-section header-right">
        <div className="header-inner-right">
          {/* PLAY NOW → AUTH */}
          <Link to="/auth">
            <button className="play-button">PLAY NOW!</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
