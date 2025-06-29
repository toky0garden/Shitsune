import React from 'react';
import Provider from './provider';

import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <Provider>{children}</Provider>;
}
