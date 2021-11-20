export const addExpense = async (payload, userId) => {
  payload.userId = userId;
  try {
    const response = await fetch("api/addExpense", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();

    return { data, response };
  } catch (error) {
    console.log(error);
  }
};