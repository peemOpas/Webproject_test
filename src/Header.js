import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinBeam } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DataContext from "./Data/DataContext";
import { useContext } from "react";
const Header = () => {
  const { username } = useContext(DataContext);
  return (
    <header>
      <div className="header-contain">
        <p>
          <FontAwesomeIcon icon={faGrinBeam} className="icontest" />
        </p>
        <p>Welcome {username}</p>
        <ul>
          <li>
            <Link to="/Registerpage">Home</Link>
          </li>
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/QuizPage">Profile</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
