import React, { useState } from "react";
import { ResponsiveContainer, PieChart, Cell, Pie, Legend } from "recharts";
import sortChartData from "../util/sortChartData";
import colors from "../util/colorArray";
import { StyledH1 } from "./styles/Chart.styled";

export const Chart = React.memo(({ hData, user }) => {
  const [animationFinished, setAnimationFinished] = useState(false);
  const data = sortChartData(hData, user);
  return (
    <>
      <StyledH1 animationToggle={animationFinished}>
        Historical Expenses
      </StyledH1>

      <ResponsiveContainer height="60%">
        <PieChart>
          <Pie
            data={data.finishedData}
            dataKey="value"
            label={true}
            labelLine={false}
            onAnimationEnd={() => setAnimationFinished(true)}
            legendType="square"
          >
            {data.finishedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
});
