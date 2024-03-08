import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Checkbox,
  CheckboxGroup
} from '@chakra-ui/react'
import onFileSelected from '@/app/shared/utils';
import { PasswordField } from '@/app/shared/PasswordField';
import React,{ useState } from 'react';
import { useForm } from 'react-hook-form';
import { TeacherRegistry } from '@/app/shared/definitions';

export default function TeacherLogin() {
  const [selectedTeachingArea, setSelectedTeachingArea] = useState<string>('');

  const handleChange = (value: string) => {
    setSelectedTeachingArea(value);
  };

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<TeacherRegistry>();

  const onSubmit = (data: TeacherRegistry) => {
    console.log(data); // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box position={'relative'}>
      <Container 
        as={SimpleGrid}
        maxW={'2xl'}
      >
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Create your <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
              account
            </Text>{' '}
          </Heading>
          <Box as="form" mt={10}>
            <Stack spacing={4}>
              <FormControl isRequired>
              <Input
                  type="text"
                  placeholder="First and last name"
                  bg={'gray.100'}
                border={0}
                color={'gray.500'}                                 
                _placeholder={{color: 'gray.500'}}
                  {...register('name', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}
                />
              </FormControl>
              <FormControl id="email" isRequired>
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
                isRequired
                placeholder="Password"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}                                 
                _placeholder={{color: 'gray.500'}}
                {...register('password', { required: 'This is required' })}
              />
              <PasswordField
                isRequired
                placeholder="Confirm password"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}                                 
                _placeholder={{color: 'gray.500'}}
                {...register('confirmPassword', { required: 'This is required' })}
              />
              <FormControl>
              <FormLabel>Teaching areas</FormLabel>
              <CheckboxGroup colorScheme="pink">
                <Stack spacing={[1, 1]} direction={['column']}>
                  <Checkbox>English</Checkbox>
                  <Checkbox>Math</Checkbox>
                  <Checkbox>History</Checkbox>
                  <Checkbox>Geography</Checkbox>
                  <Checkbox>Science</Checkbox>
                  <Checkbox>Literature</Checkbox>
                  <Checkbox>Other Languages</Checkbox>
                </Stack>
              </CheckboxGroup>
                
            </FormControl>
              <Box>
                <Text fontFamily={'body'} fontSize={{ base: '1xl' }} marginTop={'1em'}>
              Upload your license legal document
              <p style={{fontSize: '10px', color:'gray', backgroundColor:'gray.100'}}>This information is secure and will not be shared</p>         
                </Text>
                <Input 
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }} type="file" onClick={onFileSelected} marginTop={'1em'}/>
  
              </Box>
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

