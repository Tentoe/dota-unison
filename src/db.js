import { commentType } from './reducers/comments';

const { remote } = window.require('electron');
const { app } = remote;
const PouchDB = remote.require('pouchdb');
const path = require('path');


const filePath = path.join(app.getPath('appData'), '/dotally/pouch.db');

const db = new PouchDB(filePath);


export const getComment = id64 => db.get(id64).catch((err) => {
  if (err.name === 'not_found') { return ({ _id: id64, text: '', type: commentType.NEUTRAL }); }
  throw err;
});

export const updateComment = (id64, type, text) =>
  getComment(id64).then(old => db.put({
    ...old,
    text,
    type,
  }));
