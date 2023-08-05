import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import { Fragment } from 'react'
import { Navbar } from './Navbar/index'
import { NavCategoryMenu } from './Navbar/NavCategoryMenu'
import { Box, Center, Container, Flex } from '@chakra-ui/react'
import Xperience from './pages/xperience'
import Transport from './pages/transport'
import Hotel from './pages/hotel'
import Cookies from 'js-cookie'

const CustLayout = () => {

  let cookie = Cookies.get('email')
  
  if(!cookie){
    return <Navigate to='/login'/>
  }
  return (
    <Flex flexDirection={"column"} height={"100vh"}>
    <Container maxW={'container.xl'}>
      <Navbar />  
      <NavCategoryMenu.Desktop/>  
    </Container>
    
    <Container maxW={'container.xl'}>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='transport' element={<Transport/>}/>
          <Route path='xperience' element={<Xperience/>}/>
          <Route path='hotel' element={<Hotel/>}/>
      </Routes>
    </Container>

    <Container maxW={'container.xl'}></Container>
    </Flex>
    )
}

export default CustLayout