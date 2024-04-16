"use client";
import { Flex, Heading, List, ListItem, Text, useToast } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import CustomIcon from "../icons/CustomIcon";

export default function Footer() {

  const toast = useToast();

  const copyEmail = (description: string) => {
    navigator.clipboard.writeText(description)
    toast({
      title: 'Email copiado para área de transferência.',
      position: 'bottom-right',
      duration: 3000,
      status: 'info',
      isClosable: true,
    })
  }

  const navLinks = [
    {
      name: "SHOWROOM",
      link: "showroom",
    },
    {
      name: "SOBRE A RA AUTOMÓVEIS",
      link: "about",
    },
    {
      name: "CONTATO",
      link: "contact",
    },
    {
      name: "FINACIAMENTO",
      link: "finance",
    },
  ];

  const contactLinks = [
    {
      description: "TEL: (11) 97432-6999",
      icon: "mynaui:telephone",
      link: "https://api.whatsapp.com/send?phone=5511974326999",
    },
    {
      description: "automoveisra@gmail.com",
      icon: "ic:outline-email",
      link: "/",
    },
    {
      description: "@RA.AUTOMOVEIS",
      icon: "mdi:instagram",
      link: "https://www.instagram.com/ra.automoveis/",
    },
    {
      description: "RUA BOM JESUS DE PIRAPORA, 3171 - VILA RAMI - JUDIAI SP",
      icon: "teenyicons:pin-outline",
      link: "https://www.google.com/maps/place/RA+Autom%C3%B3veis/@-23.2187681,-46.8805116,18.5z/data=!4m10!1m2!2m1!1sra+automoveis!3m6!1s0x94cf215e960b7675:0x10659e5ec95489dd!8m2!3d-23.2181397!4d-46.8788733!15sCg1yYSBhdXRvbW92ZWlzWg8iDXJhIGF1dG9tb3ZlaXOSAQpjYXJfZGVhbGVymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU53YTBwVU0ybFJSUkFC4AEA!16s%2Fg%2F11sgkvg90n?entry=ttu",
    },
  ];

  return (
    <Flex
      as={"footer"}
      w={"100dvw"}
      h={{base:'75dvh', lg:"50dvh"}}
      maxH={'500px'}
      bg={"dark"}
      justify={{base:'evenly', lg:"center"}}
      align={"center"}
      color={"white"}
      flexDir={{base:'column', lg:'row'}}
      padding={'20px'}
    >
      <Flex
        w={{base:'100%', lg:"50%"}}
        h={{base:'50%', lg:"100%"}}
        flexDir={"column"}
        justify={{base:'start', lg:"center"}}
        align={{base:'start', lg:"center"}}
      >
        <Flex flexDir={"column"} gap={"10px"}>
          <Heading
            as={"h1"}
            color={"primary"}
            fontStyle={"italic"}
            fontSize={"1.4rem"}
            letterSpacing={"1px"}
          >
            RA AUTOMÓVEIS
          </Heading>
          <Flex>
            <List spacing={3} as={"ul"}>
              {navLinks.map((link, index) => (
                <ListItem
                  display={"flex"}
                  w={"100%"}
                  h={"1.4rem"}
                  key={index}
                  _hover={{ color: "primary" }}
                  transition={"all 0.3s ease-in-out"}
                >
                  <Link href={link.link}>
                    <Text>{link.name}</Text>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={{base:'100%', lg:"50%"}}
        h={{base:'50%', lg:"100%"}}
        flexDir={"column"}
        justify={{base:'start', lg:"center"}}
        align={{base:'start', lg:"center"}}
      >
        <Flex flexDir={"column"} gap={"10px"}>
          <Heading
            as={"h2"}
            color={"primary"}
            fontStyle={"italic"}
            fontSize={"1.4rem"}
          >
            CONTATO
          </Heading>
          <Flex>
            <List spacing={3} as={"ul"}>
              {contactLinks.map((link, index) => (
                <ListItem
                  display={"flex"}
                  w={"100%"}
                  key={index}
                  h={"1.4rem"}
                  _hover={{ color: "primary" }}
                  transition={"all 0.3s ease-in-out"}
                >
                  <Link href={link.link} target={link.link === "/" ? '' : '_blank'}>
                    <Flex w={"100%"} align={"center"} gap={"10px"} onClick={() => { link.link === '/' ? 
       copyEmail(link.description)
           : ''}}>
                      <CustomIcon icon={link.icon} color="#CB3438" />
                      <Text>{link.description.toUpperCase()}</Text>
                    </Flex>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
