import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMicroscope, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./btnsComp.css";

const BtnsComp = props => {
  return (
    <div className="btns_unit">
      <button
        className="search_btn"
        onClick={props.search}
        disabled={!props.disableBtn}
      >
        <FontAwesomeIcon icon={faMicroscope} />
      </button>
      <button
        className="delete_btn"
        onClick={props.reset}
        disabled={!props.disableBtn}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default BtnsComp;
