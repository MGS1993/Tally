import { useEffect } from "react";
import { StyledHistory } from "../components/styles/History.styled";
import { getHistoricalExpenses } from "../util/getExpenses";
import useApi from "../hooks/useApi";
import { Chart } from "../components/Chart";

const History = ({ user }) => {
  const { data, request: getData } = useApi(getHistoricalExpenses);
  let { allHistoricalExpenses: hData } = data;
  useEffect(() => {
    getData();
  }, []);

  // console.log(data);
  // console.log(allHistoricalExpenses);
  return (
    <StyledHistory>
      {hData && user ? <Chart hData={hData} user={user} /> : null}
    </StyledHistory>
  );
};

export default History;
