const getUsers = async () => {
  try {
    const response = await fetch("/api/getAllUsers");
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error in getUsers function", error);
  }
};

export default getUsers;
