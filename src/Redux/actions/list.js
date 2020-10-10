import ActionTypes from '../types'

export const setList = (data) => {
  return {
    type: ActionTypes.SET_ALL,
    payload: data
  };
}

export const setSelected = (data) => {
  return {
    type: ActionTypes.SET_SELECTED,
    payload: data
  };
}