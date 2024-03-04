import { Flex, Box } from "@chakra-ui/react";
import StudentLogin from "../ui/login/student-login";
import SideNav from "./sidenav";

export default function DashboardPage() {
  return (
    <Flex>
      <Box w="300px"><SideNav /></Box> {/* SideNav on the left */}
      <Box flex="1" marginTop={"5em"}><StudentLogin /></Box> {/* StudentLogin as the main content */}
    </Flex>
  );
}

