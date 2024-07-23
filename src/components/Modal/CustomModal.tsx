"use client";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Box,
  Text,
  VStack,
  HStack,
  Divider,
  Wrap,
  WrapItem,
  Tag,
  Flex,
  Collapse,
} from "@chakra-ui/react";
import { Veiculo } from "@/app/hooks/useFetchXML";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { formatCurrency } from "@/utils/formatCurrency";
import { useState } from "react";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import { handleSendVehiculeMessage } from "@/utils/SendVehiculeMessage";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: Veiculo | null;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  vehicle,
}) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  if (!isOpen || !vehicle) return null;

  const toggleShowAllFeatures = () => setShowAllFeatures(!showAllFeatures);

  const displayedFeatures = showAllFeatures
    ? vehicle.opcional?.item
    : vehicle.opcional?.item.slice(0, 5);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" >
      <ModalOverlay />
      <ModalContent maxH="fit-content" maxW="1000px" overflowY="auto">
        <ModalHeader>{vehicle.titulo.toUpperCase()}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
            <Box flex="1" mr={{ base: 0, md: 4 }}>
              {vehicle.galeria?.item && vehicle.galeria.item.length > 0 ? (
                <ImageCarousel images={vehicle.galeria.item} />
              ) : (
                <Image
                  src="https://via.placeholder.com/400"
                  alt="No images available"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              )}
            </Box>
            <Box flex="1" px="4">
              <VStack align="start" spacing={2}>
                <Text fontSize="md" fontWeight="bold">
                  Preço:
                </Text>
                <Text fontSize="md">{formatCurrency(vehicle.valor)}</Text>
                <Divider />
                <Text fontSize="md" fontWeight="bold">
                  Descrição:
                </Text>
                <Text fontSize="md">{vehicle.observacao}</Text>
                <Divider />
                <Text fontSize="md" fontWeight="bold">
                  Ano:
                </Text>
                <Text fontSize="md">
                  {vehicle.ano_fab} / {vehicle.ano_mod}
                </Text>
                <Divider />
                <Text fontSize="md" fontWeight="bold">
                  Portas:
                </Text>
                <Text fontSize="md">{vehicle.portas}</Text>
                <Divider />
                <Text fontSize="md" fontWeight="bold">
                  KM:
                </Text>
                <Text fontSize="md">{vehicle.km} km</Text>
                <Divider />
                <Text fontSize="md" fontWeight="bold">
                  Combustivel:
                </Text>
                <Text fontSize="md">{vehicle.combustivel}</Text>
              </VStack>
            </Box>
          </Box>
          {vehicle.opcional?.item && vehicle.opcional.item.length > 0 && (
            <>
              <Divider mt={2} mb={4} />
              <Box mt={2}>
                <Text fontSize="md" fontWeight="bold" mb={2}>
                  Complementos:
                </Text>
                <Collapse startingHeight={40} in={showAllFeatures}>
                  <Wrap>
                    {vehicle.opcional.item.map((feature, index) => (
                      <WrapItem key={index}>
                        <Tag size="md" variant="solid" bg="dark">
                          {feature}
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Collapse>
                <Flex>
                  <Text
                    size="sm"
                    color="primary"
                    fontWeight='bold'
                    cursor='pointer'
                    h='6'
                    _hover={{borderBottom:'2px'}}
                    onClick={toggleShowAllFeatures}
                    mt={2}
            
                  >
                    Mostrar {showAllFeatures ? "menos" : "mais"}
                  </Text>
                </Flex>
              </Box>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            bg="dark"
            color="white"
            mr={4}
            onClick={onClose}
            _hover={{ bg: "dark" }}
          >
            Cancelar
          </Button>
          <Button
            className="button buttonModal"
            bg="primary"
            color="white"
            onClick={() => handleSendVehiculeMessage(vehicle)}
            _hover={{ bg: "secondary" }}
            leftIcon={<WhatsAppIcon/>}
            fontWeight={'bold'}
          >
            ENTRAR EM CONTATO
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
