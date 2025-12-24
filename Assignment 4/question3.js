const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

let sum = 0;

for (let i = 0; i < amdPrices.length; i++) {
  sum += amdPrices[i];
  
}

const average = sum / amdPrices.length;

let daysAboveAverage = 0;

for (let i = 0; i < amdPrices.length; i++) {
  if (amdPrices[i] > average) {
    daysAboveAverage++;
  }
}

console.log("Number of days above the 7-day SMA: ", daysAboveAverage);