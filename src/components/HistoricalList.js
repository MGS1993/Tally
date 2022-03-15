import HistoricalCard from "./HistoricalCard";
import SortableContainer from "./SortableContainer";
const HistoricalList = ({ data, chartData, user }) => {
  let list = [];
  let { finishedData } = chartData;
  console.log(finishedData);

  data?.forEach((item, index) => {
    list.push(
      <HistoricalCard
        key={index}
        cost={item.cost}
        title={item.title}
        date={item.date}
        description={item.description}
        ownerName={item.ownerName}
        splitValue={item.splitValue}
        initialCost={item.initialCost}
        accentColor={
          item.ownerName === user.userName ? "dodgerblue" : "#f95959"
        }
      />
    );
  });

  return <SortableContainer list={list} />;
};

export default HistoricalList;
