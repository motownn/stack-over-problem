import React from 'react';
import { getUserBalance } from './';
import * as appLinks from '../misc/app_links';

export default () => {
  return (
    <div className="header dashboard">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                        <a className="navbar-brand" href="index.html"><img src="/images/logo.png" alt=""/></a>

                        <div className="dashboard_log my-2 fonto">
                            <div className="d-flex align-items-center">
                                <div className="account_money">
                                    <ul>
                                        <li className="crypto">
                                            <span>{getUserBalance().btc}</span>
                                            <i className="cc BTC-alt"></i>
                                        </li>
                                        <li className="usd">
                                            <span>${getUserBalance().usd} </span>
                                            <i className="las la-donate" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="profile_log dropdown">
                                    <div className="user" data-toggle="dropdown">
                                        <span className="thumb"><i className="la la-user"></i></span>
                                        <span className="name">{getUserBalance().name}</span>
                                        <span className="arrow"><i className="la la-angle-down"></i></span>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href={appLinks.default.settings} className="dropdown-item">
                                            <i className="la la-user"></i> Account
                                        </a>

                                        <a href={appLinks.default.securityHistory} className="dropdown-item">
                                            <i className="la la-book"></i> Security Log
                                        </a>

                                        <a href={appLinks.default.privacy} className="dropdown-item">
                                            <i className="la la-file-alt"></i> Privacy Policy
                                        </a>

                                        <a href={appLinks.default.terms} className="dropdown-item">
                                            <i className="la la-registered"></i> Terms of Service
                                        </a>


                                        <a href="/" className="dropdown-item logout">
                                            <i className="la la-power-off"></i> Logout
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  );
}
