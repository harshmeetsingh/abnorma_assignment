import React from "react";
import PropTypes from "prop-types";
import "./index.css";
DataCard.propTypes = {
  value: PropTypes.number,
  labelText: PropTypes.string,
};
function DataCard({ value = "-", labelText, fontColor }) {
  return (
    <div className="data-card">
      <div className="centre-content data-value" style={{ color: fontColor }}>
        {value}
      </div>
      <div className="centre-content data-label">{labelText}</div>
    </div>
  );
}

export default DataCard;
