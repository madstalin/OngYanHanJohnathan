const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
}

let open = 120.54;
let high = 122.56;
let low = 120.54;
let close = 121.09;
let volume = 90000;

if (close > open){
    if (volume > 100000){
        console.log("Strong Bullish");
    }
    else{
        console.log("Bullish");
    }
}
else if (close < open){
    if (volume > 10000){
        console.log("Strong Bearish");
    }
    else{
        console.log("Bearish");
    }
}
else if (close === open){
    console.log("Neutral");
}