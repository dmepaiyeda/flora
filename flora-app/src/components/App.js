import React from 'react';
import '../styles/index.css';
import Navigation from "../components/Navigation";
import LoggedInNav from "../components/LoggedInNav";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "../containers/HomePage";
import About from "../containers/About";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import CommunityPage from "../containers/CommunityPage";
import ChatBot from './Chat';
import Response from "../containers/Response"


class App extends React.Component {
  render(){
    return (
      <div>
        <main>
        {this.props.location.pathname !== "/community"
          && this.props.location.pathname !== "/response"
          && <Navigation/>}

        {this.props.location.pathname !== "/"
          && this.props.location.pathname !== "/about"
          && <LoggedInNav/>}
          <Switch style={{ padding: "0em" }}>
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/community" component={CommunityPage}></Route>
            <Route path="/response" component={Response}></Route>
          </Switch>
          <ChatBot></ChatBot>
        </main>
      </div>

    );
  }
}

export default withRouter(App);
