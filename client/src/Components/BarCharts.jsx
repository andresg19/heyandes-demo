import React from "react";
import {
  BarChart,
  ResponsiveContainer,
  Tooltip,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from "recharts";

const COLORS = ["#ce93d8", "#5c6bc0", "#4dd0e1", "#f48fb1", "#d500f9"];

const dataBar = [
  { month: "01" },
  { month: "02" },
  { month: "03" },
  { month: "04" },
  { month: "05" },
  { month: "06" },
  { month: "07" },
  { month: "08" },
  { month: "09" },
  { month: "10" },
  { month: "11" },
  { month: "12" },
];

const BarCharts = ({ data }) => {
  data &&
    data.forEach(function (objeto) {
      var fecha = new Date(objeto.day);
      var mes = fecha.getMonth();
      var finalPrice = objeto.finalPrice;

      if (dataBar.hasOwnProperty(mes)) {
        if (!dataBar[mes].hasOwnProperty("totalFinalPrice")) {
          dataBar[mes].totalFinalPrice = 0;
        }
        dataBar[mes].totalFinalPrice += finalPrice;
      }
    });

  const finalData = dataBar.map((d) => {
    return {
      month: d.month,
      totalFinalPrice: d.totalFinalPrice ? d.totalFinalPrice : 0,
    };
  });

  console.log(finalData)

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={finalData}>
        <CartesianGrid strokeDasharray="4 1 2" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalFinalPrice" fill="#6b48ff">
          {finalData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;