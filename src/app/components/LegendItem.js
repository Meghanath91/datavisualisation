import React from "react";
import "../css/style.css";
import PropTypes from "prop-types";

/**
 * @func LegendItem
 * @param {object} props
 * @return {undefined}
 */
export default function LegendItem({
  legend,
  showLegend,
  handleHide,
  handleShow,
  name,
}) {
  return (
    <div>
      {showLegend ? (
        <div onClick={handleHide} id={name} className="legend-symbol-container">
          <span className={name}></span>
          {legend}
        </div>
      ) : (
          <div
            onClick={handleShow}
            id={name}
            className="legend-symbol-off-container"
          >
            <span className={name}></span>
            {legend}
          </div>
        )}
    </div>
  );
}

LegendItem.propTypes = {
  handleHide: PropTypes.func,
  handleShow: PropTypes.func,
  legend: PropTypes.string,
  name: PropTypes.string,
  showLegend: PropTypes.bool,
};
