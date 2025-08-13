import type { FC } from "react";

import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

const About = lazy(() => import("marketing/about"));

const AboutScene: FC = () => {
  return (
    <ErrorBoundary fallback={<div>About page went wrong</div>}>
      <Suspense>
        <About />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AboutScene;

