import HistoricalCard from "./HistoricalCard";
import SortableContainer from "./SortableContainer";
const HistoricalList = ({ data, currentUser, linkedUser }) => {
  let list = [];

  data?.forEach((item, index) => {
    //accentColor compares logged in user vs expense owner
    if (item.owner === currentUser._id || item.owner === linkedUser._id)
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
            item.ownerName === currentUser.userName ? "dodgerblue" : "#f95959"
          }
        />
      );
  });

  return <SortableContainer list={list} />;
};

export default HistoricalList;
