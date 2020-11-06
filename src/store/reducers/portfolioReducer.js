import { FETCH_PORTFOLIO, ERROR } from "../types";

let initialstate = { portfolioData: [], projection: {}, error: false };
// let initialstate = { portfolioData: [], error: false };

export default function portFolioReducer(state = initialstate, action) {
  switch (action.type) {
    case FETCH_PORTFOLIO:
      return Object.assign(
        {},
        {
          error: false,
          portfolioData: [...action.payload.data],
          projection: { ...action.payload.projection },
        }
      );
    case ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
}
