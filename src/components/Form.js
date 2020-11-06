import React, { useState } from "react";

export default function Form(props) {
  let [scrip, setScrip] = useState("");
  let [type, setType] = useState("");
  let [quantity, setQuantity] = useState();
  let [marketVal, setMarketVal] = useState();
  let [price, setPrice] = useState();
  let [avgCost, setAvgCost] = useState();
  let [investedAmt, setInvestedAmt] = useState();
  let [percentageInvested, setPercentageInvested] = useState();
  let [unrealisedProfitLoss, setUnrealisedProfitLoss] = useState();
  let [returns, setReturns] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      let url = "/api/stocks";
      let req = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          scrip,
          type,
          quantity,
          marketVal,
          price,
          avgCost,
          investedAmt,
          percentageInvested,
          unrealisedProfitLoss,
          returns,
        }),
      });
      console.log(req.status);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setScrip(e.target.value)}
          value={scrip}
          placeholder="Scrip"
        />
        <input
          type="text"
          onChange={(e) => setType(e.target.value)}
          value={type}
          placeholder="Type"
        />
        <input
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          step="any"
          placeholder="Quantity"
        />
        <input
          type="number"
          onChange={(e) => setMarketVal(e.target.value)}
          value={marketVal}
          step="any"
          placeholder="Market Value"
        />
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          step="any"
          placeholder="Price"
        />
        <input
          type="number"
          onChange={(e) => setAvgCost(e.target.value)}
          value={avgCost}
          step="any"
          placeholder="Average Cost"
        />
        <input
          type="number"
          onChange={(e) => setInvestedAmt(e.target.value)}
          value={investedAmt}
          step="any"
          placeholder="Invested Amount"
        />
        <input
          type="number"
          onChange={(e) => setPercentageInvested(e.target.value)}
          value={percentageInvested}
          step="any"
          placeholder="Percentage Invested"
        />
        <input
          type="number"
          onChange={(e) => setUnrealisedProfitLoss(e.target.value)}
          value={unrealisedProfitLoss}
          step="any"
          placeholder="Unrealised P/L"
        />
        <input
          type="number"
          onChange={(e) => setReturns(e.target.value)}
          value={returns}
          step="any"
          placeholder="Return"
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
