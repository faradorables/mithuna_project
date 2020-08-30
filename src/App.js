import React from 'react';
import Navigation from './navigation/NavigationBar/index'
import Home from './screen/Home/index'
import About from './screen/About/index'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
  <React.Fragment>
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </Switch>
    </Router>
</React.Fragment>
  );
}

export default App;
