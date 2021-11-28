export const deleteExpense = async (userId, itemId) => {
  try {
    const response = await fetch(
      `https://tally-back-end.herokuapp.com/api/deleteExpense/${userId}/${itemId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error in delete expense function:", error);
  }
};
