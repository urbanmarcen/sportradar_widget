import React, { lazy, Suspense } from 'react';

const LazyMatch = lazy(() => import('./Match'));

const Match = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMatch {...props} />
  </Suspense>
);

export default Match;
