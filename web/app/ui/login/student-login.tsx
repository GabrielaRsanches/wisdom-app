import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import { PasswordField } from '@/app/shared/PasswordField';
import { StudentRegistry } from '@/app/models/models';

interface GradeOption {
  value: string;
  label: string;
}

const gradeOptions: GradeOption[] = [
  { value: 'first', label: 'First grade' },
  { value: 'second', label: 'Second grade' },
  { value: 'third', label: 'Third grade' },
  { value: 'fourth', label: 'Fourth grade' },
  { value: 'fifth', label: 'Fifth grade' },
  { value: 'sixth', label: 'Sixth grade' },
  { value: 'seventh', label: 'Seventh grade' },
  { value: 'eighth', label: 'Eighth grade' },
  { value: 'ninth', label: 'Ninth grade' },
];

export default function StudentLogin() {
  const [selectedGrade, setSelectedGrade] = useState<string>('');
  const [formData, setFormData] = useState<StudentRegistry | null>(null);
  const handleChange = (value: string) => {
    setSelectedGrade(value);
  };

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<StudentRegistry>();

  const onSubmit = async (data: StudentRegistry) => {
    try {
      console.log(data); // Store the form data in local state for frontend use
      setFormData(data);
    } // Handle form submission logic here 
    catch (error) {
      console.error(error);
    }
  };

  return (
      <Box position="relative">
        <Container as={SimpleGrid} maxW="2xl">
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Create your{' '}
            <Text as="span" bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
              account
            </Text>{' '}
          </Heading>
          <Box as="form" mt={10} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl isRequired id='name'>
                <Input
                  type="text"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}                                 
                  placeholder="First and last name"
                  _placeholder={{color: 'gray.500'}}
                  {...register('name', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                    
                  })}
                />
              </FormControl>
              <FormControl isRequired id='email'>
                <Input
                  type="email"
                  placeholder="Your best email"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}                                 
              
                  _placeholder={{color: 'gray.500'}}
                  {...register('email', { required: 'This is required' })}
                />
              </FormControl>
              <PasswordField
                id='password'
                isRequired
                placeholder="Password"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}                                 
                _placeholder={{color: 'gray.500'}}
                {...register('password', { required: 'This is required' })}
              />
              <PasswordField
                id='confirm-password'
                isRequired
                placeholder="Confirm password"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}                                 
                _placeholder={{color: 'gray.500'}}
                {...register('confirmPassword', { required: 'This is required' })}
              />
              <FormControl>
                <FormLabel>What grade are you in?</FormLabel>
                <RadioGroup colorScheme="pink" value={selectedGrade} onChange={handleChange} className='grade'>
                  <Stack spacing={2}>
                    {gradeOptions.map((option) => (
                      <Radio key={option.value} value={option.value}>
                        {option.label}
                      </Radio>
                    ))}
                  </Stack>
                </RadioGroup>
              </FormControl>
            </Stack>
            <Button
              id='submit'
              mt={8}
              w="full"
              bgGradient="linear(to-r, red.400,pink.400)"
              color="white"
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}
              isLoading={isSubmitting}
              type="submit">
              Submit
            </Button>
          </Box>
        </Container>
      </Box>
  );
}
