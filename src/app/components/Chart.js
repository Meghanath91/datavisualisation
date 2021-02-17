import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import highchartsMore from "highcharts/highcharts-more";
import PropTypes from "prop-types";

highchartsMore(Highcharts);

/**
 * @func Chart
 * @param {object} props
 * @return {undefined}
 */
export default function Chart({ options }) {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

Chart.propTypes = {
  options: PropTypes.object,
};
