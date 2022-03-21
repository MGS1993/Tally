const sortChartData = (hData, currentUser, linkedUser) => {
  if (!hData) return;
  const userData = [];
  const otherUserData = [];
  let userName = currentUser?.userName;
  let otherUserName = linkedUser?.userName;
  // console.log("userData:", userData);
  // console.log("otheruserData:", otherUserData);
  //splits hData into variables with relevant data
  for (let i = 0; i < hData.length; i++) {
    if (hData[i].ownerName === userName) {
      userData.push({
        name: hData[i].ownerName,
        value: parseInt(hData[i].cost),
      });
    } else if (hData[i].ownerName === linkedUser?.userName) {
      otherUserData.push({
        name: hData[i].ownerName,
        value: parseInt(hData[i].cost),
      });
    }
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
      { name: userName, value: userTotal, color: "dodgerblue" },
      { name: otherUserName, value: otherUserTotal, color: "#f95959" },
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
