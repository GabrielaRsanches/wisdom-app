import { Container, Heading } from '@chakra-ui/react';
import styled from 'styled-components'

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const ContainerStyles = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
  justify-self: center;
`;

export const HeadingStyles = styled(Heading)`

  margin-bottom: 20px;
`;

export const TabsStyles = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
`;