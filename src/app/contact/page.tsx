"use client"
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import map from "@/assets/map.png";
import Forms from "@/components/forms/Forms";
import Link from "next/link";

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
      <Link href={'https://maps.app.goo.gl/EZQ9Q26ZZAN2BzCA8'} target="_blank">
      <Flex position={"relative"} h={{base:"30dvh", xl:"100dvh"}} w={"100%"} zIndex={30} display={{base:'none', md:'flex'}}>
        <Image
          alt=""
          src={map}
          fill
          style={{ position: "absolute", objectFit:'cover', objectPosition:'center' }}
        />
      </Flex>
      </Link>
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
