import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Image,
    Text,
    Grid,
    GridItem,
    Stack,
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useState } from "react";
  
  const ModalBuyXperience = ({ open, close, data }) => {
    const [bookX, setBookX] = useState({});
    const [total, setTotal] = useState(0);
  
    const handleAdd = async () => {
      console.log(data.id);
      const url = "http://localhost:2070";
      const qty = bookX.quantity;
      const price = data.price;
      const totalPrice = qty * price;
  
      setTotal(totalPrice);
  
      const arr = {
        xperience_id: data.id,
        name: bookX.name,
        email: bookX.email,
        no_hp: bookX.no_hp,
        quantity: bookX.quantity,
        date: bookX.date,
        price: total,
      };
      const booking = await axios.post(`${url}/inv-Xperience`, arr);
      close(true);
    };
  
    return (
      <>
        <Modal isOpen={open} onClose={close} id="buy" size={"xxl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Stack
                minH={"100vh"}
                direction={{ base: "column", md: "row" }}
                color={"#2D4356"}
              >
                <GridItem p={8} flex={1}>
                  <Text
                    fontSize={"5xl"}
                    textAlign={"center"}
                    fontStyle={"italic"}
                    color={"#2D4356"}
                    fontWeight={600}
                  >
                    {data.name}
                  </Text>
                  <Image
                    src={`${data.image}`}
                    borderRadius={"8px"}
                    w={"80%"}
                    marginLeft={"5rem"}
                    marginBottom={'1rem'}
                  />
                  <Text fontWeight={700} fontSize={"3xl"} fontStyle={"inherit"}>
                    {data.description}
                  </Text>
                  <Text fontSize={'1x1'}>
                    Stock Tickets : {data.stock_tickets}
                  </Text>
                  <Text
                    fontSize={"2xl"}
                    textAlign={"right"}
                    color={"#7C9D96"}
                    fontWeight={"bold"}
                  >
                    Rp {data.price}
                  </Text>
                </GridItem>
                <Flex flex={1} align={"center"} justify={"center"}>
                  <Stack spacing={4} w={"full"} maxW={"md"} color={"#435B66"}>
                    <Heading fontSize={"2xl"}>Book Now!</Heading>
                    <FormControl id="name">
                      <FormLabel>Name</FormLabel>
                      <Input
                        type="text"
                        onChange={(e) =>
                          setBookX({ ...bookX, name: e.target.value })
                        }
                      />
                    </FormControl>
                    <FormControl id="Email">
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        onChange={(e) =>
                          setBookX({ ...bookX, email: e.target.value })
                        }
                      />
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        type="number"
                        onChange={(e) =>
                          setBookX({ ...bookX, no_hp: e.target.value })
                        }
                      />
                      <FormLabel>Total Visitors</FormLabel>
                      <Input
                        type="number"
                        onChange={(e) => {
                          const qty = e.target.value
                          setBookX({ ...bookX, quantity: qty })
                          const price = data.price
                          const tPrice = qty ? price * parseInt(qty) : 0
                          setTotal(tPrice);
                        }}
                      />
                      <FormLabel>Date</FormLabel>
                      <Input
                        type="date"
                        onChange={(e) =>
                          setBookX({ ...bookX, date: e.target.value })
                        }
                      />
                      <Text>Price: {total}</Text>
                    </FormControl>
                    <Button
                      colorScheme={"blue"}
                      variant={"solid"}
                      onClick={() => handleAdd()}
                    >
                      Book
                    </Button>
                  </Stack>
                </Flex>
              </Stack>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalBuyXperience;
  