import { createSelector } from 'reselect';

const getPlayerID64 = (state, props) =>
 (state.players[props.id] ?
   state.players[props.id].steamID64 :
   '');// TODO is ? rally necessary?

const getFromID64 = (playerID64, paticularItem) => paticularItem[playerID64];

export const getHeroes = createSelector(
    state => state.heroes,
    heroes => heroes,
  );

export const makeSummary = () => createSelector(
  [getPlayerID64, state => state.summaries], getFromID64);

export const makeVAC = () => createSelector(
  [getPlayerID64, state => state.vac], getFromID64);

export const makeFriendList = () => createSelector(
  [getPlayerID64, state => state.friendLists], getFromID64);

export const makePlayedGames = () => createSelector(
  [getPlayerID64, state => state.playedGames], getFromID64);

export const makeOpenDotaPlayer = () => createSelector(
  [getPlayerID64, state => state.openDotaPlayers], getFromID64);

export const makeComment = () => createSelector(
  [getPlayerID64, state => state.comments], getFromID64);

export const makeOpenDotaCounts = () => createSelector(
  [getPlayerID64, state => state.openDotaCounts],
    (playerID64, openDotaCounts) => {
      const countsObject = getFromID64(playerID64, openDotaCounts);
      if (countsObject && countsObject.game_mode) {
        const { game_mode } = countsObject;
        const winLose = Object.keys(game_mode)
          .reduce((acc, key) => ({
            win: acc.win + game_mode[key].win,
            games: acc.games + game_mode[key].games,
          }), { win: 0, games: 0 });
        if (winLose.games) return Object.assign({}, countsObject, { winLose });
      }

      return countsObject;
    });

export const makeOpenDotaHeroes = () => createSelector(
  [getPlayerID64, state => state.openDotaHeroes], getFromID64);
