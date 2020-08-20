import React from 'react';

function numberFormatter(number) {
  return Math.abs(number) > 99999999 ? Math.sign(number)*((Math.abs(number)/1000000000).toFixed(1)) + ' B' :
    Math.abs(number) > 99999 ? Math.sign(number)*((Math.abs(number)/1000000).toFixed(1)) + ' M' :
    Math.abs(number) > 999 ? Math.sign(number)*((Math.abs(number)/1000).toFixed(1)) + ' K' : Math.sign(number)*Math.abs(number);
}

function btcToUsd(btc, btcPrice) {
  return btc * btcPrice
}

function getUserBalance() {
  const balance = {
    name: "Nkrumah Frederick",
    btc: 0.64532356,
    usd: "90,345.43"
  }

  return balance;
}

const PriceChangesUI = ({crypto}) => {

  return (
    <React.Fragment>
      <div className="col-xs-12 col-sm-12 col-lg-3 col-xxl-3">
          <div className="widget-card">
              <div className="d-flex justify-content-between align-items-center">
                  <div className="widget-stat">
                      <div className="coin-title">
                          <span><i className={`cc ${crypto.symbol.toUpperCase()}`}></i></span>
                          <h5 className="d-inline-block ml-2 mb-3">{crypto.name} <span>(24h)</span>
                          </h5>
                      </div>

                      {crypto.price_change_percentage_24h > 0 ?
                        <h4>USD {crypto.current_price.toFixed(1)} <span className="badge badge-success ml-2">{crypto.price_change_percentage_24h.toFixed(1)}%</span></h4> :
                        <h4>USD {crypto.current_price.toFixed(1)} <span className="badge badge-danger ml-2">{crypto.price_change_percentage_24h.toFixed(1)}%</span></h4>
                      }

                  </div>
              </div>
          </div>
      </div>
    </React.Fragment>
  );
}

export {numberFormatter, btcToUsd, getUserBalance, PriceChangesUI};
