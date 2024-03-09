import { Box, Card, CardBody, Stack, StackDivider } from '@chakra-ui/react';
import SideNav from '../navigation/sidenav';
 
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
  <Card>
    <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <SideNav onClick={function () {} } isCollapsed={false} icon={undefined} />
        <div>{children}</div>
      </Box>
      </Stack>
    </CardBody>
  </Card>
   
  );
}