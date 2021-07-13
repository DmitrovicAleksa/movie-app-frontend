import "./App.css";
import RegistrationUser from "./components/user-component/RegistrationComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/user-component/LoginComponent";
import MovieList from "./components/movie-component/MovieList";
import AddMovie from "./components/movie-component/AddMovie";
import React from 'react'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/registration" component={RegistrationUser}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/movies" component={MovieList}></Route>
          <Route exact path="/movies/post" component={AddMovie}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
