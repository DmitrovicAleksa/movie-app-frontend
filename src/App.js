import "./App.css";
import RegistrationUser from "./components/user-component/RegistrationComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/user-component/LoginComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/registration" component={RegistrationUser}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
