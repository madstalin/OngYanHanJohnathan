const msftData = [
  [190.15, 196.21, 191.07, 194.44],
  [193.61, 195.89, 190.12, 193.40]
];

let totalClose = 0;

for (let i = 0; i < msftData.length; i++) {
  totalClose += msftData[i][3]; 
}

const averageClose = totalClose / msftData.length;

console.log("Average closing price of MSFT is", averageClose.toFixed(2));