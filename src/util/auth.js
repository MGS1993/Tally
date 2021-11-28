const login = async (payload) => {
  try {
    const response = await fetch(
      `https://tally-back-end.herokuapp.com/api/login`,
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const data = await response.json();

    return { data, response };
  } catch (error) {
    console.log("Error in login function > auth.js", error);
  }
};

export default {
  login,
};
