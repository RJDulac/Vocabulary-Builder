import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  static propTypes = {
    vocabList: PropTypes.array.isRequired,
  };

  state = {
    text: "",
    selectedWord: "",
    showAnswer: false,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    const { vocabList } = this.props;
    this.setState({ selectedWord: "" });
    e.preventDefault();
    for (let i = 0; i < vocabList.length; i++) {
      if (vocabList[i].word === this.state.text.toLowerCase()) {
        this.setState({ selectedWord: vocabList[i] });
      }
    }
    this.setState({ text: "" });
  };

  handleShowAnswer = () =>
    this.setState({ showAnswer: !this.state.showAnswer });

  render() {
    const { selectedWord, text, showAnswer } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Word..."
            onChange={this.onChange}
            value={text}
          />
          <input type="submit" value="Search" />
        </form>
        <p>{selectedWord.word}</p>
        {selectedWord !== "" && (
          <button onClick={this.handleShowAnswer}>
            {!showAnswer ? "Show Answer" : "Hide Answer"}
          </button>
        )}
        {showAnswer && <p>{selectedWord.definition}</p>}
      </div>
    );
  }
}

export default Search;
