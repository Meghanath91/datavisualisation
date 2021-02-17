export default Object.freeze({
  commonOptions: {
    chart: {
      zoomType: "x",
    },
    title: {
      text: "Field Climate Sample Graph",
    },
    xAxis: {
      type: "datetime",
      gridLineWidth: 1,
      gridZIndex: 4,
      accessibility: {
        rangeDescription: "Range: Jan 3rd to Jan 8th",
      },
    },
    yAxis: [
      {
        title: {
          text: "Temperature [°C]",
        },
      },
      {
        title: {
          text: "Solar radiation [W/m2]",
        },
        opposite: true,
      },
      {
        title: {
          text: "VPD [kPa]",
        },
        opposite: true,
      },
    ],
    tooltip: {
      crosshairs: true,
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
      x: 0,
      y: 0,
    },
  }
})