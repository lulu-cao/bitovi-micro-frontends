import { lazy, Suspense, type FC } from "react";

import { ErrorBoundary } from "react-error-boundary";

const Login = lazy(()=>import("profile/login"))

const LoginScene: FC = () => {
  return (
    <ErrorBoundary fallback={<div>Login page went wrong</div>}>
      <Suspense>
        <Login />
      </Suspense>
    </ErrorBoundary>
  )
}

export default LoginScene;
