import { Flex, Box } from "@chakra-ui/react";
import StudentLogin from "../login/student-login";
import SideNav from "../navigation/sidenav";
import TeacherLogin from "../login/teacher-login";

export default function DashboardPage() {
  return (
    <Flex>
      
      <Box w="300px"><SideNav onClick={function(){}} isCollapsed={false} icon={undefined}></SideNav></Box>
      
    </Flex>
  );
}

