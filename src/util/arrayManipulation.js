const mergeArray = (array1, array2, sortOrder) => {
  if (array1 === undefined || array2 === undefined) return;
  const mergedArray = [...array1, ...array2];

  if (sortOrder === "descending") {
    mergedArray.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  }
  return mergedArray;
};

const retrieveLinkedUser = (currentUserId, usersObject) => {
  let linkedProfile;
  //always a set of two
  if (!usersObject || usersObject.length !== 2) return;

  usersObject.forEach((element) => {
    if (element._id !== currentUserId) linkedProfile = element;
  });

  return linkedProfile;
};

export { mergeArray, retrieveLinkedUser };
