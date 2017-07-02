import { putComment } from '../db';
import { commentType } from '../reducers/comments';


export const FETCH_OPENDOTAPLAYER = 'FETCH_OPENDOTAPLAYER';
export const FETCH_OPENDOTACOUNTS = 'FETCH_OPENDOTACOUNTS';
export const FETCH_OPENDOTAHEROES = 'FETCH_OPENDOTAHEROES';

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


export const fetchOpenDotaPlayer = player => ({
  type: FETCH_OPENDOTAPLAYER,
  payload: {
    client: 'openDota',
    request: {
      url: `/api/players/${player.steamID3}`,
    },
  },
  player,
}
);


export const fetchOpenDotaCounts = player => ({
  type: FETCH_OPENDOTACOUNTS,
  payload: {
    client: 'openDota',
    request: {
      url: `/api/players/${player.steamID3}/counts?date=91`, //TODO dynamic date
    },
  },
  player,
}
);


export const fetchOpenDotaHeroes = player => ({
  type: FETCH_OPENDOTAHEROES,
  payload: {
    client: 'openDota',
    request: {
      url: `/api/players/${player.steamID3}/heroes?date=91`, //TODO dynamic date
    },
  },
  player,
}
);


// TODO sort all actions
