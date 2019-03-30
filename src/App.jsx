import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import { Container, Col, Row } from "react-bootstrap";
import { MyMNA, MNA, Party, Bill } from "./pages";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />

        <Switch>
          <Container>
            <Route exact path="/" />
            <Route path="/mymna" component={MyMNA} />
            <Route path="/mna" component={MNA} />
            <Route path="/party" component={Party} />
            <Route path="/bill" component={Bill} />
          </Container>
        </Switch>
      </div>
    );
  }
}

export default App;
