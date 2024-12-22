// src/declarations.d.ts
declare module '*.styles' {
  import { CSSProperties } from 'react';
  
  // Assuming each named export is a styled-component
  export const SidebarContainer: React.ComponentType<any>;
  export const StyledSidebar: React.ComponentType<any>;
  export const MenuWrapper: React.ComponentType<any>;
  export const MenuItemWrapper: React.ComponentType<any>;
  export const MenuItemText: React.ComponentType<any>;
  export const ToggleButtonContainer: React.ComponentType<any>;
  export const StyledToggleButton: React.ComponentType<any>;
}

