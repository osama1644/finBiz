import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function SingleChart() {
const labels = [
  "",
  "12:00AM", // البداية من 12 منتصف الليل
  "01:00AM",
  "02:00AM",
  "03:00AM",
  "04:00AM",
  "05:00AM",
  "06:00AM",
  "07:00AM",
  "08:00AM",
  "09:00AM",
  "10:00AM",
  "11:00AM",
];

  const data = {
   labels,
    datasets: [
      {
        label: "Hourly Data",
        data: [
          6700, 5000, 5000, 6700, 7500, 6700, 5600, 3600, 3400, 4200, 4200,
          7000, 6500,6000
        ],
        clip: 0,
        borderColor: "#40F2D9",
        backgroundColor: "rgba(64, 242, 217, 0.1)",
        tension: 0.45,
        fill: true,
        pointRadius: [0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0], 
        pointStyle: ["", "", "", "", "", "", "circle", "", "", "", "", "", ""], 
        pointBackgroundColor: "#fff"
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: 20, bottom: 20, left: 0, right: 0 },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#222",
        titleColor: "#fff",
        bodyColor: "#eee",
        padding: 10,
        borderRadius: 8,
      },
    },
    scales: {
      x: {
        ticks: { color: "#888", maxRotation: 0, minRotation: 0 },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        min: 1000,
        suggetedMax: 6000,
        ticks: { color: "#888", stepSize: 1000 },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "470px",
        overflowY:"hidden",
        overflowX: "auto",
        padding: "10px 20px",
        background: "#111",
        borderRadius: "8px",
      }}
    >
      <div style={{display:"flex",justifyContent:"space-between" , alignItems:"center" ,color:"var(--mainText-color)",padding:"0 20px"}}>
        <p>Spend Overview</p>
        <div style={{display:"flex",gap:"20px" ,alignItems:"center"}}>
          <p>Daily</p>
          <p>Weekly</p>
          <p>monthly</p>
          <p>yearly</p>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}

export default SingleChart;
