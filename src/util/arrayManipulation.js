const mergeArray = (array1, array2, sortOrder) => {
  if (array1 === undefined || array2 === undefined) return;
  const mergedArray = [...array1, ...array2];
  let sortedArray;

  if (sortOrder === "descending") {
    sortedArray = mergedArray.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  }
  return mergedArray;
};

export { mergeArray };
