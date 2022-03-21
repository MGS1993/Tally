const getLinkedUsers = async (userId) => {
  try {
    const response = await fetch(`/api/getLinkedUsers/${userId}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error in getUsers function", error);
  }
};

export default getLinkedUsers;
