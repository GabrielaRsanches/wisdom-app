import { Flex, Box } from "@chakra-ui/react";
import StudentLogin from "../ui/login/student-login";
import SideNav from "./sidenav";
import TeacherLogin from "../ui/login/teacher-login";

export default function DashboardPage() {
  return (
    <Flex>
      
      <Box w="300px"><SideNav onClick={function(){}} isCollapsed={false} icon={undefined}></SideNav></Box>
      <TeacherLogin/>
    </Flex>
  );
}

