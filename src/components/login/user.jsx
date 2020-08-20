import React from 'react';

function SignInUser() {
  return (
    <React.Fragment>

        <div className="row">

          <div className="col-12 mb-2">
            <div className="form-group mb-2">

                <label htmlFor="contactEmail">
                  Username / Email
                </label>

                <input id="email" className="form-control" type="text" placeholder="Username or E-mail address" />

              </div>
          </div>

          <div className="col-12 mb-2">
            <div className="form-group mb-2">

                <label htmlFor="contactEmail">
                  Password
                </label>

                <input id="email" className="form-control" type="password" placeholder="Password" />

              </div>
          </div>

          <div className="col-12 mb-2">

              <button className="btn btn-block btn-primary" type="button">Sign In</button>

          </div>

        </div>

    </React.Fragment>
  );
}

export default SignInUser;
