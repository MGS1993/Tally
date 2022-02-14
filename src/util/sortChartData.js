const sortChartData = (hData, user) => {
  const userData = [];
  const otherUserData = [];
  let userName;
  let otherUserName;

  //Dynamically changes names
  if (user.userName === "manuel") {
    userName = "Manuel";
    otherUserName = "Victoria";
  } else {
    userName = "Victoria";
    otherUserName = "Manuel";
  }
  //splits hData into variables with relevant data
  for (let i = 0; i < hData.length; i++) {
    hData[i].ownerName === user.userName
      ? userData.push({
          name: hData[i].ownerName,
          value: parseInt(hData[i].cost),
        })
      : otherUserData.push({
          name: hData[i].ownerName,
          value: parseInt(hData[i].cost),
        });
  }

  //returns final data object to be used for graph
  const totalData = () => {
    //adds up costs from object array into it's own variable
    let userTotal = userData.reduce((sum, item) => sum + item.value, 0);
    let otherUserTotal = otherUserData.reduce(
      (sum, item) => sum + item.value,
      0
    );

    //Building final object array with processed data
    const total = [
      { name: userName, value: userTotal },
      { name: otherUserName, value: otherUserTotal },
    ];
    return total;
  };
  // stores totalData return into a assignable variable
  let finishedData = totalData();
  return {
    finishedData,
  };
};

export default sortChartData;
