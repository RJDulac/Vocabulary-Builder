import React, { Component } from "react";
import wordList from "./vocabList.json";
import DisplayWords from "./Components/DisplayWords";
import PracticeWords from "./Components/PracticeWords";
import Search from "./Components/Search";

class App extends Component {
  state = {
    vocabList: wordList.list,
  };
  render() {
    const { vocabList } = this.state;
    return (
      <div>
        <Search vocabList={vocabList} />
        <DisplayWords vocabList={vocabList} />
        <PracticeWords vocabList={vocabList} />
      </div>
    );
  }
}

export default App;
