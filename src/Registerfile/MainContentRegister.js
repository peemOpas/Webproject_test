import "./MainContentRegister.css";
import RegisterForm from "./Registerform";
const MainContentRegister = () => {
  return (
    <div>
      <div className="container2">
        <div className="leftpanel"></div>
        <div className="rightpanel">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default MainContentRegister;
