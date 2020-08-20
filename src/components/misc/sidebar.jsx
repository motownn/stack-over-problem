import React from 'react';
import * as appLinks from "./app_links";

function UserSideBar(props) {

  return (
    <div className="sidebar">
        <div className="menu">
            <ul>
                <li>
                {
                  props.sidebar === "dashboard" ? (
                    <a href={appLinks.default.dashboard} className="active" data-toggle="tooltip" data-placement="right" title="Dashboard">
                      <span><i className="la la-wallet"></i></span>
                    </a>
                  ) :
                  <a href={appLinks.default.dashboard} data-toggle="tooltip" data-placement="right" title="Dashboard">
                    <span><i className="la la-wallet"></i></span>
                  </a>
                }
                </li>

                <li>
                {
                  props.sidebar === "receive" ? (
                    <a href={appLinks.default.receive} className="active" data-toggle="tooltip" data-placement="right" title="Receive Funds">
                      <span><i className="la la-coins"></i></span>
                    </a>
                  ) :
                  <a href={appLinks.default.receive} data-toggle="tooltip" data-placement="right" title="Receive Funds">
                    <span><i className="la la-coins"></i></span>
                  </a>
                }
                </li>

                <li>
                  {
                    props.sidebar === "transactions" ? (
                      <a href={appLinks.default.transactionsHistory} className="active" data-toggle="tooltip" data-placement="right" title="Transaction Log">
                        <span><i className="la la-file-invoice"></i></span>
                      </a>
                    ) :
                    <a href={appLinks.default.transactionsHistory} data-toggle="tooltip" data-placement="right" title="Transaction Log" >
                      <span><i className="la la-file-invoice"></i></span>
                    </a>
                  }
                </li>
                <li>
                {
                  props.sidebar === "add-funds" ? (
                    <a href={appLinks.default.addFunds} className="active" data-toggle="tooltip" data-placement="right" title="Add Funds">
                      <span><i className="la la-money-bill"></i></span>
                    </a>
                  ) :
                  <a href={appLinks.default.addFunds} data-toggle="tooltip" data-placement="right" title="Add Funds">
                    <span><i className="la la-money-bill"></i></span>
                  </a>
                }
                </li>
                <li>
                {
                  props.sidebar === "exchange-funds" ? (
                    <a href={appLinks.default.exchange} className="active" data-toggle="tooltip" data-placement="right" title="Exchange Funds">
                      <span><i className="la la-exchange"></i></span>
                    </a>
                  ) :
                  <a href={appLinks.default.exchange} data-toggle="tooltip" data-placement="right" title="Exchange Funds">
                    <span><i className="la la-exchange"></i></span>
                  </a>
                }
                </li>
                <li>
                  {
                    props.sidebar === "withdraw-funds" ? (
                      <a href={appLinks.default.withdraw} className="active" data-toggle="tooltip" data-placement="right" title="Withdraw Funds">
                        <span><i className="la la-landmark"></i></span>
                      </a>
                    ) :
                    <a href={appLinks.default.withdraw} data-toggle="tooltip" data-placement="right" title="Withdraw Funds">
                      <span><i className="la la-landmark"></i></span>
                    </a>
                  }
                </li>
                <li>
                  {
                    props.sidebar === "setting" ? (
                      <a href={appLinks.default.settings} className="active" data-toggle="tooltip" data-placement="right" title="Account Settings">
                        <span><i className="la la-cog"></i></span>
                      </a>
                    ) :
                    <a href={appLinks.default.settings} data-toggle="tooltip" data-placement="right" title="Account Settings">
                      <span><i className="la la-cog"></i></span>
                    </a>
                  }
                </li>

                <li>
                  {
                    <a href={appLinks.default.signOut} data-toggle="tooltip" data-placement="right" title="Log out">
                      <span><i className="la la-power-off"></i></span>
                    </a>
                  }
                </li>
            </ul>
        </div>
    </div>
  );
}

export default UserSideBar;
