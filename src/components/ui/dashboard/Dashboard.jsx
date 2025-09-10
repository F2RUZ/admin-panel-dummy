import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const Dashboard = () => {
  const [mapReady, setMapReady] = useState(false);

  // GeoJSON yuklash
  useEffect(() => {
    fetch("/world.json") // public/world.json dan yuklaydi
      .then((res) => res.json())
      .then((geojson) => {
        echarts.registerMap("world", geojson); // registratsiya
        setMapReady(true);
      });
  }, []);

  // Pie chart config
  const pieOption = {
    tooltip: { trigger: "item" },
    series: [
      {
        name: "Distribution",
        type: "pie",
        radius: ["40%", "70%"],
        data: [
          { value: 400, name: "Users" },
          { value: 300, name: "Orders" },
          { value: 300, name: "Revenue" },
          { value: 200, name: "Products" },
        ],
      },
    ],
  };

  // Bar chart config
  const barOption = {
    tooltip: {},
    xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May"] },
    yAxis: { type: "value" },
    series: [
      {
        data: [400, 300, 500, 200, 600],
        type: "bar",
        itemStyle: { borderRadius: [6, 6, 0, 0], color: "#6366f1" },
      },
    ],
  };

  // World map config
  const mapOption = {
    tooltip: { trigger: "item" },
    visualMap: {
      min: 0,
      max: 1000,
      text: ["High", "Low"],
      calculable: true,
      inRange: { color: ["#ec4899", "#6366f1"] },
    },
    series: [
      {
        name: "Users",
        type: "map",
        map: "world", // ro‘yxatdan o‘tkazilgan world.json ishlatiladi
        roam: true,
        emphasis: { label: { show: true } },
        data: [
          { name: "United States", value: 800 },
          { name: "Uzbekistan", value: 500 },
          { name: "China", value: 950 },
          { name: "India", value: 700 },
        ],
      },
    ],
  };

  return (
    <div className="p-8 space-y-8">
      {/* Statistika */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { title: "Users", end: 1200 },
          { title: "Orders", end: 540 },
          { title: "Revenue ($)", end: 87500 },
          { title: "Products", end: 320 },
        ].map((stat, i) => (
          <div
            key={i}
            className="rounded-2xl shadow-lg bg-neutral-900/80 text-white p-6"
          >
            <h2 className="text-lg mb-2">{stat.title}</h2>
            <p className="text-3xl font-bold">
              <CountUp end={stat.end} duration={2} separator="," />
            </p>
          </div>
        ))}
      </div>

      {/* Pie & Bar */}
      <div className="grid grid-cols-2 gap-8">
        <div className="rounded-2xl shadow-lg bg-neutral-900/80 text-white p-4">
          <h2 className="mb-4 text-lg font-semibold">Distribution</h2>
          <ReactECharts option={pieOption} style={{ height: "300px" }} />
        </div>

        <div className="rounded-2xl shadow-lg bg-neutral-900/80 text-white p-4">
          <h2 className="mb-4 text-lg font-semibold">Monthly Growth</h2>
          <ReactECharts option={barOption} style={{ height: "300px" }} />
        </div>
      </div>

      {/* World Map */}
      <div className="rounded-2xl shadow-lg bg-neutral-900/80 text-white p-4">
        <h2 className="mb-4 text-lg font-semibold">World Users Map</h2>
        {mapReady ? (
          <ReactECharts option={mapOption} style={{ height: "500px" }} />
        ) : (
          <p>Loading map...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
