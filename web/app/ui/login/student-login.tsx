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
import { StudentRegistry } from '@/app/shared/definitions';

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

  const handleChange = (value: string) => {
    setSelectedGrade(value);
  };

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<StudentRegistry>();

  const onSubmit = (data: StudentRegistry) => {
    console.log(data); // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <Box as="form" mt={10}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <Input
                  type="text"
                  placeholder="First and last name"
                  {...register('name', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}
                />
              </FormControl>
              <FormControl isRequired>
                <Input
                  type="email"
                  placeholder="Your best email"
                  {...register('email', { required: 'This is required' })}
                />
              </FormControl>
              <PasswordField
                isRequired
                placeholder="Password"
                {...register('password', { required: 'This is required' })}
              />
              <PasswordField
                isRequired
                placeholder="Confirm password"
                {...register('confirmPassword', { required: 'This is required' })}
              />
              <FormControl>
                <FormLabel>What grade are you in?</FormLabel>
                <RadioGroup colorScheme="pink" value={selectedGrade} onChange={handleChange}>
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
    </form>
  );
}
