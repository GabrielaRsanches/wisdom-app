import React, { useState } from 'react';
import { FormControl, FormLabel, Input, FormHelperText, Button, useToast } from '@chakra-ui/react';
import Error from 'next/error';

export class ConfirmedPassword {
  arePasswordsMatching(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }
}

export default function StudentLogin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const toast = useToast();

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent form from reloading the page on submit

    const passwordChecker = new ConfirmedPassword();
    const areMatching = passwordChecker.arePasswordsMatching(password, confirmPassword);

    if (areMatching) {
      // If passwords match, proceed with your logic
      toast({
        title: 'Success',
        description: "Passwords match!",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } else {
      // If passwords do not match, show an error or handle accordingly
      toast({
        title: 'Error',
        description: "Passwords do not match!",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <FormControl onSubmit={handleSubmit} as="form">
      <FormLabel htmlFor='name'>Name</FormLabel>
      <Input id='name' type="text" value={name} onChange={(e) => setName(e.target.value)} w={400}/>
      <FormLabel htmlFor='password'>Password</FormLabel>
      <Input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} w={400}/>
      <FormHelperText>Choose a strong password.</FormHelperText>
      <FormLabel htmlFor='confirmPassword'>Verify Password</FormLabel>
      <Input id='confirmPassword' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} w={400}/>
      <Button mt={4} colorScheme="blue" onClick={handleSubmit}>Submit</Button>
    </FormControl>
  );
}


