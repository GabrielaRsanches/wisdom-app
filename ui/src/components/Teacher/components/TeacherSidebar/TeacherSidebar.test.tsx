import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { WrapperTestingLibrary } from '../../../helpers/WrapperTestingLibrary';
import TeacherSidebar from './TeacherSidebar';
import { ChakraProvider } from '@chakra-ui/react';

const defaultProps = {
  onClick: jest.fn(),
};

const renderComponent = (props = defaultProps) =>
  render(
    <WrapperTestingLibrary>
      <ChakraProvider>
        <TeacherSidebar {...props} />
      </ChakraProvider>
    </WrapperTestingLibrary>
  );

describe('TeacherSidebar Component', () => {
  it('should render all links with their respective names', () => {
    renderComponent();

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Account/i)).toBeInTheDocument();
    expect(screen.getByText(/Participation/i)).toBeInTheDocument();
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });

  it('should toggle sidebar collapsed state on toggle button click', async () => {
    renderComponent();

    const toggleButton = screen.getByRole('button');

    expect(screen.queryByText(/Home/i)).toBeInTheDocument();
    expect(screen.queryByText(/Account/i)).toBeInTheDocument();
    expect(screen.queryByText(/Participation/i)).toBeInTheDocument();
    expect(screen.queryByText(/Logout/i)).toBeInTheDocument();

    await fireEvent.click(toggleButton);

    expect(screen.queryByText(/Home/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Account/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Participation/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Logout/i)).not.toBeInTheDocument();

    await fireEvent.click(toggleButton);

    expect(screen.queryByText(/Home/i)).toBeInTheDocument();
    expect(screen.queryByText(/Account/i)).toBeInTheDocument();
    expect(screen.queryByText(/Participation/i)).toBeInTheDocument();
    expect(screen.queryByText(/Logout/i)).toBeInTheDocument();
  });

  it('should trigger the onClick callback when a menu item is clicked', async () => {
    renderComponent();

    const menuItem = screen.getByText(/Home/i);
    await fireEvent.click(menuItem);

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
