"use client";
import CardVehicle from "@/components/ShowroomCard/Card";
import { Veiculos } from "@/utils/Veiculos";
import { Divider, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import useFetchXML from "../hooks/useFetchXML";
const URL =
  "https://boomsistemas.com.br/api/integration-api/xml/ra-1183-ncnbvfghdhdgxxxxxx1777";
export default function Page() {
  const { loading, data, error } = useFetchXML(URL);
  return (
    <Flex bg="dark" display="column" pb={5}>
      <Grid
        w="100%"
        py="20px"
        px={{ base: "10px", md: "35px" }}
        borderTop="3px solid #cb3438"
        borderBottom="3px solid #cb3438"
        bgColor="#848688"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3, 1r)",
          xl: "repeat(4, 1fr)",
          "2xl": "repeat(5, 1fr)",
        }}
        gap={{ base: 5, md: 5 }}
      >
        {data.slice(0, 5).map((veiculo, index, slicedArray) => (
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
                display={{ base: "none", md: "flex" }}
                orientation="vertical"
                h="320px"
                borderColor="light"
              />
            )}
          </GridItem>
        ))}
      </Grid>
      <Grid
        w="100%"
        py="20px"
        px={{ base: "5px", lg: "35px" }}
        mt={5}
        borderTop="3px solid #cb3438"
        borderBottom="3px solid #cb3438"
        bgColor="#848688"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3, 1r)",
          xl: "repeat(4, 1fr)",
          "2xl": "repeat(5, 1fr)",
        }}
        gap={{ base: 5, md: 5 }}
      >
        {data.slice(5, 10).map((veiculo, index, slicedArray) => (
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
                display={{ base: "none", md: "flex" }}
                orientation="vertical"
                h="320px"
                borderColor="light"
              />
            )}
          </GridItem>
        ))}
      </Grid>
      {data.length > 10 && (
        <Grid
          w="100%"
          py="20px"
          px={{ base: "5px", lg: "35px" }}
          mt={5}
          borderTop="3px solid #cb3438"
          borderBottom="3px solid #cb3438"
          bgColor="#848688"
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3, 1r)",
            xl: "repeat(4, 1fr)",
            "2xl": "repeat(5, 1fr)",
          }}
          gap={{ base: 5, md: 5 }}
        >
          {data.slice(10, 15).map((veiculo, index, slicedArray) => (
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
                  display={{ base: "none", md: "flex" }}
                  orientation="vertical"
                  h="320px"
                  borderColor="light"
                />
              )}
            </GridItem>
          ))}
        </Grid>
      )}
      {data.length > 15 && (
        <Grid
          w="100%"
          py="20px"
          px={{ base: "5px", lg: "35px" }}
          mt={5}
          borderTop="3px solid #cb3438"
          borderBottom="3px solid #cb3438"
          bgColor="#848688"
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3, 1r)",
            xl: "repeat(4, 1fr)",
            "2xl": "repeat(5, 1fr)",
          }}
          gap={{ base: 5, md: 5 }}
        >
          {data.slice(15, 20).map((veiculo, index, slicedArray) => (
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
                  display={{ base: "none", md: "flex" }}
                  orientation="vertical"
                  h="320px"
                  borderColor="light"
                />
              )}
            </GridItem>
          ))}
        </Grid>
      )}
    </Flex>
  );
}
