const net = require('net');
const exec = require('child_process').exec;

const port = process.env.PORT ? (process.env.PORT - 100) : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () => client.connect({ port }, () => {
  client.end();
  if (!startedElectron) {
    console.log('starting electron'); // eslint-disable-line no-console
    startedElectron = true;
    exec('npm run electron');
  }
}// eslint-disable-line
);

tryConnection();

client.on('error', () => {
  setTimeout(tryConnection, 1000);
});
