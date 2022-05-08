import React, { lazy, Suspense } from "react";

const LazyMatches = lazy(() => import("./Matches"));

const Matches = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyMatches {...props} />
  </Suspense>
);

export default Matches;
