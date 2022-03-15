import HistoricalCard from "./HistoricalCard";
import SortableContainer from "./SortableContainer";
const HistoricalList = ({ data }) => {
  let list = [];

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
      />
    );
  });

  return <SortableContainer list={list} />;
};

export default HistoricalList;
