export const getExpenses = async (userId) => {
  if (!userId) return null;
  try {
    const response = await fetch(`api/getExpenses/${userId}`);
    const data = await response.json();
    return data.userExpenses;
  } catch (error) {
    console.log("Error in getExpense function:", error);
  }
};
