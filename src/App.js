import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/DoctorForm" component={DoctorForm} />
      <Route exact path="/DoctorStatus" component={DoctorStatus} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
