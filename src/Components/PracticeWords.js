import React, { Component } from "react";
import PropTypes from "prop-types";

class PracticeWords extends Component {
  static defaultProps = {
    vocabList: [{ word: "default", definition: "none" }],
  };

  static propTypes = {
    vocabList: PropTypes.array.isRequired,
  };

  state = {
    showAnswer: false,
    randomVocab: this.randomVocab(),
  };

  randomVocab() {
    return this.props.vocabList[
      Math.floor(Math.random() * this.props.vocabList.length)
    ];
  }

  handleRandomVocab = () =>
    this.setState({ randomVocab: this.randomVocab(), showAnswer: false });

  handleShowAnswer = () =>
    this.setState({ showAnswer: !this.state.showAnswer });

  render() {
    const {
      randomVocab: { word, definition },
      showAnswer,
    } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={this.handleShowAnswer}>
          {!showAnswer ? "Show Answer" : "Hide Answer"}
        </button>
        <button onClick={this.handleRandomVocab}>Next Random Word</button>
        <p>What is the definition of {word}?</p>
        {showAnswer && <p>{definition}.</p>}
      </div>
    );
  }
}

export default PracticeWords;
