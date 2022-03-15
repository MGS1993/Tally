import React from "react";
import { ResponsiveContainer, PieChart, Cell, Pie, Legend } from "recharts";
import colors from "../util/colorArray";
import { StyledH1 } from "./styles/Chart.styled";

export const Chart = React.memo(
  ({ chartData, animationFinished, setAnimationFinished }) => {
    return (
      <>
        <StyledH1 animationToggle={animationFinished}>
          Historical Expenses
        </StyledH1>

        <ResponsiveContainer height="60%">
          <PieChart>
            <Pie
              data={chartData.finishedData}
              dataKey="value"
              label={true}
              labelLine={false}
              onAnimationEnd={() => setAnimationFinished(true)}
              legendType="square"
            >
              {chartData.finishedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </>
    );
  }
);
