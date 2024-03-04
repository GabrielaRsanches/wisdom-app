import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'
import onFileSelected from '@/app/lib/utils';

export default function TeacherLogin() {
  return (
  <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type="email" />
  <FormHelperText>We"ll never share your email.</FormHelperText>
  <FormLabel>Password</FormLabel>
  <Input type="password" />
  <FormHelperText>Choose a strong password.</FormHelperText>
  <FormLabel>Verify password</FormLabel>
  <Input type="password" className='ConfirmedPassword'/>
  <FormLabel>Credential</FormLabel>
  <Input type="file" onClick={onFileSelected} />
  <FormHelperText>Your license credential.</FormHelperText>
  </FormControl>
  );
}

