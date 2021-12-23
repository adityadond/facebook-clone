import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginHeader from "./LoginHeader.js";
import Login from "./Login.js";
import RegisterHeader from "./RegisterHeader";
import Register from "./Register.js";
import HomeHeader from "./HomeHeader";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginHeader />
            <Login />
          </Route>
          <Route path="/register">
            <RegisterHeader></RegisterHeader>
            <Register />
          </Route>
          <Route path="/">
            <HomeHeader />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
