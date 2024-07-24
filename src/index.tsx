import { Chart, Title, Tooltip, Colors } from "chart.js";
import { Bar } from "solid-chartjs";
import { render } from "solid-js/web";

import hsr75 from "./data/hsr/7_5.json"

Chart.register(Title, Tooltip, Colors);

function App() {
  const chartData = {
    datasets: [
      {
        data: hsr75.probPercents.map((prob, i) => ({x: `${i}回`, y: prob})),
      },
    ],

  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

const root = document.getElementById("root");
if (root) {
  render(() => <App />, root);
}
