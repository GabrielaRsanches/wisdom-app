'use client'

import { Flex } from "@chakra-ui/react";
import DashboardPage from "./ui/dashboard/page";
import HeadNav from "./ui/navigation/headNav";
import StudentLogin from "./ui/login/student-login";
import TeacherLogin from "./ui/login/teacher-login";
import axios from 'axios';
import { useState, useEffect } from "react";
import { TeacherRegistryHandler, StudentRegistryHandler, QuestionHandler } from "./api/data";

export default function Page() {
  
  return (
    <>
    <HeadNav/>
    <Flex>
    <DashboardPage/>
    <TeacherLogin/>
    </Flex>
    </>
  );
}
