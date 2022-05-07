import React, { lazy, Suspense } from 'react';

const LazyLivescore = lazy(() => import('./Livescore'));

const Livescore = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLivescore {...props} />
  </Suspense>
);

export default Livescore;
