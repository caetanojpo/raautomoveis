"use client";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";
type propsEvaluation = {
  avatar: any;
  rating: number;
  name: string;
  time: string;
  comment: string;
};
export const EvaluationCard = (props: propsEvaluation) => {
  return (
    <Flex
      w={{ base: "100%", xl: "590px" }}
      color="white"
      boxSizing="border-box"
      wordBreak="break-word"
      flexDirection={{ base: "column", xl: "row" }}
    >
      <Flex
        w={{ base: "100%", xl: "120px" }}
        h="100%"
        justifyContent="center"
        pt="30px"
      >
        <Image
          style={{
            width: "80px",
            height: "80px",
            border: "2.5px solid #CB3438",
            borderRadius: "50%",
          }}
          src={props.avatar}
          alt="Avatar Image"
          quality={100}
        />
      </Flex>
      <Flex
        w={{ base: "100%", xl: "350px" }}
        h="100%"
        flexDir="column"
        mt="30px"
        ml="10px"
      >
        <Text
          fontFamily="Joyride"
          color="light"
          fontSize="20px"
          w="auto"
          textAlign={{ base: "center", xl: "left" }}
        >
          {props.name}
        </Text>
        <Flex
          flexDir="column"
          w={{ base: "100%", xl: "450px" }}
          pr={{ base: 4, xl: 0 }}
        >
          <Flex w="100%" flexDir="row" alignItems="center">
            <Rating
              readonly
              size={30}
              initialValue={props.rating}
              fillColor="#CB3438"
              SVGstyle={{ display: "inline-block" }}
            />
            <Text ml="10px" color="lightGray" fontFamily="Eina" fontSize="15px">
              {props.time}
            </Text>
          </Flex>
          <Text
            w="100%"
            wordBreak="break-word"
            fontSize={{ base: "0.9rem", xl: "1rem" }}
            textAlign={{ base: "left", xl: "left" }}
          >
            {props.comment}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};