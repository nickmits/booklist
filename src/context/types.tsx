import React from 'react';

import { useContextState } from './state';

export interface ProviderProps {
  children: React.ReactNode;
}

export type State = ReturnType<typeof useContextState>;
