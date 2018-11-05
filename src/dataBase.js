import Datastore from 'lowdb'
import LodashId from 'lodash-id'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'
import fs from 'fs-extra';
import { remote, app } from 'electron'

const APP = process.type === 'renderer' ? remote.app : app;

const STORE_PATH = APP.getPath('userData');
console.log(STORE_PATH);

if (process.type !== 'renderer') {
  if (!fs.pathExistsSync(STORE_PATH)) {
    fs.mkdirpSync(STORE_PATH)
  }
}

console.log(path.join(STORE_PATH, 'db.json'));
const adapter = new FileSync(path.join(STORE_PATH, 'db.json'));

const db = Datastore(adapter);
db._.mixin(LodashId)

// if (!db.has('uploaded').value()) {
//   db.set('uploaded', []).write()
// }

// if (!db.has('picBed').value()) {
//   db.set('picBed', {
//     current: 'weibo'
//   }).write()
// }

// if (!db.has('shortKey').value()) {
//   db.set('shortKey', {
//     upload: 'CommandOrControl+Shift+P'
//   }).write()
// }

export default db