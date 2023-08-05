import { Button, FormLabel, Input, ModalBody, ModalFooter, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'




const ModalBookHotel = ({dataHotel, close}) => {

    const [buy, setBuy] = useState({})
    const [duration, setDuration] = useState(0)
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [price, setPrice] = useState(0)




    const handleBook = async () => {
      try {
        const url = 'http://localhost:2070'
        const data = {
            hotel_id:dataHotel.id,
            name: buy.name,
            email: buy.email,
            no_hp: buy.no_hp,
            check_in: checkIn,
            duration: duration,
            check_out: checkOut,
            guests: buy.guests,
            price: price
        }
        const inv = await axios.post(`${url}/inv-hotel`, data)

        const stock = dataHotel.available_room - duration
        const updateStock = await axios.put(`${url}/hotel/${dataHotel.id}`,{
          available_room: stock
        })
        close()
      } catch (error) {
        throw error
      }
        
    }

    

    const onChangeDuration = (value) => {
        console.log(value,'value')
        setDuration(value)
        if(value > 0){
           console.log(value, "mskkkk")
                const days = value;
                const endDate =  dayjs(checkIn).add(days, 'days').format('YYYY-MM-DD')

                console.log(checkIn, 'check in ')
                console.log(endDate, "endDate")
                setCheckOut(endDate)

                const price = dataHotel.price
                const totalPrice = price * days
                console.log(checkOut, "co")
                setPrice(totalPrice)
        }
    }
    
  return (
    <>
          <ModalBody>   
            <FormLabel mt={'1rem'}>Name</FormLabel>
            <Input type='text' onChange={(e) => setBuy({...buy, name: e.target.value})}/>
            <FormLabel mt={'1rem'}>Email</FormLabel>
            <Input type='text' onChange={(e) => setBuy({...buy, email: e.target.value})}/>
            <FormLabel mt={'1rem'}>Phone Number</FormLabel>
            <Input type='number' onChange={(e) => setBuy({...buy, no_hp: e.target.value})}/>
            <FormLabel mt={'1rem'}>Check In</FormLabel>
            <Input type='date' onChange={(e) => setCheckIn(e.target.value)}/>
            <FormLabel mt={'1rem'}>Duration</FormLabel>
            <Input type='number' onChange={(e) => onChangeDuration(e.target.valueAsNumber)}/>
            <FormLabel mt={'1rem'} color={'red'}>Check Out : { duration == false ? 'chose check in date and duration!' : dayjs(checkOut).format('YYYY-MM-DD')}</FormLabel>
            <FormLabel mt={'1rem'}>guests</FormLabel>
            <Input type='number' onChange={(e) => setBuy({...buy, guests: e.target.value})}/>
            <FormLabel mt={'1rem'} color={'green.700'}>Price : {price}</FormLabel>
          </ModalBody>
          <ModalFooter color={'red'}>
           <Button bg={'green.300'} onClick={() => handleBook()}>Book</Button>
          </ModalFooter>    
    </>
  )
}

export default ModalBookHotel