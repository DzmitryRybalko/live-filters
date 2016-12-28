import * as types from '../constants/ActionTypes';

const initialState = {
  checkedId: '1',
  percents: [0, 100, 50, 25],
};

export default function donut(state = initialState, action) {
  switch (action.type) {
    case types.SWITCH:
      return {
        ...state,
        checkedId: action.id,
      };

    case types.CHECK_CLICK: {
      const percents = state.percents;
      percents[+state.checkedId - 1] += action.percents;
      return {
        ...state,
        percents,
      };
    }


    default: return state;
  }
}
