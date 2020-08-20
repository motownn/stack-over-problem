/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

function UserAgreement({nextPage}) {

  useEffect(() => {
    if(window.sessionStorage.getItem("agreement") === "true") {
      window.location.href=nextPage;
      return;
    }
  }, []);

  const createButton = () => {
    if(window.sessionStorage.getItem("agreement") === null) {
      window.sessionStorage.setItem("agreement", "true");
      window.location.href=nextPage;
    } else {
      window.sessionStorage.setItem("agreement", "true");
      window.location.href=nextPage;
    }
    return;
  }

  return (
    <React.Fragment>

        <div className="row">

          <div className="col-12 mb-2">

              <button className="btn btn-block btn-primary" type="button" onClick={createButton}>
              Create My Account <i className="fa fa-long-arrow-right"></i></button>

          </div>

        </div>

    </React.Fragment>
  );
}

export default UserAgreement;
