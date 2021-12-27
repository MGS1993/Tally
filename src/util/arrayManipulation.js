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

export { mergeArray };
