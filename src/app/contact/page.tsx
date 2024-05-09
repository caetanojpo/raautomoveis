"use client"
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import map from "@/assets/map.png";
import Forms from "@/components/forms/Forms";

export default function page() {
  return (
    <Flex
      h={`100%`}
      minH={"100dvh"}
      w={"100dvw"}
      flexDirection={"column"}
      bg={`dark`}
      gap={"40px"}
    >
      <Flex position={"relative"} h={{base:"30dvh", xl:"100dvh"}} w={"100%"} zIndex={30} display={{base:'none', md:'flex'}}>
        <Image
          alt=""
          src={map}
          fill
          style={{ position: "absolute", objectFit:'cover', objectPosition:'center' }}
        />
      </Flex>
      <Flex position={"relative"} h={{base:"40dvh", xl:"100dvh"}} w={"100%"} zIndex={30} display={{base:'flex', md:'none'}}>
        <Image
          alt=""
          src={map}
          fill
          style={{ position: "absolute", objectFit:'cover', objectPosition:'center' }}
        />
      </Flex>
      <Flex>
        <Forms/>
      </Flex>
    </Flex>
  );
}
