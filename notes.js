//
// const { BigInteger } = require('jsbn');
//
// // FILE FOR NOTES. NOT TO BE EXECUTED
//
//
// // remote Requires
//
// // const electron = window.require('electron');
// //
// // const fs = electron.remote.require('fs');
// // const ipcRenderer = electron.ipcRenderer;
// //
// // const remote = window.require('electron').remote;
// // const fs = remote.require('fs');
// //
// // 76561198170707860,
// // 76561197997634380,
// // 76561197963736980,
// // 76561198053651410,
// // 76561198273252690,
// // 76561198241427630,
// // 76561198355280480,
// // 76561198161081700,
// // 76561198037122140,
// // 76561197996623540
// // 76561198355280477
//
// const bi = new BigInteger('76561198355280477');
//
// console.log(bi.toString());
//
// const phrase = './de.svg';
// const myRegexp = /\.\/(.*)\.svg/;
// const match = myRegexp.exec(phrase);
// console.log(match);

// const countries = require('i18n-iso-countries');
//
// console.log(countries.getName('us', 'en'));

const prom = Promise.resolve(234);

prom.then(i => i + 2).then(console.log);
prom.then(console.log);
