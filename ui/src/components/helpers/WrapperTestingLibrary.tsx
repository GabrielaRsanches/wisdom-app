import React, { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '../../query-client/client';

const queryClient = getQueryClient();

interface WrapperTestingLibraryProps {
  children: ReactNode;
}

const WrapperTestingLibrary: React.FC<WrapperTestingLibraryProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

export { WrapperTestingLibrary };
