import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

DropDown.propTypes = {
  dropDownList: PropTypes.array,
  selectHandler: PropTypes.func,
};

function DropDown({
  dropDownList,
  selectHandler,
  selectedValue,
  placeHolderText,
}) {
  const [expand, setExpand] = useState(false);

  const [showPlaceHolder, setShowPlaceHolder] = useState(true);

  const onSelectHandler = (value) => {
    setExpand(false);
    setShowPlaceHolder(false);
    selectHandler(value);
  };

  const onResetHandler = (e) => {
    e.stopPropagation();
    setShowPlaceHolder(true);
    setExpand(false);
    selectHandler({});
  };

  return (
    <div className="drop-down-container">
      <div>Customer:</div>
      <div>
        <button onClick={() => setExpand(!expand)} id="select-button">
          <span className="drop-down-text">
            {showPlaceHolder ? placeHolderText : selectedValue.name}
          </span>
          {selectedValue && !selectedValue.name ? (
            <FontAwesomeIcon className="icon" icon={faSort} />
          ) : (
            <FontAwesomeIcon
              onClick={onResetHandler}
              className="icon"
              icon={faCircleXmark}
            />
          )}
        </button>
      </div>
      {expand && dropDownList && dropDownList.length > 0 && (
        <ul className="drop-down-list">
          {dropDownList.map((it) => {
            return (
              <li key={it.id} onClick={() => onSelectHandler(it)}>
                {it.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
