import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ChakraProvider>
);
