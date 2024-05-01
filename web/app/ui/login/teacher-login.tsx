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
import { TeacherRegistry } from '@/app/lib/models';

export default function TeacherLogin() {
  const [selectedTeachingArea, setSelectedTeachingArea] = useState<string>('');
  const [formData, setFormData] = useState<TeacherRegistry | null>(null);

  const handleChange = (value: string) => {
    setSelectedTeachingArea(value);
  };

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<TeacherRegistry>();

  const onSubmit = async (data: TeacherRegistry) => {
    try {
      console.log(data); // Store the form data in local state for frontend use
      setFormData(data);
    } // Handle form submission logic here 
    catch (error) {
      console.error(error);
    }
  };

  return (

      <Box position={'relative'} >
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
          <Box as="form" mt={10} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl isRequired id="name">
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
              <FormControl  isRequired id="email">
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
              <FormLabel>Teaching areas</FormLabel>
              <CheckboxGroup colorScheme="pink" >
                <Stack spacing={[1, 1]} direction={['column']} className='teaching-areas'>
                  <Checkbox id='english'>English</Checkbox>
                  <Checkbox id='math'>Math</Checkbox>
                  <Checkbox id='History'>History</Checkbox>
                  <Checkbox id='geography'>Geography</Checkbox>
                  <Checkbox id='science'>Science</Checkbox>
                  <Checkbox id='literature'>Literature</Checkbox>
                  <Checkbox id='other-languages'>Other Languages</Checkbox>
                </Stack>
              </CheckboxGroup>
                
            </FormControl>
              <Box>
                <Text fontFamily={'body'} fontSize={{ base: '1xl' }} marginTop={'1em'}>
              Upload your license legal document
              
                </Text>
                <Text style={{fontSize: '10px', color:'gray', backgroundColor:'gray.100'}}>This information is secure and will not be shared</Text>         
                <Input 
                  id='file'
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }} type="file" onClick={onFileSelected} marginTop={'1em'}/>
  
              </Box>
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

