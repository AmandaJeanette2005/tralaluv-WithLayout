import { ReactNode } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box bg={"blue.800"} position={"relative"}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage='https://i.pinimg.com/736x/81/de/e0/81dee09c4a7bf422cb16f5b705224255--free-stock-photos-free-photos.jpg'
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={"linear(to-r, gray.800 10%, transparent)"}
          w={"full"}
          h={"full"}
        />
      </Flex>

      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.400"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"gray.500"}
              >
                Tralaluv
              </Text>
              <Heading
                color={"white"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                Exploring the World and Discovering Ourselves!
              </Heading>
              <Text fontSize={"xl"} color={"gray.400"}>
                Traveling is one of the most enriching and transformative
                experiences that humans can undertake. It is an opportunity to
                step out of our comfort zones, explore new places, and encounter
                diverse cultures. Whether it be wandering through bustling
                cities, hiking in serene mountains, or relaxing on exotic
                beaches, travel opens doors to new perspectives and personal
                growth. In this essay, we will explore the significance of
                travel, its benefits, and how it contributes to a deeper
                understanding of the world and ourselves.
              </Text>
            </Box>

            <Heading
              color={"white"}
              mb={5}
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              Why is Travel Important?
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={"heading"}
                    fontSize={"3xl"}
                    color={"white"}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={"xl"} color={"gray.400"}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }, { children: ReactNode }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    content: (
      <>
        <StatsText>Traveling will improve your mental health</StatsText> If you
        have depression and anxiety you will feel good after traveling and
        making new activities, and as we know a healthy body means definitely a
        healthy mind and healthy life!
      </>
    ),
  },
  {
    content: (
      <>
        <StatsText>
          Traveling improves your communications skills and helps you to disjoin
          the busy life
        </StatsText>
        Traveling will help you in enhancing your language, too, and also gain
        the experience to learn new languages from the countries you visit.
      </>
    ),
  },
  {
    content: (
      <>
        <StatsText>Traveling makes your mind calm and more positive</StatsText>{" "}
        when you travel you will feel the sea, the green areas, the colorful
        streets, and the ancient areas you can visit. Traveling will give you
        positive feelings and a positive mind.
      </>
    ),
  },
  {
    content: (
      <>
        <StatsText>
          Traveling give you the opportunity to explore the other cultures
        </StatsText>{" "}
        Traveling is not only visiting a new place or seeing new spots you never
        see before, it's also a chance to know other people's culture and
        history!
      </>
    ),
  },
];
