import React, { Component, Fragment } from "react";

class DisplaySelectedWords extends Component {
  state = {
    showAnswer: false,
  };
  handleShowAnswer = () =>
    this.setState((currentState) => ({ showAnswer: !currentState.showAnswer }));

  render() {
    const { list, selectedWord } = this.props;
    const { showAnswer } = this.state;
    return (
      <Fragment>
        <p>{list.word}</p>
        {selectedWord.length > 0 && ( //not really needed - but leave just in case of a refactor
          <button onClick={this.handleShowAnswer}>
            {!showAnswer ? "Show Answer" : "Hide Answer"}
          </button>
        )}
        {showAnswer && <p>{list.definition}</p>}
      </Fragment>
    );
  }
}

export default DisplaySelectedWords;
