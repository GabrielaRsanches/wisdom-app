import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'


export default function StudentLogin() {
  return (
  <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormLabel>Password</FormLabel>
  <Input type='password' />
  <FormHelperText>Choose a strong password.</FormHelperText>
  <FormLabel>Verify password</FormLabel>
  <Input type='password' />
  </FormControl>
  );
}

