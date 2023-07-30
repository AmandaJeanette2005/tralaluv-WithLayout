import React, { useEffect, useState } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Grid,
    GridItem,
    HStack,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import axios from "axios";
import ModalViewHotel from '../../modal/ModalViewHotel';
import ModalBookHotel from '../../modal/ModalBookHotel';

const Hotel = () => {
    const [hotelJakarta, setHotelJakarta] = useState([]);
    const [hotelBandung, setHotelBandung] = useState([]);
    const [toggelModal, setToggelModal] = useState(false)
    const [status,setStatus] = useState()
    const [view, setView] = useState({})
  
  
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const getHotelJakarta = async () => {
      const url = "http://localhost:2070/";
      const get = await axios.get(`${url}hotel-city`);
  
      console.log(get.data, "get.data")
      setHotelJakarta([...get.data[0].list]);
      setHotelBandung([...get.data[1].list])
  
    };
  
    useEffect(() => {
      getHotelJakarta();
    }, []);
  
    const handleView = (x) => {
      setToggelModal(true)
      setView(x)
      console.log(x.image)
      setStatus('view')
    };
  
    const handleBuy = (x) => {
      console.log(x)
      setToggelModal(true)
      setView(x)
      setStatus('buy')
    }
  return (
    <>
    <Heading fontSize={{md: "6xl" }} color={'#606C5D'} marginTop={'1rem'} marginLeft={'1rem'}>
    Recommended Hotels
    </Heading>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Jakarta</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Bandung</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Semarang</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Yogyakarta</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    <Text fontSize='4xl' marginLeft={'3rem'} color={'#606C5D'} marginTop={'3rem'}>- Jakarta - </Text>
    <HStack
      templateColumns="repeat(5, 1fr)"
      gap={19}
      overflowX={"auto"}
      sx={{
        "&::-webkit-scrollbar": {
          w: "2",
          h: "3",
        },
        "&::-webkit-scrollbar-track": {
          w: "6",
          h: "5",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "10",
          bg: "#A0D8B3",
        },
      }}
      w={"100%"}
    >
       
      {hotelJakarta.map((x, index) => (
        <GridItem w="100%">
          <Card maxW="xs" key={index}>
            <CardBody>
              <Image src={`${x.image}`} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{x.name}</Heading>
                <Text>{x.type}</Text>
                <Text>{x.address}</Text>
                <Text color="#4C4B16" fontSize="2xl">
                  Rp {x.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="green" onClick={()=> handleBuy(x)}>
                  Book now!
                </Button>
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  onClick={() => handleView(x)}
                >
                  View More
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
      ))}
    </HStack>
    <Text fontSize='4xl' marginLeft={'3rem'} color={'#606C5D'} marginTop={'3rem'}>- Bandung - </Text>
    <HStack
      templateColumns="repeat(5, 1fr)"
      gap={19}
      overflowX={"auto"}
      sx={{
        "&::-webkit-scrollbar": {
          w: "2",
          h: "3",
        },
        "&::-webkit-scrollbar-track": {
          w: "6",
          h: "5",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "10",
          bg: "#A0D8B3",
        },
      }}
      w={"100%"}
    >
       
      {hotelBandung?.map((x, index) => (
        <GridItem w="100%">
          <Card maxW="xs" key={index}>
            <CardBody>
              <Image src={`${x.image}`} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{x.name}</Heading>
                <Text>{x.type}</Text>
                <Text>{x.address}</Text>
                <Text color="#4C4B16" fontSize="2xl">
                  Rp {x.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="green" onClick={() => handleBuy(x)}>
                  Book now!
                </Button>
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  onClick={() => handleView(x)}
                >
                  View More
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
      ))}
    </HStack>

  <Modal isOpen={toggelModal} onClose={() => setToggelModal(false)}>
          <ModalOverlay />
          <ModalContent>
            { status === 'view' ?
            <ModalHeader>{view.name}</ModalHeader> 
            :
            <ModalHeader> 
            <Text>Book {view.name} {view.type}!</Text>
            </ModalHeader>
            }
            <ModalCloseButton />
            {status === 'view' ? 
            <>
            <ModalViewHotel data={view}/>
            </> : 
            <>
            <ModalBookHotel dataHotel={view} close={() => setToggelModal(false)}/>
            </>}
          </ModalContent>
        </Modal>
  </>
  )
}

export default Hotel