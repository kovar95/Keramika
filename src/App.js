import React, { Fragment } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Footer from './components/Footer';
import Prices from './components/Prices';
import Contact from './components/Contact';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/prices" component={Prices} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
