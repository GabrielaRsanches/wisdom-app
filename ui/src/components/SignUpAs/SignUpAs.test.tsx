import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { WrapperTestingLibrary } from '../../helpers/WrapperTestingLibrary';
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
  let originalLocation: Location;

    beforeAll(() => {
    originalLocation = window.location;
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        ...originalLocation,
        href: '',
        assign: jest.fn(),
      },
    });

  });

  afterAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: originalLocation,
    });
  });

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

  it('should redirect to the teacher sign-up page when clicking "I am a teacher"', () => {
    renderComponent();

    const teacherButton = screen.getByText(/I am a teacher/i);

    fireEvent.click(teacherButton);

    expect(window.location.assign).toHaveBeenCalledWith('/teacher/sign-up');
  });

   it('should redirect to the student sign-up page when clicking "I am a student"', () => {
    renderComponent();

    const studentButton = screen.getByText(/I am a student/i);

    fireEvent.click(studentButton);

    expect(window.location.assign).toHaveBeenCalledWith('/student/sign-up');
  });

  it('should render and redirect login links correctly', () => {
    renderComponent();

    const teacherLoginLink = screen.getByText(/Login as teacher/i);
    const studentLoginLink = screen.getByText(/Login as student/i);

    expect(teacherLoginLink).toBeInTheDocument();
    expect(teacherLoginLink.getAttribute('href')).toBe('/teacher/login');

    expect(studentLoginLink).toBeInTheDocument();
    expect(studentLoginLink.getAttribute('href')).toBe('/student/login');
  });
});
