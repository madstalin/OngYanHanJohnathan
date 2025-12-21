const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Step 1: Calculate the 7-day SMA
let sum = 0;

for (let i = 0; i < amdPrices.length; i++) {
  sum += amdPrices[i];
}

const sma = sum / amdPrices.length;

// Step 2: Count days above the SMA
let countAboveSMA = 0;

for (let i = 0; i < amdPrices.length; i++) {
  if (amdPrices[i] > sma) {
    countAboveSMA++;
  }
}