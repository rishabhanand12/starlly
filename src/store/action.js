import { FETCH_PORTFOLIO, ERROR } from "./types";
import {
  calcTotalInvested,
  calcProjection,
  calcAvgCost,
  calcMarketVal,
  calcPL,
  calcPortfolioShare,
  calcReturn,
} from "../helper";

function fetchPortfolio(payload) {
  return {
    type: FETCH_PORTFOLIO,
    payload,
  };
}

function fetchPortfolioError() {
  return {
    type: ERROR,
  };
}

export function fetchData(url) {
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        let total = calcTotalInvested(res.data);
        let newData = res.data.map((stock) => {
          stock.avgCost = calcAvgCost(stock.investedAmt, stock.quantity);
          stock.marketVal = calcMarketVal(stock.price, stock.quantity);
          stock.portfolioShare = calcPortfolioShare(total, stock.investedAmt);
          stock.profitLoss = calcPL(stock.marketVal, stock.investedAmt);
          stock.return = calcReturn(stock.profitLoss, stock.investedAmt);
          return stock;
        });
        dispatch(
          fetchPortfolio({
            data: newData,
            projection: calcProjection(newData),
          })
        );
      })
      .catch((err) => dispatch(fetchPortfolioError()));
  };
}


