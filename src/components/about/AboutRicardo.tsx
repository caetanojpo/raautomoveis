"use client";
import {
  Flex,
  Text,
  Heading,
  Highlight,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Ricardo from "@/assets/aboutRicardo.png";
import IconRicardo from "@/assets/RicardoIcon.jpeg";

export default function AboutRicardo() {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  return (
    <Flex h={{ base: "100%", xl: "90dvh" }} w={"100dvw"} position={"relative"}>
      
        <Flex position={"absolute"} h={"100%"} w={"100%"}>
          <Flex position={"relative"} h={"100%"} w={"100%"}>
            <Image
              alt=""
              src={Ricardo}
              fill
              objectFit={"cover"}
              objectPosition={"right"}
              style={{ position: "absolute" }}
            />
          </Flex>
        </Flex>

      <Flex
        zIndex={40}
        h={"100%"}
        w={"100%"}
        align={"flex-end"}
        paddingX={{ base: "25px", xl: "50px" }}
        paddingY={{ base: "20px", xl: "20px" }}
        flexDirection={"column"}
      >
        <Flex
          fontStyle={'italic'}
          color={'light'}
          flexDirection={"column"}
          align={"center"}
          style={{ letterSpacing: "5px" }}
        >
          <Heading
            color={{ base: "", xl: "primary" }}
            fontSize={{ base: "1.6rem", xl: "2.2rem" }}
          >
            SOBRE
          </Heading>
          <Flex w={"100%"}>
            <Heading
              fontSize={{ base: "1.6rem", xl: "3rem" }}
              color={{ base: "primary", xl: "white" }}
              mr="10px"
            >
              RICARDO
            </Heading>
            {isMobile && (
              <Heading fontSize={"1.6rem"} color={"primary"}>
                {" "}
                A.
              </Heading>
            )}
          </Flex>
          {!isMobile && (
            <Flex w={"100%"} justify={"flex-end"} ml={"1dvw"}>
              <Heading fontSize={"3rem"}>AMBROSIO</Heading>
            </Flex>
          )}
          {isMobile && (
            <Image
              alt=""
              src={IconRicardo}
              width={110}
              style={{
                borderRadius: "150%",
                border: "2px solid #CB3438",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            />
          )}
        </Flex>
        <Flex
          flexDirection={"column"}
          w={{ base: "100%", md: "60%", xl: "45%" }}
          color={"light"}
          textAlign={"right"}
          fontSize={{ xl: "1rem", "2xl": "1.4rem" }}
          gap={"20px"}
        >
          <Text>
            Ricardo Ambrósio sempre foi apaixonado por Carros. Jipeiro e
            fascinado por motores, teve o mundo dos automóveis sempre presente
            em sua vida. Trabalhou por 29 anos em Bancos, fazendo financiamento
            de veículos, ajudando milhares de pessoas a conquistar o sonho do
            seu Carro Novo.
          </Text>
          <Text>
            Agora, idealizou um projeto antigo de ter sua própria Loja de
            Automóveis e fundou a RA Automóveis a 3 anos em Jundiaí. Desde
            então, foram mais de 500 veículos vendidos, carregando sempre em
            cada negociação, Transparência, Honestidade e Qualidade nos Veículos
            e no Atendimento.
          </Text>
          <Text>
            Nessa caminhada, foram diversos{" "}
            <span style={{ color: "#CB3438", fontWeight: "bold" }}>
              sonhos realizados
            </span>
            , Necessidade Supridas, Amizades Construídas e uma grande história
            no mercado automotivo.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}