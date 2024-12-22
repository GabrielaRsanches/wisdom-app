import styled from 'styled-components';
import {
  Button,
  Text,
} from '@chakra-ui/react'

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const SignUpTitleContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  padding: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2xl;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: xl;
    text-align: center;
  }
`;

export const SignUpFormContainer = styled.div`
  display: flex-box;
  align-items: center;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2px;
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

export const ForgotYourPasswordContainer = styled.div`
  margin-top: 2rem;
`;