/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

function VerifyEmail({appLink, loader, restart}) {

  var [userCode, setCode] = useState("");
  var [error, setError] = useState(null);
  var [loading, setLoader] = useState(false);

  useEffect(() => {
    if(window.sessionStorage.getItem("agreement") === "true" &&
      window.sessionStorage.getItem("token") !== null &&
      window.sessionStorage.getItem("email") !== null &&
      window.sessionStorage.getItem("verified") !== null ) {
        window.location.href=appLink.register_step_3_info;
        return;
    }

    if(window.sessionStorage.getItem("agreement") === null ||
      window.sessionStorage.getItem("token") === null ||
      window.sessionStorage.getItem("email") === null) {
        window.sessionStorage.clear();
        window.location.href=appLink.register_user_agreement;
        return;
    }
  }, []);

  const verifyEmailCode = (e) => {
    e.preventDefault();
    setLoader(true);

    let token = window.sessionStorage.getItem("token");
    let userEmail = window.sessionStorage.getItem("email");

    axios.post(appLink.register_verify_code, {
      email: userEmail,
      token: token,
      code: userCode
    })
    .then(function (response) {
      console.log(response);
      if(response.data.success) {
        window.sessionStorage.setItem("token", response.data.token);
        window.sessionStorage.setItem("verified", "true");
        window.location.href=appLink.register_step_3_info;
      } else {
        setLoader(false);
        setError(response.data.message);
      }
    })
    .catch(function (error) {
        setLoader(false);
        setError("Unable to reach server. Check Connection");
    });
  }

  return (
    <React.Fragment>

    {
      !loading ? (
        <form method="POST" onSubmit={(e) => verifyEmailCode(e)}>
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

                  <label htmlFor="verificationCode">
                    Verification Code
                  </label>

                  <input onChange={(e) => setCode(e.target.value)} className="form-control" type="text" placeholder="B-XXXXXX" minLength={6} required={true}/>

                </div>
            </div>

            <div className="col-12 mb-3">

                <span className="fonto">
                  <a href={appLink.appRoot} onClick={restart}>Restart Registration</a><br/>
                </span>

            </div>

            <div className="col-12 mb-2">

                <button className="btn btn-block btn-primary" type="submit" >Verify & Continue
                <i className="fa fa-long-arrow-right ml-1"></i></button>

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

export default VerifyEmail;
