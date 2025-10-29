import React from "react";
import "./App.scss";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./containers/Main";
import BigProjects from "./components/NewComponents/BigProjects";
import ScrollToTop from "./components/NewComponents/ScrollToTop"; // ✅ import

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ This will make every new page open from top */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/project/:id" component={BigProjects} />
      </Switch>
    </Router>
  );
}

export default App;
