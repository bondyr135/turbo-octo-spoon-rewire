import React, { useState } from "react";
import axios from "axios";

import SearchBar from "../searchBar/searchBar";
import BtnsComp from "../btnsComp/btnsComp";

import "./mainComp.css";

const MainComp = props => {
  const [currValue, setCurrValue] = useState("");

  //BINDING INPUT VALUE
  const someonesTyping = async e => {
    e.preventDefault();
    const value = e.target.value;
    setCurrValue(value);
    if (value === "") {
      setCurrValue("");
      return refreshSearchBar(e);
    }
  };

  //AUTOCOMPLETE FUNC
  const fillItUp = value => {
    setCurrValue(value);
  };

  //////Btns functionality

  const refreshSearchBar = e => {
    e.preventDefault();
    setCurrValue("");
  };

  const clickToSearch = e => {
    e.preventDefault();
    const value = currValue;
    refreshSearchBar(e);
    axios.get(`http://localhost:5000/search?q=${value}`).then(res => {
      alert(`Searching for "${value}"`);
      window.location.reload();
    });
  };

  return (
    <div className="father_of_all_comps">
      <SearchBar
        className="search_container"
        autoComplete={fillItUp}
        typing={someonesTyping}
        value={currValue}
      />
      <BtnsComp
        className="btns_unit"
        reset={refreshSearchBar}
        search={clickToSearch}
        disableBtn={currValue.length > 0}
      />
    </div>
  );
};

export default MainComp;
