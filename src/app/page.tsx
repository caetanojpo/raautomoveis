"use client";
import Image from "next/image";
import CarBanner from "/src/assets/banner.png";
import ContactLine from "/src/assets/contactLines.png";
import InfoDetail from "../assets/infoDetail.png";
import AvatarMarcos from "../assets/avatarMarcos.png";
import AvatarValdineia from "../assets/avatarValdineia.png";
import EvaluationDefault from "@/assets/evaluationDefault.png";
import { Divider, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { EvaluationCard } from "@/components/EvaluationCard";
import React from "react";
import CardVehicle from "@/components/ShowroomCard/Card";
import { Veiculos } from "@/utils/Veiculos";
import useFetchXML from "./hooks/useFetchXML";

const Avaliacoes = [
  {
    avatar: EvaluationDefault,
    rating: 5,
    name: "William Moraes",
    time: "um mês atrás",
    comment:
      "Fiz aquisição de um T-Cross na RA Automóveis, carro de procedência, estoque de modelos variados e carros pra pessoas exigentes. O atendimento e serviços prestados na pré-venda, venda e pós venda nota 1000 !!!!! Me tornei cliente fidelidade.",
  },
  {
    avatar: AvatarMarcos,
    rating: 5,
    name: "Marcos Marcelo bastos",
    time: "2 meses atrás",
    comment:
      "Adorei a recepção do proprietário Ricardo que nos atendeu muito bem, a loja é linda e os carros são muito novos.",
  },
  {
    avatar: AvatarValdineia,
    rating: 5,
    name: "valdineia pereira",
    time: "um mês atrás",
    comment:
      "Atendimento de excelente qualidade, além de automóveis bem conservado e , com preços acessíveis. Recomendo com certeza 🤩",
  },
];
const URL =
  "https://boomsistemas.com.br/api/integration-api/xml/ra-1183-ncnbvfghdhdgxxxxxx1777";

export default function Home() {
  const { loading, data, error } = useFetchXML(URL);
  return (
    <Flex flexDir="column" bgColor="#282829">
      <Image
        style={{ display: "flex", width: "100%", height: "auto" }}
        src={CarBanner}
        alt="Banner de carro"
        quality={100}
        priority={true}
      />
      <Flex
        w="100%"
        h={{ base: "150px", md: "200px" }}
        bgColor="#282829"
        pt={{ base: "20px", md: "50px" }}
        pl={{ base: "20px", md: "50px" }}
        position="relative"
      >
        <Heading
          as="h1"
          color="#fefefe"
          fontStyle="italic"
          fontSize={{ base: "1rem", md: "1.4rem" }}
          letterSpacing="1px"
          position="relative"
          zIndex={{ base: "", md: "999" }}
          w={{ base: "", md: "55%" }}
        >
          HÁ 29 ANOS NO MERCADO VIABILIZANDO SONHOS, DE FORMA TRANSPARENTE,
          RÁPIDA E EFICIENTE. VENHA FAZER PARTE DESSA{" "}
          <Text as="span" color="primary">
            EXPERIÊNCIA!
          </Text>
        </Heading>
        <Flex
          display={{ base: "none", xl: "flex" }}
          h={"100%"}
          w={"100%"}
          position={"absolute"}
          top={0}
          left={0}
        >
          <Flex h={"100%"} w={"100%"} position={"relative"}>
            <Image
              style={{
                position: "absolute",
                objectFit: "cover",
              }}
              fill
              src={ContactLine}
              alt="ContactLine"
              quality={100}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        h="auto"
        bgColor="#282829"
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justify="center"
      >
        {Avaliacoes.map((avaliacao, index) => (
          <EvaluationCard
            key={index}
            avatar={avaliacao.avatar}
            rating={avaliacao.rating}
            name={avaliacao.name}
            time={avaliacao.time}
            comment={avaliacao.comment}
          />
        ))}
      </Flex>
      <Flex
        position="relative"
        alignItems="center"
        mt="30px"
        mb="20px"
        bgColor="#282829"
      >
        <Text
          ml="30px"
          fontFamily={"Joyride"}
          position="absolute"
          fontSize={{ base: "1rem", md: "1.4rem" }}
          color="light"
        >
          confira nosso showroom
        </Text>
        <Image
          src={InfoDetail}
          alt="InfoDetail"
          quality={100}
          style={{ width: "650px", height: "70px" }}
        />
      </Flex>
      <Grid
        w="100%"
        py="20px"
        px="35px"
        mt={5}
        borderTop="3px solid #cb3438"
        borderBottom="3px solid #cb3438"
        bgColor="#848688"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3, 1r)",
          xl: "repeat(4, 1fr)",
          "2xl": "repeat(5, 1fr)",
        }}
        gap={{ base: 5, md: 5 }}
      >
        {data
          .slice()
          .sort(() => 0.5 - Math.random())
          .slice(0, 5)
          .map((veiculo, index, slicedArray) => (
            <GridItem
              display={"flex"}
              justifyContent={{ base: "center", xl: "space-around" }}
              alignItems="center"
              key={index}
            >
              <CardVehicle
                image={veiculo.galeria?.item[0]}
                title={veiculo.titulo.toLowerCase()}
                description={veiculo.modelo.toLowerCase()}
                price={veiculo.valor.toString()}
                link={""}
              />
              {index !== slicedArray.length - 1 && (
                <Divider
                  display={{ base: "none", xl: "flex" }}
                  orientation="vertical"
                  h="320px"
                  borderColor="light"
                />
              )}
            </GridItem>
          ))}
      </Grid>
    </Flex>
  );
}
