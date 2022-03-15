import ExpenseCard from "./ExpenseCard";
import HistoricalCard from "./HistoricalCard";

const HistoricalList = ({ data }) => {
  const list = [];
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
        // clicked={() => delExpenseAndUpdateState(userId, item._id)}
        colorAccent={item.exLabelColor}
      />
    );
  });
  return <div>{list}</div>;
};

export default HistoricalList;
