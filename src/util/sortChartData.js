const sortChartData = (hData, user) => {
  const userData = [];
  const otherUserData = [];

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
  const totalData = () => {
    let userTotal = userData.reduce((sum, item) => sum + item.value, 0);
    let otherUserTotal = otherUserData.reduce(
      (sum, item) => sum + item.value,
      0
    );

    const total = [
      { name: "manuel", value: userTotal },
      { name: "victoria", value: otherUserTotal },
    ];

    // console.log("total", total);
    // console.log(userTotal);
    // console.log(otherUserTotal);

    return total;
  };

  let finishedData = totalData();
  // console.log(userData);
  // totalData();
  // console.log(finishedData);
  return {
    finishedData,
  };
};

export default sortChartData;
