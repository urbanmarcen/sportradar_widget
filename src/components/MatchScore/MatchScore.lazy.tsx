import React, { lazy, Suspense } from "react";

const LazyMatchScore = lazy(() => import("./MatchScore"));

const MatchScore = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyMatchScore {...props} />
  </Suspense>
);

export default MatchScore;
