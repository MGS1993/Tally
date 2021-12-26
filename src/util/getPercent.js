const getPercentage = (amount, percent) => {
  return ((percent * amount) / 100).toFixed(2);
};

export default getPercentage;
