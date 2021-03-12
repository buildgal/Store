/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Signin from ".pages/Signin"

function App() {
  return (
    <Router>
      <div>
        <Signin>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
        </Wrapper>
        </Signin>
      </div>
    </Router>
  );
}

export default App;