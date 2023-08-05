import { Button, FormLabel, Input, ModalBody, ModalFooter } from '@chakra-ui/react'
import React, { useState } from 'react'

const ModalBuyAirplane = () => {

  const [buy , setBuy] = useState({})
  const [price, setPrice] = useState(0)

  return (
    <>
    <ModalBody>   
            <FormLabel mt={'1rem'}>Name</FormLabel>
            <Input type='text' onChange={(e) => setBuy({...buy, name: e.target.value})}/>
            <FormLabel mt={'1rem'}>Email</FormLabel>
            <Input type='text' onChange={(e) => setBuy({...buy, email: e.target.value})}/>
            <FormLabel mt={'1rem'}>Phone Number</FormLabel>
            <Input type='number' onChange={(e) => setBuy({...buy, no_hp: e.target.value})}/>
            <FormLabel mt={'1rem'}>Airline</FormLabel>
            <Input type='text' onChange={(e) => setBuy({...buy, airline: e.target.value})}/>
            <FormLabel mt={'1rem'}>Class</FormLabel>
            <Input type='text' onChange={(e) => setBuy({...buy, class: e.target.value})}/>
            <FormLabel mt={'1rem'}>Date</FormLabel>
            <Input type='date' onChange={(e) => setBuy({...buy, date: e.target.value})}/>
            <FormLabel mt={'1rem'}>Passenger</FormLabel>
            <Input type='number' onChange={(e) => setBuy({...buy, passenger: e.target.value})}/>
            <FormLabel mt={'1rem'} color={'green.700'}>Price : {price}</FormLabel>
          </ModalBody>
          <ModalFooter color={'red'}>
           <Button bg={'green.300'}>Buy</Button>
          </ModalFooter>    
    </>
  )
}

export default ModalBuyAirplane