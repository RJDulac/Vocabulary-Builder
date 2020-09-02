import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplaySelectedWords from "./DisplaySelectedWords";

class Search extends Component {
  static propTypes = {
    vocabList: PropTypes.array.isRequired,
  };

  state = {
    text: "",
    selectedWord: [], //change to selectedWords - changed behavior
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    const { vocabList } = this.props;
    e.preventDefault();

    const selectedWordStringified = JSON.stringify(this.state.selectedWord);
    const textLowerCase = this.state.text.toLowerCase();

    if (this.state.text !== "") {
      for (let i = 0; i < vocabList.length; i++) {
        if (
          vocabList[i].word.includes(textLowerCase) &&
          !selectedWordStringified.includes(vocabList[i].word)
        ) {
          this.setState({
            selectedWord: [...this.state.selectedWord, vocabList[i]],
          });
        }
      }
    }
    this.setState({ text: "" });
  };

  handleClearList = () => {
    console.log(this.state.selectedWord);
    this.setState({ selectedWord: [] });
  };

  render() {
    const { selectedWord, text } = this.state;
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
          <button onClick={this.handleClearList}>Clear List</button>
        </form>
        {selectedWord.map((list) => (
          <DisplaySelectedWords list={list} selectedWord={selectedWord} />
        ))}
      </div>
    );
  }
}

export default Search;
