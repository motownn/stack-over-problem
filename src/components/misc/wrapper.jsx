import React, {lazy} from 'react';

function DashboardWrapper(props) {

  const UserHeader = lazy(() => import('./header'));
  const UserSideBar = lazy(() => import('./sidebar'));
  const UserFooter = lazy(() => import('./footer'));

  return (
    <React.Fragment>
      <div id="main-wrapper">

        <UserHeader/>

        <UserSideBar sidebar={props.sidebar ? props.sidebar : ""}/>

        <div className="content-body">
            <div className="container-fluid">
              {props.children}
            </div>
        </div>

        <UserFooter />

      </div>
    </React.Fragment>
  )
}

export default DashboardWrapper;
