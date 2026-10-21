'use client';

import { Suspense } from 'react';
import ScrollToAnchor from './ScrollToAnchor';

export default function ScrollToAnchorWrapper() {
  return (
    <Suspense fallback={null}>
      <ScrollToAnchor />
    </Suspense>
  );
}