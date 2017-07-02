import { putComment } from '../db';
import { commentType } from '../reducers/comments';


export const SUCCESS_SUFIX = '_SUCCESS';


export const UPDATE_COMMENTS = 'UPDATE_COMMENTS';

export const updateComments = wrappedComments => ({
  type: UPDATE_COMMENTS,
  payload: wrappedComments,
});

export const upClickComment = id => (dispatch, getState) => {
  const { comments, players } = getState();
  const { steamID64 } = players[id];
  const newComment = {
    ...comments[steamID64],
    type: comments[steamID64].type === commentType.POSITVE ?
      commentType.NEUTRAL :
      commentType.POSITVE,
  };
  dispatch(updateComments({ [steamID64]: newComment }));
  putComment(steamID64, newComment.type, newComment.text);
};

export const downClickComment = id => (dispatch, getState) => {
  const { comments, players } = getState();
  const { steamID64 } = players[id];
  const newComment = {
    ...comments[steamID64],
    type: comments[steamID64].type === commentType.NEGATIVE ?
      commentType.NEUTRAL :
      commentType.NEGATIVE,
  };
  dispatch(updateComments({ [steamID64]: newComment }));
  putComment(steamID64, newComment.type, newComment.text);
};


export const updateCommentText = (id, text) => (dispatch, getState) => {
  const { comments, players } = getState();
  const { steamID64 } = players[id];
  const newComment = { ...comments[steamID64], text };
  dispatch(updateComments({ [steamID64]: newComment }));
  putComment(steamID64, newComment.type, newComment.text);
};


// TODO sort all actions
