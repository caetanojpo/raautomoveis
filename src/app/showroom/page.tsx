import CardVehicle from '@/components/ShowroomCard/Card'
import { Veiculos } from '@/utils/Veiculos'
import { Divider, Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

export default function page() {


  return (
    <Flex bg='dark' display='column' pb={5} >
    <Grid
    w="100%"
    py="20px"
    px="35px"
    borderTop="3px solid #cb3438"
    borderBottom="3px solid #cb3438"
    bgColor="#848688"
    templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2,1fr)', lg:'repeat(3, 1r)', xl:'repeat(4, 1fr)', '2xl': 'repeat(5, 1fr)'}}
    gap={{ base: 5, md: 5 }}

  >
    {Veiculos.slice(0, 5).map((veiculo, index, slicedArray) => (
      <GridItem display={'flex'}     justifyContent={{base:'center',xl:"space-around" }}  alignItems="center" key={index}>
        <CardVehicle
          image={veiculo.image}
          title={veiculo.title}
          description={veiculo.description}
          price={veiculo.price}
          link={veiculo.link}
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
    px="35px"
    mt={5}
    borderTop="3px solid #cb3438"
    borderBottom="3px solid #cb3438"
    bgColor="#848688"
    templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2,1fr)', lg:'repeat(3, 1r)', xl:'repeat(4, 1fr)', '2xl': 'repeat(5, 1fr)'}}
    gap={{ base: 5, md: 5 }}

  >
    {Veiculos.slice(5, 10).map((veiculo, index, slicedArray) => (
      <GridItem display={'flex'}   justifyContent={{base:'center',xl:"space-around" }}  alignItems="center" key={index}>
        <CardVehicle
          image={veiculo.image}
          title={veiculo.title}
          description={veiculo.description}
          price={veiculo.price}
          link={veiculo.link}
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
  {
    Veiculos.length > 10 &&
    <Grid
    w="100%"
    py="20px"
    px="35px"
    mt={5}
    borderTop="3px solid #cb3438"
    borderBottom="3px solid #cb3438"
    bgColor="#848688"
    templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2,1fr)', lg:'repeat(3, 1r)', xl:'repeat(4, 1fr)', '2xl': 'repeat(5, 1fr)'}}
    gap={{ base: 5, md: 5 }}

  >
    {Veiculos.slice(10, 15).map((veiculo, index, slicedArray) => (
      <GridItem display={'flex'}   justifyContent={{base:'center',xl:"space-around" }}  alignItems="center" key={index}>
        <CardVehicle
          image={veiculo.image}
          title={veiculo.title}
          description={veiculo.description}
          price={veiculo.price}
          link={veiculo.link}
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
  }
  </Flex>
  )
}
