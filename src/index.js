import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  RenderRegisterPage, 
  RenderVerificationPage, 
  RenderPersonalInfo, 
  RenderAccountConfiguraton, 
  RenderLocationInfo, 
  RenderAgreementPage
} from './components/register';
import { RenderUserSignIn } from './components/login';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as appLinks from './components/misc/app_links';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
      <Route exact path={appLinks.default.appRoot} component={App} />
      <Route exact path={appLinks.default.register_user_agreement} component={RenderAgreementPage} />
      <Route exact path={appLinks.default.register_step_1_create} component={RenderRegisterPage} />
      <Route exact path={appLinks.default.register_step_2_verify} component={RenderVerificationPage} />
      <Route exact path={appLinks.default.register_step_3_info} component={RenderPersonalInfo} />
      <Route exact path={appLinks.default.register_step_4_gh_location} component={RenderLocationInfo} />
      <Route exact path={appLinks.default.signIn} component={RenderUserSignIn} />
      <Route exact path={appLinks.default.register_step_5_account} component={RenderAccountConfiguraton} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
