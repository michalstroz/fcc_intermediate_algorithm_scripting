function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  const countFunc = (alt, rad, u) => {
    return Math.round(2 * Math.PI * Math.sqrt(Math.pow(rad + alt, 3) / u));
  };

  return arr.map((val) => {
    return {
      name: val.name,
      orbitalPeriod: countFunc(val.avgAlt, earthRadius, GM)
    };
  });


}

orbitalPeriod([{
  name: "sputnik",
  avgAlt: 35873.5553
}]);
orbitalPeriod([{
  name: "iss",
  avgAlt: 413.6
}, {
  name: "hubble",
  avgAlt: 556.7
}, {
  name: "moon",
  avgAlt: 378632.553
}]);
