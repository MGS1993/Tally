import { useEffect, useState } from "react";
import { StyledHistory } from "../components/styles/History.styled";
import { getHistoricalExpenses } from "../util/getExpenses";
import useApi from "../hooks/useApi";
import { Chart } from "../components/Chart";
import HistoricalList from "../components/HistoricalList";

const History = ({ user }) => {
  const [animationFinished, setAnimationFinished] = useState(false);
  const { data, request: getData } = useApi(getHistoricalExpenses);
  let { allHistoricalExpenses: hData } = data;
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <StyledHistory>
      {hData && user ? (
        <Chart
          hData={hData}
          user={user}
          animationFinished={animationFinished}
          setAnimationFinished={setAnimationFinished}
        />
      ) : null}
      {/* waits for animation to finish before serving HistoricalList */}
      {animationFinished ? <HistoricalList data={hData} /> : null}
    </StyledHistory>
  );
};

export default History;
