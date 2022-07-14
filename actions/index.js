import pokeApi from "../apis/pokeApi";
const FETCH_POKE = "FETCH_POKE";

export const fetchPokes = () => {
  return async (dispatch) => {
    const pokesList = await pokeApi.get();
    dispatch({
      type: FETCH_POKE,
      payload: pokesList.data,
    });
  };
};

// import axios from "axios";

// export const fetchPokes = () => {
//   return async (dispatch) => {
//     const pokesList = await axios.get("/pokemon.json");
//     dispatch({
//       type: "FETCH_POKE",
//       payload: pokesList.data,
//     });
//   };
// };
