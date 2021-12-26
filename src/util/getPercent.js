const getPercentage = (amount, percent) => {
  console.log("amount:", amount);
  console.log("percent:", percent);
  return ((percent * amount) / 100).toFixed(2);
};

export default getPercentage;
