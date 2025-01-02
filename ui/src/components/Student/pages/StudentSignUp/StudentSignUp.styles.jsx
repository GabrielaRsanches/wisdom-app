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



// SignUpTitleContainer will center the title with a flex layout
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

// SignUpFormContainer will organize the form fields and elements
export const SignUpFormContainer = styled.div`
  display: flex-box;
  align-items: center;
  width: 100%;
 

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2px;
  }
`;

// StudentGradeContainer will handle the layout for teaching area options
export const StudentGradeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px;
    gap: 4px;
  }
`;

// StudentGradesOptionsContainer will style the grid of teaching area checkboxes
export const StudentGradesOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  max-height: 200px;
  width: 100%;
  


  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 2fr);
    max-height: auto;
  }
`;

// Custom Button styles for submit button
export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 2rem;
  


`;

// File input wrapper styles
export const FileInputWrapper = styled.div`
  margin-top: 1em;
  font-size: 0.8rem;
  color: gray;
  background-color: gray.100;
`;

export const FileInputText = styled(Text)`
  font-size: 1.1rem;
  font-family: 'body';
`;

export const FileInputDescription = styled(Text)`
  font-size: 10px;
  color: gray;
  background-color: gray.100;
`;
