import React from "react";
import PropTypes from "prop-types";

const DisplayWords = ({ vocabList }) => {
  return vocabList.map((item) => {
    return (
      <div style={{ textAlign: "center", fontSize: "20px" }} key={item.word}>
        <p style={{ color: "gray" }}>
          Word: <span style={{ color: "black" }}>{item.word}</span>
        </p>
        <p style={{ color: "gray" }}>
          Definition: <span style={{ color: "black" }}>{item.definition}</span>
        </p>
        <p style={{ color: "gray" }}>
          Word Class: <span style={{ color: "black" }}>{item.wordClass}</span>
        </p>
        <hr></hr>
      </div>
    );
  });
};

DisplayWords.propTypes = {
  vocabList: PropTypes.array.isRequired,
};

DisplayWords.defaultProps = {
  vocabList: [{ word: "default", definition: "none" }],
};

export default DisplayWords;
