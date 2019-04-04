import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import { Main, MyMNA, MNA, Party, Bill, MNAAbout } from "./pages";
import BillDetailController from "./containers/BillDetailController";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="mt-4 container">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/mymna" component={MyMNA} />
            <Route path="/mna/about/:mnaId" component={MNAAbout} />
            <Route path="/mna" component={MNA} />
            <Route path="/party" component={Party} />
            <Route path="/bill/:billId" component={BillDetailController} />
            <Route path="/bill" component={Bill} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
