import * as types from '../constants/ActionTypes';


export const switchFilter = (id) => ({
  type: types.SWITCH,
  id,
});

export const checkClicked = (percents) => ({
  type: types.CHECK_CLICK,
  percents,
});

export function epmty() { }
