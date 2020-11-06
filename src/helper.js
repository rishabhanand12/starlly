export function calcTotalInvested(data) {
  return data.reduce((a, e) => a + e.investedAmt, 0);
}

export function calcAvgCost(amt, qty) {
  return +(amt / qty).toFixed(2);
}

export function calcMarketVal(price, qty) {
  return price * qty;
}

export function calcPortfolioShare(total, investedAmt) {
  return +((investedAmt / total) * 100).toFixed(2);
}

export function calcPL(marketVal, investedAmt) {
  return +(marketVal - investedAmt).toFixed(2);
}

export function calcReturn(PL, investedAmt) {
  return +((PL / investedAmt) * 100).toFixed(2);
}

export function calcProjection(data) {
  var mfCount = 0;
  var etfCount = 0;
  data.forEach((elem) => {
    if (elem.type === "MF") {
      mfCount++;
    } else if (elem.type === "ETF") {
      etfCount++;
    }
  });
  console.log(mfCount, etfCount);
  return {
    mf: mfCount / data.length,
    etf: etfCount / data.length,
  };
}
