export const getExpenses = async (userId) => {
  if (!userId) return null;
  try {
    const response = await fetch(`/api/getExpenses/${userId}`);
    const data = await response.json();
    const {
      userExpenses,
      otherUserExpenses,
      calculatedUserExpenses,
      calculatedOtherUserExpenses,
    } = data;

    return {
      userExpenses,
      otherUserExpenses,
      calculatedUserExpenses,
      calculatedOtherUserExpenses,
    };
  } catch (error) {
    console.log("Error in getExpense function:", error);
  }
};

export const getHistoricalExpenses = async () => {
  console.log("historical expenses called.");
  try {
    const response = await fetch(`/api/getHistoricalExpenses`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
