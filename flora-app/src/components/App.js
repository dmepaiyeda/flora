import React from 'react';
import '../styles/index.css';
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "../containers/HomePage";
import About from "../containers/About";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import Footer from "../components/Footer";
import { withRouter } from 'react-router-dom';
import CommunityPage from "../containers/CommunityPage";


class App extends React.Component {
  render(){
    return (
      <div>
        <main>
          <Navigation/>
          <Switch style={{ padding: "0em" }}>
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/about" component={About} />
            <Route path="/community" component={CommunityPage} />
          </Switch>
          <Footer/>
        </main>
      </div>

    );
  }
}

export default withRouter(App);