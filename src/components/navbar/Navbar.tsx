"use client";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  List,
  ListItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/navbarLogo.png";
import lines from "@/assets/navlines.png";
import { navGradient } from "@/app/theme";
import { usePathname } from "next/navigation";
import CustomIcon from "../icons/CustomIcon";

export default function Navbar() {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nav = [
    { name: "HOME", link: "/" },
    { name: "SHOWROOM", link: "/showroom" },
    { name: "SOBRE", link: "/about" },
    { name: "CONTATO", link: "/contact" },
    { name: "FINANCIAMENTO", link: "/finance" },
  ];
  return (
    <>
      <Flex
        w={"100dvw"}
        h={{ base: "8dvh", lg: "10dvh" }}
        bgColor={"dark"}
        justify={"space-between"}
        position={"relative"}
      >
        <Image
          alt=""
          src={lines}
          fill
          style={{ position: "absolute", backgroundPosition: "left" }}
        />
        <Flex
          w={{ base: "70%", md: "50%", xl: "100%" }}
          maxW={{ xl: "550px", "2xl": "590px" }}
          h={"100%"}
          position={"relative"}
          zIndex={30}
        >
          <Link href='/'>
          <Image
            alt="RA Automóveis Logo"
            src={logo}
            style={{ position: "absolute" }}
          />
          </Link>
        </Flex>
        <Flex
          h={"100%"}
          w={"60%"}
          align={"center"}
          justify={{ base: "end", xl: "start" }}
        >
          <List
            display={{ base: "none", xl: "flex" }}
            w={"100%"}
            color={"light"}
            justifyContent={"space-evenly"}
            zIndex={40}
            mr={{ xl: "4dvw", "2xl": "2.5dvw" }}
            mt={{ xl: "1.2dvh", "2xl": "1dvh" }}
            fontSize={{ xl: "0.9rem", "2xl": "1.1rem" }}
            fontStyle={"italic"}
            fontWeight={"bold"}
          >
            {nav.map((item, index) => (
              <ListItem
                key={index}
                borderBottom={pathname === item.link ? "3px solid" : "3px solid"}
                borderColor={pathname === item.link ? "primary" : "transparent"}
                // className="menu__link"
                _hover={{borderBottom:'3px solid', borderColor:'primary'}}
                minH={{ xl: "25px", "2xl": "28px" }}
              >
                <Link href={item.link}>
                  <Text>{item.name}</Text>
                </Link>
              </ListItem>
            ))}
          </List>
          <Button
            bg={"primary"}
            onClick={onOpen}
            mr="6dvw"
            display={{ base: "", xl: "none" }}
          >
            <CustomIcon color="white" icon="material-symbols:menu" />
          </Button>
          <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={'xs'}>
            <DrawerOverlay />
            <DrawerContent bg={"secondary"}>
              <DrawerBody   overflow={'hidden'}>
                <List
                  display={{ base: "flex", xl: "none" }}
                  flexDir="column"
                  w={"100%"}
                  h="100%"
                  gap="2rem"
                  mt="1rem"
                  color={"light"}
                  fontSize={"1.2rem"}
                  fontStyle={"italic"}
                  fontWeight={"bold"}
                
                >
                         <ListItem >
                      <Link href={"/"} onClick={onClose}>
                        <Text>{"HOME"}</Text>
                      </Link>
                    </ListItem>
                  {nav.map((item, index) => (
                    <ListItem key={index} onClick={onClose}>
                      <Link href={item.link}>
                        <Text>{item.name}</Text>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
      <Flex w={"100dvw"} h="1.8dvh" bg={navGradient}></Flex>
    </>
  );
}
