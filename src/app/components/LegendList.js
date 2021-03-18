import React from "react";
import PropTypes from "prop-types";
import "../css/style.css";
import LegendItem from "./LegendItem";

/**
 * @func LegendList
 * @param {object} props
 * @return {undefined}
 */
export default function LegendList({
  handleShow,
  handleHide,
  showSolarRadiation,
  showHCAirTemperature,
  showDewPoint,
  showVpd,
}) {
  return (
    <div className="legend-container">
      <p>Legends</p>
      <ul>
        <LegendItem
          legend="HC Air Temperature"
          showLegend={showHCAirTemperature}
          handleHide={handleHide}
          handleShow={handleShow}
          name="hcAirTemperature"
        />
        <LegendItem
          legend="Dew Point"
          showLegend={showDewPoint}
          handleHide={handleHide}
          handleShow={handleShow}
          name="dewPoint"
        />
        <LegendItem
          legend="Solar Radiation"
          showLegend={showSolarRadiation}
          handleHide={handleHide}
          handleShow={handleShow}
          name="solarRadiation"
        />
        <LegendItem
          legend="VPD"
          showLegend={showVpd}
          handleHide={handleHide}
          handleShow={handleShow}
          name="vpd"
        />
      </ul>
    </div>
  );
}

LegendItem.propTypes = {
  handleHide: PropTypes.func,
  handleShow: PropTypes.func,
  showSolarRadiation: PropTypes.bool,
  showHCAirTemperature: PropTypes.bool,
  showDewPoint: PropTypes.bool,
  showVpd: PropTypes.bool,
};
