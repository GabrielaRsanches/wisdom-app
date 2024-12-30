import styled from 'styled-components';
import {
  Button,
  Text,
  Box as BoxStyled
} from '@chakra-ui/react'

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const Box = styled(BoxStyled)`
width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SignUpAsTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 0px;
  gap: 8px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2xl;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: xl;
    text-align: center;
  }
`;

export const SignUpAsFormContainer = styled.div`


  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2px;
  }
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  margin-top: 1rem;
`;

export const ButtonComponent = styled(Button)`
  display: flex;
  margin-top: 1rem;
    width: 50%;
    
`;

export const AlreadyHaveAnAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 2rem;
`;