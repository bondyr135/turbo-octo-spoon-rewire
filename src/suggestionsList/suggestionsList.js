import React from "react";

import "./suggestionsList.css";

const SuggestionsList = props => {
  return (
    <ul
      className="suggestions_list"
      style={{
        display: props.listOfItems.length && props.show ? "block" : "none"
      }}
    >
      {props.listOfItems.slice(0, 5).map(item => (
        <li key={item.term}>{item.term}</li>
      ))}
    </ul>
  );
};

export default SuggestionsList;
