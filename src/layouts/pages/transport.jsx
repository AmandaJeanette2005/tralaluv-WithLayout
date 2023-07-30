import React from 'react'
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    Image,
    Link,
    SimpleGrid,
    Text,
    chakra,
  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  

const Transport = () => {

    const navigate = useNavigate()
    const handleAiplane = async () =>{
        console.log("airplane")
    }
  return (
    <>
    <Heading
      fontSize={{ md: "6xl" }}
      color={"#606C5D"}
      textAlign={'center'}
      marginTop={'1rem'}
    >
      Transports
    </Heading>
    <Text
      fontWeight={450}
      fontSize={"2xl"}
      color={"#606C5D"}
      textAlign={'center'}

    >
      Search and book cheap flight tickets in easy steps here!
    </Text>
    
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        mx={{
          lg: 8,
        }}
        display={{
          lg: "flex",
        }}
        maxW={{
          lg: "5xl",
        }}
        shadow={{
          lg: "lg",
        }}
        rounded={{
          lg: "lg",
        }}
      >
        <Box
          w={{
            lg: "50%",
          }}
        >
          <Box
            h={{
              base: 64,
              lg: "full",
            }}
            rounded={{
              lg: "lg",
            }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://cdn-icons-png.flaticon.com/512/7893/7893979.png')",
            }}
          ></Box>
        </Box>

        <Box
          py={12}
          px={6}
          w={{
            lg: "100%",
          }}
        >
          <chakra.h2
            fontSize={{
              base: "2xl",
              md: "3xl",
            }}
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            Air Plane
            <chakra.span
              color="brand.600"
              _dark={{
                color: "brand.400",
              }}
            ></chakra.span>
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            Domestic & International Airline Partners We are partnering with
            various airlines across the globe to get you to wherever you need
            to be.
          </chakra.p>

          <Button backgroundColor={"#99A98F"} onClick={handleAiplane} m={'1rem'}>
            <Image
              src="https://img.icons8.com/?size=512&id=82712&format=png"
              w={"1rem"}
              m={"5px"}
            ></Image>
                Search Flights
          </Button>
        </Box>
      </Box>
    </Flex>

    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        mx={{
          lg: 8,
        }}
        display={{
          lg: "flex",
        }}
        maxW={{
          lg: "5xl",
        }}
        shadow={{
          lg: "lg",
        }}
        rounded={{
          lg: "lg",
        }}
      >
        <Box
          w={{
            lg: "50%",
          }}
        >
          <Box
            h={{
              base: 64,
              lg: "full",
            }}
            rounded={{
              lg: "lg",
            }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://png.pngtree.com/png-clipart/20230411/original/pngtree-cute-orange-train-cartoon-png-image_9047021.png')",
            }}
          ></Box>
        </Box>

        <Box
          py={12}
          px={6}
          w={{
            lg: "100%",
          }}
        >
          <chakra.h2
            fontSize={{
              base: "2xl",
              md: "3xl",
            }}
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            Train
            <chakra.span
              color="brand.600"
              _dark={{
                color: "brand.400",
              }}
            ></chakra.span>
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            Reserve train tickets online with special price, complete
            schedules, and official partner of PT KAI. Easy and secure
            transaction with various payment options. Book your ticket now in
            Travaluv Lifestyle SuperApp.
          </chakra.p>

          <Button backgroundColor={"#99A98F"} m={'1rem'}>
            <Image
              src="https://img.icons8.com/?size=512&id=82712&format=png"
              w={"1rem"}
              m={"5px"}
            ></Image>
            Buy Ticket
          </Button>
        </Box>
      </Box>
    </Flex>

    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        mx={{
          lg: 8,
        }}
        display={{
          lg: "flex",
        }}
        maxW={{
          lg: "5xl",
        }}
        shadow={{
          lg: "lg",
        }}
        rounded={{
          lg: "lg",
        }}
      >
        <Box
          w={{
            lg: "50%",
          }}
        >
          <Box
            h={{
              base: 64,
              lg: "full",
            }}
            rounded={{
              lg: "lg",
            }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://cdn-icons-png.flaticon.com/512/4565/4565023.png')",
            }}
          ></Box>
        </Box>

        <Box
          py={12}
          px={6}
          w={{
            lg: "100%",
          }}
        >
          <chakra.h2
            fontSize={{
              base: "2xl",
              md: "3xl",
            }}
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            Bus
            <chakra.span
              color="brand.600"
              _dark={{
                color: "brand.400",
              }}
            ></chakra.span>
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            Booking bus and travel shuttle tickets is now as easy as shopping
            online from Tralaluv online agent ticket. Find complete
            information of bus and travel routes, schedules, boarding points,
            facilities, and ticket prices in Travaluv Lifestyle SuperApp.
          </chakra.p>

          <Button backgroundColor={"#99A98F"} m={'1rem'}>
            <Image
              src="https://img.icons8.com/?size=512&id=82712&format=png"
              w={"1rem"}
              m={"5px"}
            ></Image>
            Buy Tickets
          </Button>
        </Box>
      </Box>
    </Flex>
  </>
  )
}

export default Transport