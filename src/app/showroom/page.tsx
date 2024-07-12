"use client";
import CardVehicle from "@/components/ShowroomCard/Card";
import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useFetchXML, { Veiculo } from "../hooks/useFetchXML";
import { formatCurrency } from "@/utils/formatCurrency";
import { handleSendVehiculeMessage } from "@/utils/SendVehiculeMessage";

const URL =
  "https://boomsistemas.com.br/api/integration-api/xml/ra-1183-ncnbvfghdhdgxxxxxx1777";

const renderVehicleGrid = (
  data: any[],
  start: number,
  end: number,
  mt: number | string = 5
) => {
  return (
    <Grid
      w="100%"
      py="20px"
      px={{ base: "5px", lg: "35px" }}
      mt={mt}
      borderTop="3px solid #cb3438"
      borderBottom="3px solid #cb3438"
      bgColor="#848688"
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
      gap={{ base: 5, md: 5 }}
    >
      {data.slice(start, end).map((veiculo, index, slicedArray) => (
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
            price={formatCurrency(veiculo.valor)}
            handleClick={() => handleSendVehiculeMessage(veiculo)}
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
  );
};

export default function Page() {
  const { loading, data, error } = useFetchXML(URL);

  if (loading) {
    return (
      <Flex justifyContent="center"   bgColor="#848688" alignItems="center" h="10vh">
        <Spinner size="xl" color='white'/>
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex justifyContent="center"   bgColor="#848688" alignItems="center" h="10vh">
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Flex>
    );
  }

  return (
    <Flex bg="dark" display="column" pb={5}>
      {renderVehicleGrid(data, 0, 5, 0)}{" "}
      {/* Remove margin top for the first grid */}
      {renderVehicleGrid(data, 5, 10)}
      {data.length > 10 && renderVehicleGrid(data, 10, 15)}
      {data.length > 15 && renderVehicleGrid(data, 15, 20)}
    </Flex>
  );
}
