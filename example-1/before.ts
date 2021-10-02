exports.calc = function (dist: number, d: Date) {
  if (d.getHours() >= 22) {
    return dist * 3.9;
  } else {
    // sunday
    if (d.getDay() === 0) {
      return dist * 2.9;
    } else {
      return dist * 2.1;
    }
  }
};
