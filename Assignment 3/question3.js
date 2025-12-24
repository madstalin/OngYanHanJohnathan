const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
}

const dataResult =
  Number(disneyData.open) - Number(disneyData.high) + Number(disneyData.low) - Number(disneyData.close);

console.log(dataResult.toFixed(2));