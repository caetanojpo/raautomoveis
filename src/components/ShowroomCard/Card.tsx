import React from "react";
import { Image, Box, Text, Button, Flex, Heading } from "@chakra-ui/react";
type propsCardVehicle = {
  image: any;
  title: string;
  description: string;
  price: string;
  link: string;
};
const CardVehicle = (props: propsCardVehicle) => {
  return (
    <Flex
      bg="white"
      p={4}
      w="100%"
      minW={'260px'}
      maxW={'300px'}
      h="100%"
      minH='400px'
      borderRadius="20px"
      boxShadow="md"
      textAlign="center"
      flexDir="column"
      justify="space-between"
      alignItems="center"

    ><Flex h='200px' w='100%' position={'relative'} mb="15px" justify='center'>

      <Image
        src={props.image}
        alt={props.title}
       style={{objectFit:'cover', objectPosition:'center', position:'absolute' }}
        borderRadius="10px"
        border="2px solid #cb3438"
      />
      </Flex>
      <Text
        color="primary"
        fontFamily="JoyrideExt"
        fontWeight="bold"
        fontSize="16px"
      >
        {props.title}
      </Text>
      <Text
        fontSize="14px"
        fontFamily="Eina"
        color="black"
        width="240px"
        fontWeight={700}
        mb={4}
      >
        {props.description}
      </Text>
      <Text fontSize="xl" mb={4} fontFamily="Joyride" color="#919497">
        r$ {props.price}
      </Text>
      <Flex
        as="a"
        className="button"
        bgColor="#CB3438"
        href={props.link}
        target="_blank"
      >
        <Text fontFamily="JoyrideExt" fontSize="15px" color="light">
          {" "}
          ver detalhes
        </Text>
      </Flex>
    </Flex>
  );
};

export default CardVehicle;
