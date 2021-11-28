export const getExpenses = async (userId) => {
  if (!userId) return null;
  try {
    const response = await fetch(
      `https://tally-back-end.herokuapp.com/api/getExpenses/${userId}`
    );
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
