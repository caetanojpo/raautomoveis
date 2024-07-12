import React from "react";
import { Image, Box, Text, Button, Flex, Heading } from "@chakra-ui/react";
type propsCardVehicle = {
  image: any;
  title: string;
  description: string;
  price: string;
  link?: string;
  handleClick?: () => void;
};
const CardVehicle = (props: propsCardVehicle) => {
  return (
    <Flex
      bg="white"
      p={{ base: 4, md: 4 }}
      w="100%"
      minW={"260px"}
      maxW={{ base: "600px", lg: "300px" }}
      h="100%"
      minH={{ base: "100px", md: "450px" }}
      borderRadius={{ base: "10px", md: "20px" }}
      boxShadow="md"
      textAlign="center"
      flexDir={{ base: "row", md: "column" }}
      justify="space-between"
      alignItems={"center"}
    >
      <Flex
        h={{ base: "100%", md: "50%" }}
        w={{ base: "50%", md: "80%", xl: "100%" }}
        maxW={{ base: "190px", lg: "300px" }}
        position={"relative"}
        mb={{ base: "0px", md: "15px" }}
        justify="center"
        align={"center"}
        mr={{ base: "10px", md: "0px" }}
      >
        <Image
          src={props.image}
          alt={props.title}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            position: "absolute",
            maxHeight: "100%",
          }}
          borderRadius="10px"
          border="2px solid #cb3438"
        />
      </Flex>
      <Flex
        flexDir={"column"}
        w={{ base: "50%", md: "100%" }}
        align="center"
        justify={{ base: "center", md: "space-between" }}
        h={{ base: "100%", md: "50%" }}
      >
        <Text
          color="primary"
          fontFamily="JoyrideExt"
          fontWeight="bold"
          fontSize={{ base: "10px", md: "16px" }}
        >
          {props.title}
        </Text>
        <Text
          fontSize={{ base: "10px", md: "14px" }}
          fontFamily="Eina"
          color="black"
          width={{ base: "80%", md: "240px" }}
          fontWeight={700}
          mb={4}
        >
          {props.description}
        </Text>
        <Text
          fontSize={{ base: "12px", md: "xl" }}
          mb={4}
          fontFamily="Joyride"
          color="#919497"
        >
        {props.price}
        </Text>

        <Flex
          className="button"
          bgColor="#CB3438"
          padding={{ base: 4, md: 2 }}
          onClick={props.handleClick}
        >
          <Text
            fontFamily="JoyrideExt"
            fontSize={{ base: "10px", md: "15px" }}
            color="light"
          >
            {" "}
            ver detalhes
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardVehicle;
