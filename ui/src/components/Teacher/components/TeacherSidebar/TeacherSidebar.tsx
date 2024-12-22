import React, { useState } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowLeftIcon, ArrowRightIcon, ChatIcon, LockIcon } from '@chakra-ui/icons'
import { HomeIcon } from '@heroicons/react/24/outline';
import { SidebarContainer, StyledSidebar, MenuWrapper, MenuItemWrapper, MenuItemText, ToggleButtonContainer, StyledToggleButton } from './TeacherSidebar.styles'

const TeacherSidebar = ({ onClick = ()=>{}}) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => setCollapsed(!collapsed);
  const links = [
    { name: 'Home', href: '/', icon: HomeIcon},
    { name: 'Account', href: '/account', icon: LockIcon},
    { name: 'Participation', href: '/participations', icon:ChatIcon},
    { name: 'Logout', href: '/', icon: ArrowBackIcon}
  ]

  return (
  <React.Fragment>
    <SidebarContainer>
      <StyledSidebar collapsed={collapsed}
      >
        <MenuWrapper>
          <Stack>
            {links.map((link, index) => {
              const LinkIcon = link.icon;
              return(
                <MenuItemWrapper key={`${link.name}-${index}`} href={link.href} onClick={onClick}>
                  <Flex>
                    {!collapsed && <MenuItemText width={'10vh'}>{link.name}</MenuItemText>}     
                    <LinkIcon style={{marginLeft: collapsed ? '0' : '10vh', width: '1em', height: '1em'}} />
                  </Flex>
                </MenuItemWrapper>       
              )
            })}
          </Stack>
        </MenuWrapper>

        <ToggleButtonContainer>
          <StyledToggleButton 
            alignContent={'center'}
            display={'center'}       
            bgGradient="linear(to-r, red.400, pink.400)"
            color="white"
            _hover={{
              bgGradient: 'linear(to-r, red.400, pink.400)',
              boxShadow: 'xl',
            }}
            onClick={handleToggleSidebar}
            rightIcon={collapsed ? <ArrowRightIcon/> : <ArrowLeftIcon/>}
          />
        </ToggleButtonContainer>
      </StyledSidebar>  
    </SidebarContainer>
  </React.Fragment>
  );
};

export default TeacherSidebar;
