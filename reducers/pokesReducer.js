// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], { type, payload }) => {
  switch (type) {
    case "FETCH_POKE":
      return [...payload];

    default:
      return state;
  }
};
