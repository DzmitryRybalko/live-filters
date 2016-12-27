import * as types from '../constants/ActionTypes';

const initialState = {
  checkedId: 0,
}

export default function donut(state = initialState, action) {
  switch (action.type) {
    case types.SWITCH:
      return {
        ...state,
        checkedId: action.id,
      };

    default: return state;
  }
}
