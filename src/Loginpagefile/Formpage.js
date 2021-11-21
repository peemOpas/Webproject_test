import "./Formpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { v4 as uuidv4 } from "uuid";
import {
  faSignInAlt,
  faUserAlt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../Data/DataContext";
const Frompage = () => {
  const { setUsername } = useContext(DataContext);
  const submitform = (e) => {
    const info = {
      user: user,
      pass: pass,
    };
    console.log(info);
    setUsername(user);

    e.preventDefault();
  };
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");

  const clickuser = (event) => {
    setuser(event.target.value);
    console.log(event.target.value);
  };
  const clickpass = (event) => {
    setpass(event.target.value);
  };

  return (
    <div className="forminput">
      <form onSubmit={submitform} className="formlogin">
        <div className="logo"></div>

        <p id="join-font">
          Please Login here <FontAwesomeIcon icon={faSignInAlt} />
        </p>
        <hr />
        <p>
          <label htmlFor="usernamelabel" className="word">
            <FontAwesomeIcon icon={faUserAlt} />
            Username:
          </label>
          <input
            type="text"
            id="usernamelabel"
            className="textclass"
            value={user}
            required
            onChange={clickuser}
          ></input>
        </p>
        <p>
          <label htmlFor="passwordlabel" className="word">
            <FontAwesomeIcon icon={faLock} />
            Password :
          </label>
          <input
            type="password"
            id="passwordlabel"
            value={pass}
            placeholder="********"
            className="textclass"
            onChange={clickpass}
            required
          ></input>
        </p>

        <p className="comfirmbutton">
          <Link to={{ pathname: "/Quizpage", state: { user: "Peemopas" } }}>
            <input type="submit" value="LOGIN" className="button2"></input>
          </Link>

          <input
            type="button"
            value="FORGOT PASSWORD"
            className="button2"
          ></input>
        </p>

        <p>
          <label htmlFor="createaccount" className="word">
            Don't have an account?
          </label>
          <Link to="/Registerpage" className="linktoregister">
            Click here
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Frompage;
