import * as types from '../constants/ActionTypes';

const initialState = {
  checkedId: '1',
  percents: [150, 100, 50, 25],
};

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
