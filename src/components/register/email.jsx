/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
axios.defaults.withCredentials = true;

function GetEmail({appLink, loader}) {

  var [userEmail, setEmail] = useState("");
  var [error, setError] = useState(null);
  var [loading, setLoader] = useState(false);

  useEffect(() => {

    if(window.sessionStorage.getItem("agreement") === null) {
        window.sessionStorage.clear();
        window.location.href=appLink.register_user_agreement;
        return;
    }

    if(window.sessionStorage.getItem("agreement") === "true" && 
      window.sessionStorage.getItem("token") !== null && 
      window.sessionStorage.getItem("email") !== null) {
      window.location.href=appLink.register_step_2_verify;
      return;
    }
  }, []);

  const verifyEmail = (e) => {
    e.preventDefault();
    setLoader(true);

    if(!isEmail(userEmail)) {
      setLoader(false);
      setError("Your email is not valid. Try again");
      return;
    }

    axios.post(appLink.register_verify_email, {
      email: userEmail
    })
    .then(function (response) {
      if(response.data.success) {
        window.sessionStorage.setItem("token", response.data.token);
        window.sessionStorage.setItem("email", userEmail);
        window.location.href=appLink.register_step_2_verify;
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
        <form method="POST" onSubmit={(e) => verifyEmail(e)}>
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

                      <label htmlFor="contactEmail">
                        Email
                      </label>

                      <input id="contactEmail" className="form-control" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" minLength={3} required={true}/>

                    </div>
                </div>

                <div className="col-12 mb-3">

                        <span className="fonto">
                          By signing up, you agree to the <a href="terms" target="_blank">terms of service</a>
                        </span>

                </div>

                <div className="col-12 mb-2">

                    <button className="btn btn-block btn-primary" type="submit">
                    Verify My Email <i className="fa fa-long-arrow-right ml-1"></i></button>

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

export default GetEmail;
