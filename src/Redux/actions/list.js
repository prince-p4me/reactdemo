import ActionTypes from '../types'

export const setList = (data) => {
  return {
    type: ActionTypes.DECREMENT,
    payload: data
  };
}