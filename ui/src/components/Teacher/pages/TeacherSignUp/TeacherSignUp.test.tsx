import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { WrapperTestingLibrary } from '../../../helpers/WrapperTestingLibrary';
import TeacherSignUp from './TeacherSignUp';
import { usePostCreateTeacher } from '../../../../hooks/usePostCreateTeacher';

// Mock the custom hook to control the behavior during tests
jest.mock('../../../../hooks/usePostCreateTeacher', () => ({
  usePostCreateTeacher: jest.fn(),
  mutate: jest.fn()
}));

const renderComponent = () =>
  render(
    <WrapperTestingLibrary>
      <ChakraProvider>
        <TeacherSignUp />
      </ChakraProvider>
    </WrapperTestingLibrary>
  );

describe('TeacherSignUp Component', () => {

  beforeEach(() => {
 const mockMutate = jest.fn();
 (usePostCreateTeacher as jest.Mock).mockReturnValue({
      mutate: mockMutate,
    });
  })
  it('should render the account creation title', () => {
    renderComponent();

    expect(screen.getByText('Create your')).toBeInTheDocument();
  });

  it('should render input fields for name, email, password, and confirm password', () => {
    renderComponent();

    expect(screen.getByPlaceholderText(/First and last name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your best email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Confirm password/i)).toBeInTheDocument();
  });

  it('should render the file input for uploading a document', () => {
    renderComponent();

    expect(screen.getByText(/upload your license legal document/i)).toBeInTheDocument();
  });

  it('should render the submit button', () => {
    renderComponent();

    const submitButton = screen.getByRole('button', { name: /Submit/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent('Submit');
  });

  it('should call the createTeacher function when the form is submitted with valid data', async () => {
    const mockCreateTeacher = jest.fn();
    (usePostCreateTeacher as jest.Mock).mockReturnValue({ mutate: mockCreateTeacher });

    renderComponent();

    const nameInput = screen.getByPlaceholderText(/First and last name/i);
    const emailInput = screen.getByPlaceholderText(/Your best email/i);
    const passwordInputs = screen.getAllByPlaceholderText(/password/i);
    const passwordInput = passwordInputs[0];  // Password input
    const confirmPasswordInput = passwordInputs[1];
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

     fireEvent.click(submitButton);


    await waitFor(() => {
      expect(mockCreateTeacher).toHaveBeenCalled();
    });
  });

  it('should show validation error for password mismatch', async () => {
    renderComponent();

    const nameInput = screen.getByPlaceholderText(/First and last name/i);
    const emailInput = screen.getByPlaceholderText(/Your best email/i);
    const passwordInputs = screen.getAllByPlaceholderText(/password/i);
    const passwordInput = passwordInputs[0];
    const confirmPasswordInput = passwordInputs[1];
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password321' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Password mismatch/i)).toBeInTheDocument();
    });
  });
});
