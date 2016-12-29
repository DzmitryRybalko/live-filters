import * as types from '../constants/ActionTypes';

const initialState = {
  checkedId: '1',
  percents: [0, 0, 0, 0],
};

function calcLast(percents) {
  const length = percents.length;
  if (length <= 1) return 0;

  let sum = 0;
  for (let i = 0; i < length - 1; i++) {
    sum += percents[i];
  }
  return Math.round(sum / (length - 1));
}

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
      percents[percents.length - 1] = calcLast(percents);

      return {
        ...state,
        percents,
      };
    }


    default: return state;
  }
}
