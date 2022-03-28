import { useEffect, useState } from "react";
import { StyledHistory } from "../components/styles/History.styled";
import { getHistoricalExpenses } from "../util/getExpenses";
import useApi from "../hooks/useApi";
import { Chart } from "../components/Chart";
import HistoricalList from "../components/HistoricalList";
import sortChartData from "../util/sortChartData";

const History = ({ currentUser, linkedUser }) => {
  const [animationFinished, setAnimationFinished] = useState(false);

  const { data, request: getData } = useApi(getHistoricalExpenses);
  let { allHistoricalExpenses: hData } = data;

  let chartData = sortChartData(hData, currentUser, linkedUser);
  // console.log(chartData);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  // console.log("hData:", hData);
  return (
    <StyledHistory>
      {chartData ? (
        <Chart
          chartData={chartData}
          animationFinished={animationFinished}
          setAnimationFinished={setAnimationFinished}
        />
      ) : null}
      {/* waits for animation to finish before serving HistoricalList */}
      {animationFinished ? (
        <HistoricalList
          data={hData}
          currentUser={currentUser}
          linkedUser={linkedUser}
        />
      ) : null}
    </StyledHistory>
  );
};

export default History;
