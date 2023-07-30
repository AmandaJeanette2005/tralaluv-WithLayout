import { Route, Routes } from 'react-router-dom'
import Home from './layouts/pages/home'
import About from './layouts/pages/about'
import { Fragment } from 'react'
import { Navbar } from './layouts/Navbar'
import { NavCategoryMenu } from './layouts/Navbar/NavCategoryMenu'
import { Box, Center, Container, Flex } from '@chakra-ui/react'
import Xperience from './layouts/pages/xperience'
import Transport from './layouts/pages/transport'
import Hotel from './layouts/pages/hotel'

function App() {
  
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

export default App
