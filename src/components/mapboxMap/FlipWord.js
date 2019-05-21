import React from "react";
import Flip from "react-reveal/Flip";

const FlipWord = ({ term }) => {
  return <Flip top>&nbsp; {term}</Flip>;
};

export default FlipWord;
