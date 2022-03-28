const login = async (payload) => {
  console.log(payload);
  try {
    const response = await fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();

    return { data, response };
  } catch (error) {
    console.log("Error in login function > auth.js", error);
  }
};

const demoLoginFunc = async () => {
  const demoPayload = {
    password: "demo123",
    username: "demo",
  };
  try {
    const response = await fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify(demoPayload),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();

    return { data, response };
  } catch (error) {
    console.log("Error in login function > auth.js", error);
  }
};

export { login, demoLoginFunc };
