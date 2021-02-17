import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import LegendList from "./LegendList";
import "../css/style.css";
import data from "../data/sampleData";
import chartOptions from "../config/chartOptions";
import color from "../config/colors";

/**
 * @func MainPage
 * @return {HTML}
 */
export default function MainPage() {

  const [showHCAirTemperature, setShowHCAirTemperature] = useState(true);
  const [showSolarRadiation, setShowSolarRadiation] = useState(true);
  const [showDewPoint, setShowDewPoint] = useState(true);
  const [showVpd, setShowVpd] = useState(true);

  const series = [
    {
      name: "Solar Radiation",
      id: "solarRadiation",
      type: "area",
      color: color.solarRadiation,
      data: data.solarRadiationData,
      visible: showSolarRadiation,
    },
    {
      name: "Dew Point",
      id: "dewPoint",
      type: "line",
      color: color.dewPoint,
      data: data.dewPointData,
      visible: showDewPoint,
      marker: {
        symbol: "square",
      },
    },
    {
      name: "VPD",
      id: "vpd",
      type: "line",
      color: color.vpd,
      data: data.vpdData,
      visible: showVpd,
      marker: {
        symbol: "triangle",
      },
    },
    {
      name: "HC Air Temperature",
      id: "hcAirTemperature",
      type: "spline",
      color: color.hcAirTemperature,
      data: data.averages,
      visible: showHCAirTemperature,
      marker: {
        symbol: "circle",
      },
    },
    {
      name: "range",
      id: "range",
      type: "arearange",
      data: data.ranges,
      lineWidth: 0,
      linkedTo: ":hcAirTemperature",
      color: color.hcAirTemperature,
      fillOpacity: 0.3,
      zIndex: 0,
      visible: showHCAirTemperature,
      marker: {
        enabled: false,
      },
    },
  ];

  const defaultOptions = {
    ...chartOptions.commonOptions,
    series: series,
  };
  const [options, setOptions] = useState(defaultOptions);

  useEffect(() => {
    setOptions({
      series: [
        {
          name: "Solar Radiation",
          id: "solarRadiation",
          type: "area",
          color: color.solarRadiation,
          data: data.solarRadiationData,
          visible: showSolarRadiation,
        },
        {
          name: "Dew Point",
          id: "dewPoint",
          type: "line",
          color: color.dewPoint,
          data: data.dewPointData,
          visible: showDewPoint,
          marker: {
            symbol: "square",
          },
        },
        {
          name: "VPD",
          id: "vpd",
          type: "line",
          color: color.vpd,
          data: data.vpdData,
          visible: showVpd,
          marker: {
            symbol: "triangle",
          },
        },
        {
          name: "HC Air Temperature",
          id: "hcAirTemperature",
          type: "spline",
          color: color.hcAirTemperature,
          data: data.averages,
          visible: showHCAirTemperature,
          marker: {
            symbol: "circle",
          },
        },
        {
          name: "range",
          id: "range",
          type: "arearange",
          data: data.ranges,
          lineWidth: 0,
          linkedTo: ":hcAirTemperature",
          color: color.hcAirTemperature,
          fillOpacity: 0.3,
          zIndex: 0,
          visible: showHCAirTemperature,
          marker: {
            enabled: false,
          },
        },
      ],
    });
  }, [showSolarRadiation, showVpd, showDewPoint, showHCAirTemperature]);

  /**
   * @func handleShow to show chart
   * @param {object} e
   * @return {undefined}
   */
  const handleShow = (e) => {
    e.preventDefault();

    const legendItem = e.target.className;
    const legendItemHtml = e.target.id;

    if (
      legendItem === "hcAirTemperature" ||
      legendItemHtml === "hcAirTemperature"
    ) {
      setShowHCAirTemperature(true);
    } else if (legendItem === "dewPoint" || legendItemHtml === "dewPoint") {
      setShowDewPoint(true);
    } else if (legendItem === "vpd" || legendItemHtml === "vpd") {
      setShowVpd(true);
    } else if (
      legendItem === "solarRadiation" ||
      legendItemHtml === "solarRadiation"
    ) {
      setShowSolarRadiation(true);
    } else {
      console.log("handleShow error");
    }
  };

  /**
   * @func handleHide to hide graph
   * @param {object} e
   * @return {undefined}
   */
  const handleHide = (e) => {
    e.preventDefault();

    const legendItem = e.target.className;
    const legendItemHtml = e.target.id;

    if (
      legendItem === "hcAirTemperature" ||
      legendItemHtml === "hcAirTemperature"
    ) {
      setShowHCAirTemperature(false);
    } else if (legendItem === "dewPoint" || legendItemHtml === "dewPoint") {
      setShowDewPoint(false);
    } else if (legendItem === "vpd" || legendItemHtml === "vpd") {
      setShowVpd(false);
    } else if (
      legendItem === "solarRadiation" ||
      legendItemHtml === "solarRadiation"
    ) {
      setShowSolarRadiation(false);
    } else {
      console.log("handleHide error");
    }
  };

  return (
    <div className="main-container">
      <div className="legend-list-container">
        <LegendList
          handleShow={handleShow}
          handleHide={handleHide}
          showHCAirTemperature={showHCAirTemperature}
          showSolarRadiation={showSolarRadiation}
          showDewPoint={showDewPoint}
          showVpd={showVpd}
        />
      </div>
      <div className="chart-container">
        <Chart options={options} />
      </div>
    </div>
  );
}
