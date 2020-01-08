import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

import "./suggestionsList.css";

const AltSuggList = props => {
  //FETCHING CONTENT OF CLICKED ITEM
  const clickHandler = e => {
    e.preventDefault();
    const grandPArentElement = e.target.parentElement;

    //FINDING THE INNERTEXT OF THE ELEMENT.
    //THIS WAS HARD AND PROBABLY NOT THE CLEANEST WAY TO DO THIS
    const clickedValue = grandPArentElement.innerText
      ? grandPArentElement.innerText
      : grandPArentElement.parentElement.innerText
      ? grandPArentElement.parentElement.innerText
      : grandPArentElement.parentElement.parentElement.innerText;

    props.fillUpValue(clickedValue);
  };

  return (
    <ul
      className="suggestions_list"
      style={{
        display: props.listOfItems.length && props.show ? "block" : "none"
      }}
    >
      {props.listOfItems.slice(0, 5).map(item => {
        const value = item.term;
        return (
          <li key={value}>
            <div className="icon_holder" onClick={value => clickHandler(value)}>
              <FontAwesomeIcon className="icon" icon={faAngleDoubleUp} />
            </div>
            &nbsp;
            {value}
          </li>
        );
      })}
    </ul>
  );
};

export default AltSuggList;
