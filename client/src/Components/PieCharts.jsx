import React from "react";
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#ce93d8", "#5c6bc0", "#4dd0e1", "#f48fb1", "#d500f9"];

const PieCharts = ({ data }) => {
  let dataPie = [];
  let totales = [];

  data &&
    data.map((comp) => {
      totales.push(comp.total);
    });

  const sumTotal = totales.reduce((acc, curr) => acc + curr, 0);
  console.log("TOTAAAAAL", sumTotal);

  data &&
    data.map((comp) => {
      const percentage = (comp.total / sumTotal) * 100;
      dataPie.push({
        name: comp.nameAgency,
        value: parseFloat(percentage.toFixed(2)),
      });
    });

  const renderTooltip = (value, name) => {
    const percentage = parseFloat(value).toFixed(2);
    return `${name}: ${percentage}%`;
  };

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            data={dataPie}
            innerRadius={60}
            outerRadius={100}
            fill="#82ca9d"
          >
            {dataPie.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={renderTooltip} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieCharts;
