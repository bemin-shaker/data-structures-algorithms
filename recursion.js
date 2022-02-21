function countdown(x) {
  if (x == 0) {
    console.log("DONE!");
    return;
  }
  console.log(x);
  countdown(x - 1);
}

function power(num, pwr) {
  if (pwr == 0) {
    return 1;
  } else {
    return num * power(num, pwr - 1);
  }
}
module.exports = {
  power,
};
