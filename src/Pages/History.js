import { useEffect } from "react";
import { StyledHistory } from "../components/styles/History.styled";
import { getHistoricalExpenses } from "../util/getExpenses";
import useApi from "../hooks/useApi";

const History = () => {
  const { data, setData, request: getData } = useApi(getHistoricalExpenses);
  let { allHistoricalExpenses } = data;
  useEffect(() => {
    getData();
  }, []);

  return <StyledHistory>history</StyledHistory>;
};

export default History;
