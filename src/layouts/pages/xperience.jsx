import React from "react";
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    useSafeLayoutEffect,
    Button,
    SimpleGrid,
    Card,
    CardBody,
    CardFooter,
    chakra,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useEffect, useState } from "react";
import ModalBuyXperience from "../../modal/ModalBuyXperience";

const Xperience = () => {
  const [experience, setExperience] = useState([]);
  const [toggelModel, setToggelModel] = useState(false);
  const [buy, setBuy] = useState({});

  const getTodo = async () => {
    const url = "http://localhost:2070";
    const get = await axios.get(`${url}/xperience`);
    setExperience([...get.data]);
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleBuy = (x) => {
    console.log(x.id);
    setToggelModel(true);
    setBuy(x);
  };
  return (
    <>
      <Heading
        fontSize={{ md: "6xl" }}
        color={"#606C5D"}
        textAlign={"center"}
        marginTop={"1rem"}
      >
        Xperience
      </Heading>
      <Text
        fontWeight={450}
        fontSize={"2xl"}
        color={"#606C5D"}
        textAlign={"center"}
      >
        Enjoy nature and have fun!
      </Text>
      <SimpleGrid
        w={"100%"}
        spacing={"2rem"}
        templateColumns="repeat(auto-fill, minmax(20%, 1fr))"
      >
        {experience.map((x, index) => (
          <Card
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
            marginTop={"5rem"}
          >
            <Image
              mt={-12}
              pos={"relative"}
              h={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={`${x.image}`}
            />
            <CardBody pt={10} align={"center"}>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                {x.name}
              </Heading>
              <Text color={"gray.600"} marginRight={"1rem"}>
                {x.description}
              </Text>
              <Text fontWeight={700} fontSize={"xl"}>
                Rp {x.price}
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                backgroundColor={"green.400"}
                onClick={() => handleBuy(x)}
              >
                Buy now!
              </Button>
            </CardFooter>
          </Card>
        ))}
        <ModalBuyXperience
          open={toggelModel}
          close={() => setToggelModel(false)}
          data={buy}
        />
      </SimpleGrid>
    </>
  );
};

export default Xperience;
