const settings = {
  dev: {
    //empty string causes proxy to be called for dev environment
    apiUrl: "",
  },
  prod: {
    apiUrl: "https://tally-back-end.herokuapp.com",
  },
};

const getCurrentSettings = () => {
  if (process.env.NODE_ENV === "production") return settings.prod;
  return settings.dev;
};

export default getCurrentSettings();
