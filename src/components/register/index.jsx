import React, { Suspense } from 'react';
import Loading from '../loader';
import { Helmet } from "react-helmet";
import UserAgreement from "./terms_of_service";
import BodyWrapper from "../auth/wrapper";
import GetEmail from "./email";
import loader from './loader.gif';
import PersonalInfo from './personal';
import VerifyEmail from "./verifyEmail";
import LocationKYC from "./location";
import UserAccount from "./account";
import * as appLinks from '../misc/app_links';

const restartRegistration = (e) => {
  e.preventDefault();
  window.sessionStorage.clear();
  window.location.href=appLinks.default.register_user_agreement;
}

function RenderAgreementPage() {

  const notice = (
    <React.Fragment>
      <p className="mt-3 text-left">Terms and Conditions
      </p>
    </React.Fragment>
  );
  return (
    <Suspense fallback={<Loading/>}>
      <BodyWrapper progressCount={0.1} bigText={"User Agreement"} smallText={notice} logoMargin={1}>
        <Helmet>
          <title>User Agreement - MoTown</title>
        </Helmet>
        <UserAgreement nextPage={appLinks.default.register_step_1_create}/>
      </BodyWrapper>
    </Suspense>
  );

}

function RenderRegisterPage() {

  return (
    <Suspense fallback={<Loading/>}>
      <BodyWrapper progressCount={10}>
        <Helmet>
          <title>Create your account - MoTown</title>
        </Helmet>
        <GetEmail appLink={appLinks.default} loader={loader}/>
      </BodyWrapper>
    </Suspense>
  );

}

function RenderVerificationPage() {

  return (
    <Suspense fallback={<Loading/>}>
      <BodyWrapper progressCount={25} bigText={"Verify your email"} smallText={"Check your Inbox for the verification code"}>

        <Helmet>
          <title>Verify your Email - MoTown</title>
        </Helmet>

        <VerifyEmail appLink={appLinks.default} loader={loader} restart={restartRegistration}/>
      </BodyWrapper>
    </Suspense>
  );

}

function RenderPersonalInfo() {

  return (
    <Suspense fallback={<Loading/>}>
      <BodyWrapper marginTop={1} progressCount={50} bigText={"Account Info"} smallText={"Let's get to know you more. Use your correct info!!"}>

        <Helmet>
          <title>Personal Information (1/2) - MoTown</title>
        </Helmet>

        <PersonalInfo appLink={appLinks.default} loader={loader} restart={restartRegistration}/>
      </BodyWrapper>
    </Suspense>
  );

}

function RenderLocationInfo() {

  return (
    <Suspense fallback={<Loading/>}>
      <BodyWrapper marginTop={1} progressCount={75} bigText={"KYC Info"} smallText={"Use your correct information"}>

        <Helmet>
          <title>Personal Information (2/2) - MoTown</title>
        </Helmet>

        <LocationKYC appLink={appLinks.default} loader={loader}/>
      </BodyWrapper>
    </Suspense>
  );

}

function RenderAccountConfiguraton() {

  return (
    <Suspense fallback={<Loading/>}>
      <BodyWrapper marginTop={1} progressCount={90} bigText={"Customize Account"} smallText={"Let's setup your login credentials!"}>

        <Helmet>
          <title>Setup User Account - MoTown</title>
        </Helmet>

        <UserAccount appLink={appLinks.default} loader={loader}/>
      </BodyWrapper>
    </Suspense>
  );

}

export {RenderRegisterPage, RenderVerificationPage, RenderPersonalInfo, RenderAccountConfiguraton, RenderLocationInfo, RenderAgreementPage};
