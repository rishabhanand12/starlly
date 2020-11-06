import React, { useEffect } from "react";
import { fetchData } from "../store/action";
import { connect } from "react-redux";
import StockList from "./StockList";
import Chart from "./Chart";

function Dashboard(props) {
  let { dispatch } = props;
  useEffect(() => {
    dispatch(
      fetchData(
        "https://d020e91f-dedd-47b1-b15f-e13532add1be.mock.pstmn.io/portfolio"
      )
    );
  }, []);

  let { portfolioData, projection, error } = props.state;
  // if (error) throw new Error(error);
  if (!portfolioData) return <div className="loader">Loading...</div>;

  return (
    <>
      <h1 className="font-bol font-lg text-center padding margin">Portfolio</h1>
      <section className="dashboard sb flex container">
        <div className="w-78">
          {portfolioData.map((stock, index) => {
            return <StockList key={index} stock={stock} />;
          })}
        </div>
        <div className="flex ac bg-gray w-20 margin justify-center bg-white">
          <Chart
            mf={projection.mf * 100 || 0}
            etf={projection.etf * 100 || 0}
          />
        </div>
      </section>
    </>
  );
}

function mapstate(state) {
  return { state };
}

export default connect(mapstate)(Dashboard);
