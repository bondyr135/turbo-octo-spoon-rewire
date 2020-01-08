import React, { useState } from "react";

//TWO AUTOCOMPLETE LISTS
// import SuggestionsList from "../suggestionsList/suggestionsList";
import AltSuggList from "../suggestionsList/altSuggList";

///CUSTOM HOOK
import useAutoComp from "../useAutoComp/useAutoComp";

import "./searchBar.css";

const SearchBar = props => {
  const [ableSugg, setAbleSugg] = useState(false);

  const enableSuggestions = e => {
    e.preventDefault();

    if (props.value.length < 2) {
      return setAbleSugg(false);
    } else {
      setAbleSugg(true);
    }
  };

  const [suggestions, longEnough] = useAutoComp(props.value, ableSugg);

  return (
    <div className="search_container">
      <input
        className="search_bar"
        placeholder="Maybe we can help you! Start typing..."
        value={props.value}
        onChange={props.typing}
        onKeyUp={enableSuggestions}
      />
      {/* <SuggestionsList
        listOfItems={suggestions}
        show={longEnough}
      /> */}
      <AltSuggList
        listOfItems={suggestions}
        show={longEnough}
        fillUpValue={props.autoComplete}
      />
    </div>
  );
};

export default SearchBar;
