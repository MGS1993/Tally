import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Cell,
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
  Pie,
  Tooltip,
  Legend,
} from "recharts";
import sortChartData from "../util/sortChartData";
import colors from "../util/colorArray";

export const Chart = React.memo(({ hData, user }) => {
  // const data = [];

  // for (let i = 0; i < hData.length; i++) {
  //   data.push({
  //     date: hData[i].date,
  //     value: hData[i].cost,
  //     name: hData[i].ownerName,
  //   });
  // }
  const data = sortChartData(hData, user);
  // console.log("userData", userData);
  // console.log("otherUserData", otherUserData);
  // let fullData = [...userData, ...otherUserData];
  // console.log(fullData);
  console.log(data);
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie data={data.finishedData} label={true} labelLine={false}>
          {data.finishedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
});
