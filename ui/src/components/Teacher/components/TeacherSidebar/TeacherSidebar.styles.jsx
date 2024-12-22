import styled from 'styled-components';
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

export const SidebarContainer = styled(Box)`
  position: fixed;
  width: 250px;
  height: 100%;
  display: flex;

`;

export const StyledSidebar = styled(Sidebar)`
  background-color: rgba(400, 192, 203, 0.3);
  width: 100%;
  height: 100%;
  border: solid 1px;
  border-color:  rgba(400, 192, 203, 0.3);
`;

export const MenuWrapper = styled(Menu)`
  padding-top: 5vh;
  padding-left: 1vh;
  padding-right: 1vh;  
`;

export const MenuItemWrapper = styled(MenuItem)`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const MenuItemText = styled(Text)`
  width: 10vh;
`;

export const ToggleButtonContainer = styled(Flex)`
  margin-top: 51vh;
`;

export const StyledToggleButton = styled(Button)`
  width: 100%;
  margin-left: ${({ collapsed }) => (collapsed ? '0' : '0vh')};
`;
