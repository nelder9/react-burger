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
    console.log(e, 'ошибка')
  }
};

export function getItems() {
  return function (dispatch) {
    dispatch({
      type: GET_ITEMS_REQUEST
    });

    getData().then(res => {
      try {
        dispatch({
          type: GET_ITEMS_SUCCESS,
          items: res.data
        });
      } catch (e) {
        console.log(e, 'ошибка')
        dispatch({
          type: GET_ITEMS_FAILED
        });
      }
    });
  };
}
