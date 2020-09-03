import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import wordList from "./vocabList.json";
import DisplayWords from "./Components/DisplayWords";
import PracticeWords from "./Components/PracticeWords";
import Search from "./Components/Search";
import Alert from "./Components/Layout/Alert";
import NavBar from "./Components/Layout/NavBar";

import SearchPage from "./Components/Pages/SearchPage";

class App extends Component {
  state = {
    vocabList: wordList.list,
    alert: null,
  };
  setAlert = (message, type) => {
    //may reuse so pass to children
    this.setState({ alert: { message, type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };
  setAlertToNull = () => this.setState({ alert: null });

  render() {
    const { vocabList } = this.state;
    return (
      <Router>
        <NavBar />
        <Alert alert={this.state.alert} setAlertToNull={this.setAlertToNull} />
        <Switch>
          <Route
            exact
            path="/search"
            render={() => (
              <SearchPage>
                <Search vocabList={vocabList} setAlert={this.setAlert} />
              </SearchPage>
            )}
          />
          <Route
            exact
            path="/random"
            render={() => <PracticeWords vocabList={vocabList} />}
          />
          <Route
            exact
            path="/"
            render={() => <DisplayWords vocabList={vocabList} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
