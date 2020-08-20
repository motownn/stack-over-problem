import React, { Suspense, lazy } from 'react';
import Loading from '../loader';
import { Helmet } from "react-helmet";
const BodyWrapper = lazy(() => import('../auth/wrapper'));

function RenderUserSignIn() {

  const SignInUser = lazy(() => import('./user'));

  return (
    <Suspense fallback={<Loading/>}>
      <BodyWrapper progressCount={99.9} bigText={" "} smallText={"Sign in to get access to your account"}>
        <Helmet>
          <title>Sign In - MoTown</title>
        </Helmet>
        <SignInUser/>
      </BodyWrapper>
    </Suspense>
  );

}

export {RenderUserSignIn};
