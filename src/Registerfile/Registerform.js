import "./Registerform.css";
import { useState } from "react";
const RegisterForm = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repassword, setrepassword] = useState("");

  const [errorUserName, seterrorUsername] = useState("");
  const [errorEmail, seterrorEmail] = useState("");
  const [errorPassword, seterrorPassword] = useState("");
  const [errorRepassword, seterrorRepassword] = useState("");

  const [usernameColor, setusernameColor] = useState("");
  const [emailColor, setemailColor] = useState("");
  const [passwordColor, setpasswordColor] = useState("");
  const [repasswordColor, setrepasswordColor] = useState("");
  const validateForm = (e) => {
    e.preventDefault();
    if (username.length > 8) {
      seterrorUsername("");
      setusernameColor("green");
    } else {
      seterrorUsername("Please fill character more than 8");
      setusernameColor("red");
    }

    if (email.includes("@")) {
      seterrorEmail("");
      setemailColor("green");
    } else {
      seterrorEmail("Your Email form is not correct");
      setemailColor("red");
    }

    if (password.length > 8) {
      seterrorPassword("");
      setpasswordColor("green");
    } else {
      seterrorPassword("Your password length is not more than 8");
      setpasswordColor("red");
    }

    if (repassword !== "" && repassword === password) {
      seterrorRepassword("");
      setrepasswordColor("green");
    } else {
      seterrorRepassword("Your pass word is not match pls fill again");
      setrepasswordColor("red");
    }
  };
  return (
    <div className="register">
      <form className="registerform" onSubmit={validateForm}>
        <p className="registerheader" align="center">
          Register
        </p>
        <hr />
        <p>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            style={{ borderColor: usernameColor }}
          />
          <small style={{ color: usernameColor }}>{errorUserName}</small>
        </p>
        <p>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </p>
        <p>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </p>
        <p>
          <label>Comfirm password:</label>
          <input
            type="password"
            value={repassword}
            onChange={(e) => setrepassword(e.target.value)}
            style={{ borderColor: repasswordColor }}
          />
          <small style={{ color: repasswordColor }}>{errorRepassword}</small>
        </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default RegisterForm;
