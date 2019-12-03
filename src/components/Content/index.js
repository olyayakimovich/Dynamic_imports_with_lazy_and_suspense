import React, { Suspense } from 'react';

const Cats = React.lazy(() => import('../Cats'));
const Dogs = React.lazy(() => import('../Dogs'));
const Default = React.lazy(() => import('../Fish'));

const Content = ({ content }) => {
  switch (content) {
    case 'cats':
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Cats />
        </Suspense>
      );
    case 'dogs':
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Dogs />
        </Suspense>
      );
    case 'fish':
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Default />
        </Suspense>
      );
    default:
      return <div />;
  }
};

export default Content;
