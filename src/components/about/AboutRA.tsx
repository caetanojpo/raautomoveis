import { Flex, Text, Heading, Highlight } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ra from "@/assets/aboutRa.png";

export default function AboutRA() {
  return (
    <Flex h={{ base: "100%", xl: "90dvh" }} w={"100dvw"} position={"relative"} fontFamily={'Eina'}>
      <Flex position={"absolute"} h={"100%"} w={"100%"}>
        <Flex position={"relative"} h={"100%"} w={"100%"}>
          <Image
            alt=""
            src={ra}
            fill
            objectFit={"cover"}
            objectPosition={"left"}
            style={{ position: "absolute" }}
          />
        </Flex>
      </Flex>
      <Flex
        zIndex={40}
        h={"100%"}
        w={"100%"}
        align={"flex-start"}
        paddingX={{ base: "25px", xl: "50px" }}
        paddingY={{ base: "20px", xl: "20px" }}
        flexDirection={"column"}
        gap={"20px"}
      >
        <Flex
          fontStyle={`italic`}
          color={`light`}
          flexDirection={"column"}
          align={"flex-start"}
          style={{ letterSpacing: "2px" }}
        >
    
          <Flex w={"100%"}>
            <Heading fontSize={"2.2rem"} >VENHA CONHECER</Heading>
          </Flex>
          <Heading fontSize={"2.2rem"}>
            NOSSA <span style={{color:'#CB3438', fontSize:'3rem'}}>LOJA</span>
          </Heading>
        </Flex>
        <Flex
          flexDirection={"column"}
          w={{ base: "100%", md:'60%', xl: "45%" }}
          color={"light"}
          textAlign={"left"}
          fontSize={{ xl: "1rem", "2xl": "1.4rem" }}
          gap={"20px"}
        >
          <Text>
          Estamos localizados em Jundiai-SP. Nosso horário de atendimento é
das 08:30h às 18:00h. Venha tomar um café e conhecer o nosso showroom e nossas
opções de parcelamento e financiamento.

          </Text>
          <Text>
            Nossa meta é realizar o seu {" "}
            <span style={{ color: "#CB3438", fontWeight: "bold" }}>
            sonho
            </span>
            !
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
