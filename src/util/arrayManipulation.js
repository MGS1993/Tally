const mergeArray = (array1, array2) => {
  if (array1 === undefined || array2 === undefined) return;

  // console.log(array1, array2);
  return [...array1, ...array2];
};

export default {
  mergeArray,
};
