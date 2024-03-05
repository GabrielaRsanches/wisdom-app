import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  useBreakpointValue,
  Text,
  flexbox,
  Select,
  Checkbox,
  CheckboxGroup
} from '@chakra-ui/react'
import onFileSelected from '@/app/shared/utils';
import fileUpload from '@/app/shared/utils';
import { color } from 'framer-motion';
import { PasswordField } from '@/app/shared/PasswordField';
import { SetStateAction, useState } from 'react';

export default function TeacherLogin() {
  // const [input, setInput] = useState('')

  // const handleInputChange = (e: any) => setInput(e.target.value)

  // const isError = input === ''

  return (
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
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <FormControl isRequired>
              <Input type='email' placeholder="First and last name"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }} />
                {/* {!isError ? (
                  <FormHelperText>
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )} */}
              </FormControl>
              <FormControl id="email" isRequired>
              <Input
                type='email'
                placeholder="Your best email"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              </FormControl>
              <PasswordField 
                isRequired
                placeholder='Password'
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}/>
              <PasswordField 
                isRequired
                placeholder='Confirm password'
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}/>
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
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}>
              Submit
            </Button>
          </Box>
      </Container>
    </Box>
  );
}

