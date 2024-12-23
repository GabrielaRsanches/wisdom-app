import React from 'react';
import { render, screen } from '@testing-library/react';
import { WrapperTestingLibrary } from '../helpers/WrapperTestingLibrary';
import { ChakraProvider } from '@chakra-ui/react';
import SignUpAs from './SignUpAs';

const renderComponent = () =>
  render(
    <WrapperTestingLibrary>
    <ChakraProvider>
      <SignUpAs />
    </ChakraProvider>
    </WrapperTestingLibrary>

  );

describe('SignUpAs Component', () => {
  it('should render the welcome title and description correctly', () => {
    renderComponent();

    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Want to be a part of Wisdom Learning Journey/i)
    ).toBeInTheDocument();
  });

  it('should render the buttons correctly', () => {
    renderComponent();

    expect(screen.getByText(/I am a teacher/i)).toBeInTheDocument();
    expect(screen.getByText(/I am a student/i)).toBeInTheDocument();
  });

  it('should render the link to login page', () => {
    renderComponent();

    expect(screen.getByText(/Already have an account\? Login here/i)).toBeInTheDocument();
  });
});
