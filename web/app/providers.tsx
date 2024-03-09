'use client'

import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { TeacherRegistryHandler, StudentRegistryHandler, QuestionHandler } from './api/data';

export function Providers({ children, includeForm = false }: { children: React.ReactNode,  includeForm?: boolean; }) {
  const [data, setData] = useState<typeof TeacherRegistryHandler | typeof StudentRegistryHandler | typeof QuestionHandler | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<typeof TeacherRegistryHandler | typeof StudentRegistryHandler | typeof QuestionHandler >('/api/data'); // Relative path to your API route
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  
  return <ChakraProvider> <pre>{JSON.stringify(data, null, 2)}</pre>{ children}</ChakraProvider>
}