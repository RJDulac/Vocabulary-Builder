import React, { Component } from "react";
import wordList from "./vocabList.json";
import DisplayWords from "./Components/DisplayWords";
import PracticeWords from "./Components/PracticeWords";
import Search from "./Components/Search";
import Alert from "./Components/Layout/Alert";

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
      <div>
        <Alert alert={this.state.alert} setAlertToNull={this.setAlertToNull} />
        <Search vocabList={vocabList} setAlert={this.setAlert} />
        <DisplayWords vocabList={vocabList} />
        <PracticeWords vocabList={vocabList} />
      </div>
    );
  }
}

export default App;
