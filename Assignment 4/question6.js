const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

const lowestThree = [...amdPrices] 
  .sort((a, b) => a - b)
  .slice(0, 3)

console.log("The three lowest prices are", lowestThree);