import { Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React from 'react'

const ModalViewHotel = ({data}) => {  

  console.log(data.image, "ini dr modal")

  return (
    <>
    
          <ModalBody>
            <Image src={`${data.image}`} borderRadius={"8px"}></Image>
            <Text mt={'1rem'} fontWeight={600} fontSize={'2xl'}>{data.type}</Text>
            <Text>Room Facilities : {data.room_facilities}</Text>
            <Text>{data.address}</Text>
            <Text>Avaible Room : {data.available_room}</Text>
            <Text>Rp {data.price}</Text>
          </ModalBody>
          <ModalFooter color={'red'} fontWeight={600}>
            Book Now!
          </ModalFooter>
          
    </>
  )
}

export default ModalViewHotel