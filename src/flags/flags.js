function importAll(r) {
  return r.keys().reduce((acc, val) => {
    const match = /\.\/(.*)\.svg/.exec(val);
    return Object.assign(acc, { [match[1]]: r(val) });
  }, {});
}

export default importAll(require.context('./svg/', false, /\.svg$/));
