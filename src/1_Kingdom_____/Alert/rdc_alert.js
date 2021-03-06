import { SET_ALERT, REMOVE_ALERT, REMOVE_ALERTS } from '../../Redux/axn_types';

const initialState = [
  {
    id: null,
    msg: null,
    alertType: null,
  },
];
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // Add alert to 'state'
    case SET_ALERT:
      return [...state, payload];
    // Remove alert from 'state'
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);

    case REMOVE_ALERTS:
      return [];

    // Return state
    default:
      return state;
  }
}
