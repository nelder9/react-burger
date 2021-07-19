import {
    GET_ITEMS_FAILED,
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS
  } from './index';

const URL = 'https://norma.nomoreparties.space/api/ingredients'

const getData = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      return data;
    } catch (e) {
        const res = await fetch(URL);
        return res;
    }
  };

export function getItems() {
    return function(dispatch) {
      dispatch({
        type: GET_ITEMS_REQUEST
      });
      getData().then(res => {
          console.log(res, res.success, 7)
        if (res && res.success) {
          dispatch({
            type: GET_ITEMS_SUCCESS,
            items: res.data
          });
        } else {
          dispatch({
            type: GET_ITEMS_FAILED
          });
        }
      });
    };
  }
