'use client'

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Icon,
} from '@chakra-ui/react'
import axios from 'axios'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { auth } from '../../config/firebase'

const Blur = (props={IconProps}) => {


  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="71" cy="61" r="111" fill="#AAC8A7" />
      <circle cx="244" cy="106" r="139" fill="#C3EDC0" />
      <circle cy="291" r="139" fill="#E9FFC2" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#FDFFAE" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#C4D7B2" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#E1ECC8" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#F7FFE5" />
    </Icon>
  )
}

export default function Login() {  
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate()  

  const handleLogin = async () => {
    try {
      // const login = await signInWithEmailAndPassword(auth, email, password)

      const url = "http://localhost:2070/";

      const user = await axios.get(`${url}user/${email}`)

      console.log(user, 'ni usernyaaaa')

      if(typeof user.email == 'undefined'){
        alert('email tidak terdaftar')
      }else{
        if(user.password == password){  
          Cookies.set('email', user)
          return navigate('/')
        }else{
          alert('password salah')
        }
      }
    } catch (error) {
      console.log('Login error:', error)
      throw error
    }
  }

 
  
  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            mt={'8rem'}>
            Dive into the beauty of tralaluv's top travel destinations.
          </Heading>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
          mt={'6rem'}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Log in to your account
              <Text as={'span'} bgGradient="linear(to-r, green.700,green.500)" bgClip="text">
                !
              </Text>
            </Heading>
          </Stack>

          <Box as={'form'} mt={5}> 
            <Stack spacing={4}>
              <Input
                placeholder="Email"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="password"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, green.700,green.500)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, green.500,green.700)',
                boxShadow: 'xl',
              }} 
              onClick={()=> handleLogin()}>
              Login
            </Button>
            <Text textAlign={'center'} m={'2rem'} fontWeight={500}>Don't have an account? <Link to={'/sign-up'}>Sign Up</Link></Text>
          </Box>
          form
        </Stack>
      </Container>
      <Blur position={'absolute'} top={-10} left={-10} style={{ filter: 'blur(70px)' }} />
    </Box>
  )
}