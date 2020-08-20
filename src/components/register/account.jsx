 import React, {useState, useEffect} from 'react';
/* eslint-disable react-hooks/exhaustive-deps */

const UserAccount = ({appLink, loader}) => {

  let [error, setError] = useState(null);
  let [loading, setLoader] = useState(false);

  useEffect(() => {

    console.log("Set up running");
  }, []);

  return (
    <React.Fragment>

      {
        !loading ? (
          <form method="POST">
            <div className="row">
            {
                error !== null && (
                  <div className="col-12 mt-2 mb-2 text-center">
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  </div>
                )
              }
              <div className="col-12 mb-2">
                <div className="form-group mb-2">

                    <label htmlFor="">
                      Username
                    </label>

                    <input className="form-control" type="text" placeholder="Username" />

                  </div>
              </div>

              <div className="col-12 mb-2">
                <div className="form-group mb-2">

                    <label htmlFor="">
                      Password
                    </label>

                    <input className="form-control" type="text" placeholder="Password" />

                  </div>
              </div>

              <div className="col-12 mb-2">

                  <button className="btn btn-block btn-primary" type="button" >Complete Registration
                  <i className="ml-2 fa fa-check"></i></button>

              </div>

            </div>
        </form>
        ) : (
          <div className="col-12 mt-5 text-center">
            <img src={loader} width="70" height="70" alt="Loading"/>
          </div>
        )
      }
    </React.Fragment>
  );
}

export default UserAccount;