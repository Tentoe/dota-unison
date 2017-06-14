import { createSelector } from 'reselect';

const getPlayerID = (state, props) =>
 (state.players[props.id] ?
   state.players[props.id].steamID64 :
   '');// TODO is ? rally necessary?


const getFromID64 = (playerID, stateProperty) =>
  stateProperty.find(item => item.steamID64 === playerID);


export const getHeroes = createSelector(
    state => state.heroes,
    heroes => heroes,
  );

export const makeSummary = () => createSelector(
  [getPlayerID, state => state.summaries],
  (playerID, summaries) => summaries.find(item => item.steamid === playerID));

export const makeVAC = () => createSelector(
  [getPlayerID, state => state.vac],
  (playerID, vac) => vac.find(item => item.SteamId === playerID));

export const makeFriendList = () => createSelector(
  [getPlayerID, state => state.friendLists], getFromID64);

export const makePlayedGames = () => createSelector(
  [getPlayerID, state => state.playedGames], getFromID64);

export const makeOpenDotaPlayer = () => createSelector(
  [getPlayerID, state => state.openDotaPlayers], getFromID64);

export const makeOpenDotaCounts = () => createSelector(
  [getPlayerID, state => state.openDotaCounts],
    (playerID, openDotaCounts) => {
      const countsObject = getFromID64(playerID, openDotaCounts);
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
  [getPlayerID, state => state.openDotaHeroes], getFromID64);
