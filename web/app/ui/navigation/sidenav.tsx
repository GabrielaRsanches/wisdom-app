'use client'
import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { ArrowBackIcon, ArrowLeftIcon, ChatIcon, LockIcon } from '@chakra-ui/icons'
import { HomeIcon } from '@heroicons/react/24/outline';

interface SidebarItemProps {
  onClick: () => any;
  isCollapsed: boolean;
  icon: any
}

// SideNav component
const SideNav: React.FC<SidebarItemProps> = ({ onClick }) => {
  const [collapsed, setCollapsed] = useState(false);
  // Function to toggle the sidebar's collapsed state
  const handleToggleSidebar = () => setCollapsed(!collapsed);
  const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon},
    { name: 'Account', href: '/dashboard/account', icon: LockIcon},
    { name: 'Participations', href: '/dashboard/participations', icon:ChatIcon},
    { name: 'Logout', href: '/', icon: ArrowBackIcon}
  ]

  return (
  <>
    <Box position="fixed" width="250px" height='100%' display="flex" 
      flexDirection="column">
      <Sidebar collapsed={collapsed} backgroundColor='rgba(400, 192, 203, 0.3)' width="100%" style={{height:"88%"}}
      >
        <Menu style={{paddingTop: '5vh', width:"100%" }}  >
          <Stack  style={{width:'100%'}}>
            {links.map((link, index) => {
              const LinkIcon = link.icon;
              return(
                
                  <MenuItem key={`${link.name}-${index}`} style={{alignItems: 'center', width:'100%'}} href={link.href} onClick={onClick}>
                    <Flex>
                      {!collapsed && <Text width={'10vh'}>{link.name}</Text>}     
                      <LinkIcon style={{marginLeft: collapsed ? '0' : '10vh', width: '1em', height: '1em'}} />
                    </Flex>
                  </MenuItem>       
                
              )
            })}
          </Stack>
        </Menu>

        <Flex marginTop={'51vh'}>
          <Button 
            style={{marginLeft: collapsed ? '0' : '0vh'}}
            alignContent={'center'}
            display={'center'}       
            w="100%"
            bgGradient="linear(to-r, red.400, pink.400)"
            color="white"
            _hover={{
              bgGradient: 'linear(to-r, red.400, pink.400)',
              boxShadow: 'xl',
            }}
            onClick={handleToggleSidebar}
            rightIcon={<ArrowLeftIcon/>}
          >
          {!collapsed && <Text>Toggle</Text>}
          </Button> 
        </Flex>
      </Sidebar>  
    </Box>
  </>
    
  );
};

export default SideNav;
