import React from 'react';

export default () => {

  return (
    <div className="card">
        <div className="card-header border-0 py-0">
            <h4 className="card-title">Recent Activities</h4>
            <a href="/">View More </a>
        </div>
        <div className="card-body">
            <div className="transaction-table">
                <div className="table-responsive">
                    <table className="table mb-0 table-responsive-sm fonto">
                        <tbody>
                            <tr>
                                <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                </td>

                                <td>
                                    <span className="badge badge-danger">Sold</span>
                                </td>
                                <td>
                                    <i className="cc BTC"></i> Bitcoin
                                </td>
                                <td>
                                    Using - Bank *******5264
                                </td>
                                <td className="text-danger">-0.000242 BTC</td>
                                <td>-0.125 USD</td>
                            </tr>
                            <tr>
                                <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                </td>
                                <td>
                                    <span className="badge badge-success">Buy</span>
                                </td>
                                <td>
                                    <i className="cc LTC"></i> Litecoin
                                </td>
                                <td>
                                    Using - Card *******8475
                                </td>
                                <td className="text-success">-0.000242 BTC</td>
                                <td>-0.125 USD</td>
                            </tr>
                            <tr>
                                <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                </td>
                                <td>
                                    <span className="badge badge-danger">Sold</span>
                                </td>
                                <td>
                                    <i className="cc XRP"></i> Ripple
                                </td>
                                <td>
                                    Using - Card *******8475
                                </td>
                                <td className="text-danger">-0.000242 BTC</td>
                                <td>-0.125 USD</td>
                            </tr>
                            <tr>
                                <td><span className="buy-thumb"><i className="la la-arrow-up"></i></span>
                                </td>
                                <td>
                                    <span className="badge badge-success">Buy</span>
                                </td>
                                <td>
                                    <i className="cc DASH"></i> Dash
                                </td>
                                <td>
                                    Using - Card *******2321
                                </td>
                                <td className="text-success">-0.000242 BTC</td>
                                <td>-0.125 USD</td>
                            </tr>
                            <tr>
                                <td><span className="sold-thumb"><i className="la la-arrow-down"></i></span>
                                </td>
                                <td>
                                    <span className="badge badge-danger">Sold</span>
                                </td>
                                <td>
                                    <i className="cc BTC"></i> Bitcoin
                                </td>
                                <td>
                                    Using - Card *******2321
                                </td>
                                <td className="text-danger">-0.000242 BTC</td>
                                <td>-0.125 USD</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
