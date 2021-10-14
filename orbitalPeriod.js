function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var pi = Math.PI;
  for (let obj of arr) {
    let a = obj.avgAlt;
    obj.orbitalPeriod = fomula(a);
    delete obj.avgAlt;
  }
  function fomula(a) {
    return Math.round(2 * pi * (Math.sqrt(Math.pow(a+earthRadius, 3)/GM)));
  }
  return arr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])