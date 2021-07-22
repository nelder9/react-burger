import {
  GET_ITEMS_FAILED,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS
} from './index';

const URL = 'https://norma.nomoreparties.space/api/ingredients'

const getData = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

export function getItems() {
  return function (dispatch) {
    dispatch({
      type: GET_ITEMS_REQUEST
    });
    getData().then(res => {
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
    }).catch((e) => {
      console.log(e, 'ошибка');
      dispatch({
        type: GET_ITEMS_FAILED,
      });
    });
  };
}
