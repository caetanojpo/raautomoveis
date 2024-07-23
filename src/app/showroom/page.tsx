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
import CustomModal from "@/components/Modal/CustomModal";

const URL =
  "https://boomsistemas.com.br/api/integration-api/xml/ra-1183-ncnbvfghdhdgxxxxxx1777";

const renderVehicleGrid = (
  data: any[],
  start: number,
  end: number,
  mt: number | string = 5,
  handleClick: (veiculo: Veiculo) => void
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
            description={veiculo.ano_mod.toString()}
            price={formatCurrency(veiculo.valor)}
            handleClick={() => handleClick(veiculo)}
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Veiculo | null>(null);

  const openModal = (veiculo: Veiculo) => {
    setSelectedVehicle(veiculo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVehicle(null);
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <Flex
        justifyContent="center"
        bgColor="#848688"
        alignItems="center"
        h="10vh"
      >
        <Spinner size="xl" color="white" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex
        justifyContent="center"
        bgColor="#848688"
        alignItems="center"
        h="10vh"
      >
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Flex>
    );
  }

  return (
    <>
      <Flex bg="dark" display="column" pb={5}>
        {renderVehicleGrid(data, 0, 5, 0, openModal)}{" "}
        {/* Remove margin top for the first grid */}
        {renderVehicleGrid(data, 5, 10, undefined, openModal)}
        {data.length > 10 &&
          renderVehicleGrid(data, 10, 15, undefined, openModal)}
        {data.length > 15 &&
          renderVehicleGrid(data, 15, 20, undefined, openModal)}
        {data.length > 20 &&
          renderVehicleGrid(data, 20, 25, undefined, openModal)}
        {data.length > 25 &&
          renderVehicleGrid(data, 25, 30, undefined, openModal)}
        {data.length > 30 &&
          renderVehicleGrid(data, 30, 35, undefined, openModal)}
      </Flex>
      <CustomModal isOpen={isModalOpen} onClose={closeModal} vehicle={selectedVehicle} />
    </>
  );
}
