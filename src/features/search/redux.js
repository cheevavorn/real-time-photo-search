import axios from "axios";

// initial state
const initialState = {
  keyword: "",
  results: [],
  success: false,
  error: false
};

// reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_KEYWORD":
      return {
        ...state,
        keyword: action.keyword
      };

    case "SUBMIT_PENDING":
      return {
        ...state,
        success: false,
        error: false
      };
    case "SUBMIT_FULFILLED":
      return {
        ...state,
        results: action.payload.data.results,
        success: true
      };
    case "SUBMIT_REJECTED":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export const setKeyword = keyword => ({
  type: "SET_KEYWORD",
  keyword
});

export const submit = keyword => ({
  type: "SUBMIT",
  payload: axios.get(`https://www.mocky.io/v2/5bfd109e3100007d002cf669`)
});
