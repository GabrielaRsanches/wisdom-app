import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { WrapperTestingLibrary } from '../../../helpers/WrapperTestingLibrary';
import TeacherLogin from './TeacherLogin';

const renderComponent = () =>
  render(
    <WrapperTestingLibrary>
      <ChakraProvider>
        <TeacherLogin />
      </ChakraProvider>
    </WrapperTestingLibrary>
  );

describe('TeacherLogin Component', () => {
  it('should render the welcome title', () => {
    renderComponent();

    expect(screen.getByText(/Welcome teacher!/i)).toBeInTheDocument();
  });

  it('should render email and password fields', () => {
    renderComponent();

    expect(screen.getByPlaceholderText(/Registered e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render the forgot password link', () => {
    renderComponent();

    expect(screen.getByText(/Forgot your password \?/i)).toBeInTheDocument();
  });

  it('should render the submit button', () => {
    renderComponent();

    const submitButton = screen.getByRole('button', { name: /login/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent('Login');
  });

  it('should display validation error if email is empty', async () => {
    renderComponent();

    const submitButton = screen.getByRole('button', { name: /login/i });
    await fireEvent.click(submitButton);

    waitFor(() => {
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    });
  });

  it('should display validation error if password is empty', async () => {
    renderComponent();

    const submitButton = screen.getByRole('button', { name: /login/i });
    await fireEvent.click(submitButton);

    waitFor(() => {
      expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
    });
  });

  it('should handle valid form submission', async () => {
    renderComponent();

    const emailInput = screen.getByPlaceholderText(/Registered e-mail/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const submitButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'teacher@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByText(/this is required/i)).not.toBeInTheDocument();
    });
  });
});
