/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

const PersonalInfo = ({appLink, loader, restart}) => {

  let [selectedCountry, setSelectedCountry] = useState(null);
  let [supportedCountry, setSupportedCountry] = useState(null);
  let [firstName, setFirstName] = useState("");
  let [lastName, setLasttName] = useState("");
  let [userPhone, setPhone] = useState("");
  let [error, setError] = useState(null);
  let [loading, setLoader] = useState(false);

  useEffect(() => {
    if(window.sessionStorage.getItem("agreement") === "true" &&
      window.sessionStorage.getItem("token") !== null &&
      window.sessionStorage.getItem("email") !== null &&
      window.sessionStorage.getItem("country_code") !== null &&
      window.sessionStorage.getItem("firstName") !== null &&
      window.sessionStorage.getItem("lastName") !== null &&
      window.sessionStorage.getItem("userPhone") !== null &&
      window.sessionStorage.getItem("verified") !== null ) {
        window.location.href=appLink.register_step_4_location;
        return;
    }

    if(window.sessionStorage.getItem("agreement") === null ||
      window.sessionStorage.getItem("token") === null ||
      window.sessionStorage.getItem("verified") === null ||
      window.sessionStorage.getItem("email") === null) {
        window.sessionStorage.clear();
        window.location.href=appLink.register_user_agreement;
        return;
    }

    getSupportedCountries();
  }, []);

  const getSupportedCountries = () => {
    setLoader(true);

    axios.get(appLink.getCountries)
    .then(function (response) {
      if(response.data.success) {
        setSupportedCountry(response.data.countries);
        setLoader(false);
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

  const updateKYC = (e) => {
    e.preventDefault();
    setLoader(true);

    if(firstName.length < 3) {
      setLoader(false);
      setError("First name is not valid");
      return;
    }

    if(lastName.length < 3) {
      setLoader(false);
      setError("Last name is not valid");
      return;
    }

    if(userPhone.length < 5) {
      setLoader(false);
      setError("Phone number is not valid");
      return;
    }
    
    window.sessionStorage.setItem("country_code", supportedCountry[selectedCountry].country_code);
    window.sessionStorage.setItem("firstName", firstName);
    window.sessionStorage.setItem("lastName", lastName);
    window.sessionStorage.setItem("userPhone", userPhone);

    window.location.href=appLink.register_step_4_location;
  }

  return (
    <React.Fragment>

    {
      !loading ? (
        <form method="POST" onSubmit={updateKYC}>
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

              <div className="col-12 mb-2 mt-2">
                <div className="row">

                  <div className="col-6">
                    <div className="form-group mb-2">

                      <label htmlFor="">
                        First Name
                      </label>

                      <input className="form-control" type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required={true}/>

                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group mb-2">

                        <label htmlFor="">
                          Last Name
                        </label>

                        <input className="form-control" type="text" onChange={(e) => setLasttName(e.target.value)} placeholder="Last Name" required={true}/>

                      </div>
                  </div>
                </div>
                
              </div>

              <div className="col-12 mb-2">
                <div className="form-group mb-2">

                    <label htmlFor="">
                      Country
                    </label>

                    <select className="form-control" onChange={(e) => setSelectedCountry(e.target.value)} required={true}>
                      <option value="">Select Country</option>
                    {
                          supportedCountry !== null && Object.keys(supportedCountry).map((key, index) =>
                          <option key={index} name={supportedCountry[key].name} value={key}>
                            {supportedCountry[key].name}
                          </option>
                      )
                    }
                    </select>

                    
                  </div>
              </div>

              { 
                supportedCountry !== null && selectedCountry !== null && (
                  <div className="col-12 mb-2">
                    <div className="form-group mb-2">

                        <label htmlFor="">
                          Phone Number
                        </label>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                            <span className="input-group-text text-dark" id="basic-addon1">+{supportedCountry[selectedCountry].country_code}</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                      
                      </div>
                  </div>
                )
              }

              <div className="col-12 mb-3">

                <span className="fonto">
                  <a href={appLink.appRoot} onClick={restart}>Restart Registration</a><br/>
                </span>

              </div>

              <div className="col-12 mb-2">

                  <button className="btn btn-block btn-primary" type="submit">
                  Proceed <i className="fa fa-long-arrow-right"></i></button>

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

export default PersonalInfo;