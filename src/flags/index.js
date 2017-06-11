import unknown from './svg/unknown.svg';

function importAll(r) {
  return r.keys().reduce((acc, val) => {
    const match = /\.\/(.*)\.svg/.exec(val);
    return Object.assign(acc, { [match[1]]: r(val) });
  }, {});
}


const flags = importAll(require.context('svg-country-flags/svg', false, /\.svg$/));

export default { ...flags, unknown };
