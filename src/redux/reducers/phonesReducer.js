import { ActionTypes } from "../constants/action-types";
const intialState = {
  phones: [],
};

export const phonesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PHONES:
      return { ...state, phones: payload };
    default:
      return state;
  }
};

export const selectedPhonesReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PHONE:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PHONE:
      return {};
    default:
      return state;
  }
};
