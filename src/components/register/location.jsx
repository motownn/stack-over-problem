import React, {useState, useEffect} from 'react';
/* eslint-disable react-hooks/exhaustive-deps */
const LocationKYC = ({appLink, loader}) => {

  let [error, setError] = useState(null);
  let [homeAddress, setHomeAddress] = useState("");
  let [workAddress, setWorkAddress] = useState("");
  let [stateRegion, setStateRegion] = useState("");
  let [city, setCity] = useState("");
  let [loading, setLoader] = useState(false);

  useEffect(() => {
    if(window.sessionStorage.getItem("agreement") === "true" &&
      window.sessionStorage.getItem("token") !== null &&
      window.sessionStorage.getItem("email") !== null &&
      window.sessionStorage.getItem("country_code") !== null &&
      window.sessionStorage.getItem("firstName") !== null &&
      window.sessionStorage.getItem("lastName") !== null &&
      window.sessionStorage.getItem("userPhone") !== null &&
      window.sessionStorage.getItem("stateRegion") !== null &&
      window.sessionStorage.getItem("homeAddress") !== null &&
      window.sessionStorage.getItem("userCity") !== null &&
      window.sessionStorage.getItem("verified") !== null) {
        console.log("Redirecting ... 1");
        window.location.href=appLink.register_step_5_account;
        return;
    }

    if(window.sessionStorage.getItem("agreement") === null ||
      window.sessionStorage.getItem("token") === null ||
      window.sessionStorage.getItem("verified") === null ||
      window.sessionStorage.getItem("country_code") === null ||
      window.sessionStorage.getItem("firstName") === null ||
      window.sessionStorage.getItem("lastName") === null ||
      window.sessionStorage.getItem("userPhone") === null ||
      window.sessionStorage.getItem("email") === null) {
        window.sessionStorage.clear();
        console.log("Redirecting ... 2");
        window.location.href=appLink.register_user_agreement;
        return;
    }

    console.log("Redirecting ... 3");
  }, []);

  const updateKYC = (e) => {
    e.preventDefault();
    setLoader(true);

    if(homeAddress.length < 3) {
      setLoader(false);
      setError("Home address is not valid");
      return;
    }

    if(city.length < 2) {
      setLoader(false);
      setError("Phone number is not valid");
      return;
    }

    if(stateRegion.length < 2) {
      setLoader(false);
      setError("Phone number is not valid");
      return;
    }
    
    window.sessionStorage.setItem("stateRegion", stateRegion);
    window.sessionStorage.setItem("userCity", city);
    window.sessionStorage.setItem("homeAddress", homeAddress);
    window.sessionStorage.setItem("workAddress", workAddress);

    window.location.href=appLink.register_step_5_account;
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
            <div className="form-group mb-2">

                <label htmlFor="">
                  Home Address ( Address Line 1 )
                </label>

                <input className="form-control" type="text" onChange={(e) => setHomeAddress(e.target.value)} placeholder="Home Address" required={true}/>

              </div>
          </div>

          <div className="col-12 mb-2 mt-2">
            <div className="form-group mb-2">

                <label htmlFor="">
                  Work Address ( Address Line 2 )
                </label>

                <input className="form-control" type="text" onChange={(e) => setWorkAddress(e.target.value)} placeholder="Optional" />

              </div>
          </div>

          <div className="col-12 mb-2">
            <div className="form-group mb-2">

                <label htmlFor="">
                  State / Region
                </label>

                <input className="form-control" type="text" onChange={(e) => setStateRegion(e.target.value)} placeholder="Name of Country State / Region" required={true}/>

              </div>
          </div>

          <div className="col-12 mb-2">
            <div className="form-group mb-2">

                <label htmlFor="">
                  City / Town
                </label>

                <input className="form-control" type="text" onChange={(e) => setCity(e.target.value)} placeholder="Name of City within State / Region" required={true}/>

              </div>
          </div>

          <div className="col-12 mb-2">

              <button className="btn btn-block btn-primary" type="submit">
                Proceed <i className="fa fa-long-arrow-right"></i>
              </button>

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

export default LocationKYC;