import { handleActions, createAction } from "redux-actions";
import axios from "axios";

function getPostApi(postId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST_PENDING = "GET_POST_PENDING";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_FAILURE = "GET_POST_FAILURE";

const getPostPending = createAction(GET_POST_PENDING);
const getPostSuccess = createAction(GET_POST_SUCCESS);
const getPostFailure = createAction(GET_POST_FAILURE);


// 얘가 thunk 부분
// 기존 redux와 다르게 조건에따른(axios.get에 성공하면 이 액션을 흘려보내고 실패하면 다른 액션을 흘려보내고 이게 가능하단거지)
export const getPost = postId => dispatch => {
  dispatch(getPostPending());
  return getPostApi(postId)
    .then(response => {
      dispatch(getPostSuccess(response));
      return response;
    })
    .catch(error => {
      dispatch(getPostFailure(error));
      throw(error)
    });
};

const initialState = {
  pending : false,
  error : false,
  data : {
    title : '',
    body : '',
  }
}

export default handleActions({
  [GET_POST_PENDING] : (state,action) => {
    return {
      ...state,
      pending : true,
      error : false
    }
  },
  [GET_POST_SUCCESS] : (state,action) =>{
    const {title, body} = action.payload.data
    return {
      ...state,
      pending : false,
      data : {
        title, body
      }
    }
  },
  [GET_POST_FAILURE] : (state,action) =>{
    return {
      ...state,
      error : true,
      pending : false
    }
  }

}, initialState)





