import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
import "frappe-charts/dist/frappe-charts.min.css";

new Chart("#chart", {
  // or DOM element
  data: {
    labels: [
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March"
    ],

    datasets: [
      {
        name: "Net Worth",
        chartType: "line",
        values: [
          828340,
          1892712,
          22881363,
          50338998,
          18054239,
          16210847,
          22010847,
          18108478
        ]
      }
    ],

    yMarkers: [{ label: "USD", value: 1, options: { labelPos: "left" } }],
    yRegions: [
      { label: "Time", start: -10, end: 50, options: { labelPos: "right" } }
    ]
  },

  title: "Net Worth",
  type: "axis-mixed", // or 'bar', 'line', 'pie', 'percentage'
  height: 400,
  colors: ["red", "#ffa3ef", "light-blue"],
  axisOptions: {
    xAxisMode: "tick",
    xIsSeries: true
  },
  barOptions: {
    stacked: false,
    spaceRatio: 0.5
  },
  tooltipOptions: {
    formatTooltipX: (d) => (d + "").toUpperCase(),
    formatTooltipY: (d) => d + " pts"
  }
});
