export const getExpenses = async (userId) => {
  try {
    const response = await fetch(`api/getExpenses/${userId}`);
    return await response.json();
  } catch (error) {
    console.log("Error in getExpense function:", error);
  }
};
