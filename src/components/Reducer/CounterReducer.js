import { DECREASE, INCREASE, RESET } from "../Action/Constant";

const initialValue = {
  count: 0,
};
const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state
  }
};

 export default counterReducer;