import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import '@testing-library/jest-dom';
import { WrapperTestingLibrary } from '../../../helpers/WrapperTestingLibrary';
import CreateQuestion from './CreateQuestion';
import { useCreateQuestion } from '../../../../hooks/usePostCreateQuestion';
import { MemoryRouter, Route, Routes, useParams } from 'react-router-dom';
import { AuthProvider } from '../../../AuthContext';

// Mock the custom hook to control the behavior during tests
jest.mock('../../../../hooks/usePostCreateQuestion', () => ({
  useCreateQuestion: jest.fn(),
  mutate: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

// Mock the Subject enum
jest.mock('../../../../../../shared/enum', () => ({
  Subject: {
    Portuguese: 'Portuguese',
    Mathematics: 'Mathematics',
    History: 'History',
  },
}));

const renderComponent = () =>
  render(
    <MemoryRouter initialEntries={[`/students/1/questions`]}>
      <Routes>
        <Route path="/students/:studentId/questions" element={
          <AuthProvider>
            <WrapperTestingLibrary>
              <ChakraProvider>
                <CreateQuestion />
              </ChakraProvider>
            </WrapperTestingLibrary>
          </AuthProvider>
        } />
      </Routes>
    </MemoryRouter>
  );

describe('CreateQuestion Component', () => {
  beforeEach(() => {
    const mockMutate = jest.fn();
    (useCreateQuestion as jest.Mock).mockReturnValue({
      mutate: mockMutate,
    });

    (useParams as jest.Mock).mockReturnValue({ studentId: '1' });
  });

  it('should render the question creation title', () => {
    renderComponent();
    expect(screen.getByText('Ask a')).toBeInTheDocument();
  });

  it('should render input fields for title and description', () => {
    renderComponent();
    expect(screen.getByPlaceholderText(/Title/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Description/i)).toBeInTheDocument();
  });

  it('should render the checkbox for subjects', () => {
    renderComponent();
    const subjectCheckboxes = screen.getAllByRole('checkbox');
    expect(subjectCheckboxes).toHaveLength(3); // Mocked Subject enum has 3 items
  });

  it('should show a validation error when no subject is selected', async () => {
    renderComponent();

    const titleInput = screen.getByPlaceholderText(/Title/i);
    const descriptionInput = screen.getByPlaceholderText(/Description/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    fireEvent.change(titleInput, { target: { value: 'Question Title' } });
    fireEvent.change(descriptionInput, { target: { value: 'Question Description' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Subject is required/i)).toBeInTheDocument();
    });
  });

  it('should show validation error for title and description fields', async () => {
    renderComponent();

    const submitButton = screen.getByRole('button', { name: /Submit/i });
     fireEvent.click(submitButton);

     waitFor(() => {
      expect(screen.getByText(/This is required/i)).toBeInTheDocument();
    });
  });

  it('should update selectedSubject when a subject is clicked', () => {
    renderComponent();
    const checkboxes = screen.getAllByRole('checkbox');
    
    fireEvent.click(checkboxes[0]);
    expect(checkboxes[0]).toBeChecked();
    
    fireEvent.click(checkboxes[1]);
    expect(checkboxes[1]).toBeChecked();
  });

  it('should show error when no subject is selected', async () => {
    renderComponent();
    
    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: 'Test Description' } });
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Subject is required')).toBeInTheDocument();
    });
  });

});
