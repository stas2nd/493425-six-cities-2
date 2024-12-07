import {Navigate} from 'react-router-dom';
import React from 'react';
import { AuthorizationStatusType, AuthorizationStatus } from '../../lib/types/authorization';
import { Routing } from '../../lib/types/routing';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatusType;
  children: React.JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={Routing.Login} />
  );
}
export default PrivateRoute;
