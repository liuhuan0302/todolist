import {SET_STORE_VALUE,INSERT_STORE_DATA,REMOVE_STORE_DATA} from './actionTypes';

export const getActionChange = (value) => ({
  type: SET_STORE_VALUE,
  value,
})

export const getActionClick = _=> ({
  type: INSERT_STORE_DATA,
})

export const getActionRemove = (index) => ({
  type:REMOVE_STORE_DATA,
  index,
})
