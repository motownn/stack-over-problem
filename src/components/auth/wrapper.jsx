import React from 'react';
import Progress from 'react-progress';

function BodyWrapper(props) {
  const style = `row justify-content-center h-100 align-items-center ${props.marginTop ? `mt-${props.marginTop}` : 'mt-5'}`;
  const logoClass = `col-xl-6 col-md-6 ${props.logoMargin ? `mt-${props.logoMargin}` : 'mt-5'}`;

  return (
    <React.Fragment>
      {props.progressCount && <Progress percent={props.progressCount} color={"#1652F0"} />}

      <div id="main-wrapper">

          <div className="">
              <div className="container h-100">
                  <div className={style}>

                      <div className={logoClass}>
                          <div className="mini-logo text-center my-4">
                              <img src="/images/logo.png" alt="" />
                          </div>
                          <div className="auth-form">

                          <h3 className="mb-0 font-weight-bold text-center fonto">
                            {props.bigText ? props.bigText : "Create an account to get started"}
                          </h3>
                          <div className="mb-6 text-center text-muted">
                             {props.smallText ? props.smallText :
                               "Please use your correct details for payment verification purposes"}
                          </div>

                            {props.children}

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
  )
}

export default BodyWrapper;
