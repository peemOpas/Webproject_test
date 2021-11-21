import "./App.css";
import { Route, Switch } from "react-router-dom";
import React from "react";
import Loginpage from "./Loginpagefile/Loginpage";
import Registerpage from "./Registerfile/Registerpage";
import DataContext from "./Data/DataContext";
import Footer from "./Footer";
import Header from "./Header";
import QuizPage from "./Quizfile/QuizPage";
import { useState } from "react";
function App() {
  const [username, setUsername] = useState("");
  const routes = (
    <Switch>
      <Route path="/" component={Loginpage} exact />
      <Route path="/Registerpage" component={Registerpage} />
      <Route path="/Quizpage" component={QuizPage} />
    </Switch>
  );
  return (
    <DataContext.Provider value={{ username, setUsername }}>
      <div className="test">
        <Header />
        {routes}
        <Footer />
      </div>
    </DataContext.Provider>
  );
}

export default App;
