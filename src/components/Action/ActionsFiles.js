import { DECREASE, INCREASE, RESET } from "./Constant";

export const countIncrease = () => {
  return {
    type: INCREASE,
  };
};
export const countDecrease = () => {
  return {
    type: DECREASE,
  };
};
export const countReset = () => {
  return {
    type: RESET,
  };
};
