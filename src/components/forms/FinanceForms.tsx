"use client";
import { Flex, Heading, Text, Textarea, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomButton from "./../buttons/CustomButton";
import lines from "@/assets/contactLines.png";
import Image from "next/image";

export default function FinanceForms() {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    cpf:"",
    birth:"",
    email: "",
    vehicule: "",
    installments: '',
    payment: ''
  });
  const [isNotValid, setIsNotValid] = useState(true);
  const [whatsMessage, setWhatsMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (
      (formData.name !== "" && formData.email !== "" && formData.tel !== "" && formData.cpf !== "" && formData.birth !== "" && formData.vehicule !== "")
    ) {
      setIsNotValid(false);
    } else {
      setIsNotValid(true);
    }

    setWhatsMessage(
      `Nome: ${formData.name}
E-Mail: ${formData.email}
Telefone: ${formData.tel}
CPF: ${formData.cpf}
Data de Nascimento: ${formData.birth}
Veículo: ${formData.vehicule}
Número de Parcelas: ${formData.installments}
Valor de Entrada: ${formData.payment}
`
    );
  }, [formData]);

  const handleClick: any = () => {
    if (isNotValid) return;
    const url = `https://api.whatsapp.com/send?phone=5518997970919&text=${encodeURIComponent(
      whatsMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Flex
      w={"100%"}
      h={"100%"}
      flexDirection={"column"}
      color={"light"}
      fontStyle={"italic"}
      paddingX={{ base: "50px", xl: "100px" }}
      paddingBottom={{ base: "20px", xl: "20px" }}
      textTransform={"uppercase"}
      fontSize={"0.8rem"}
      position={"relative"}
      marginTop={{base:'20px'}}
    >
      <Flex
        position={"absolute"}
        h={{ base: "100%", xl: "90%" }}
        w={"100%"}
        zIndex={10}
        align={"flex-end"}
      >
        <Flex
          position="relative"
          h={{ base: "20%", xl: "30%" }}
          w={"100%"}
          align={"flex-end"}
          display={{base:'none', xl:'flex'}}
        >
          <Image
            alt=""
            src={lines}
            fill
            style={{
              position: "absolute",
              objectFit: "cover",
              objectPosition: "bottom right",
            }}
          />
        </Flex>
      </Flex>
      <Heading color={"primary"} marginBottom={"20px"}>
       FINANCIAMENTO
      </Heading>
      <Text marginBottom={"20px"}>
      A RA Automóveis trabalha com as melhores taxas de financiamento do
mercado. Se ficou interessado por algum de nossos veículos, preencha os dados
abaixo que te retornaremos em breve.
      </Text>
      <Flex
        gap={"40px"}
        marginBottom={{ base: "20px", xl: "100px" }}
        zIndex={20}
        flexDirection={{ base: "column", xl: "row" }}
      >
        <Flex
          flexDirection={"column"}
          w={{ base: "100%", xl: "60%" }}
          gap={"15px"}
        >
          <Heading fontSize={"1.4rem"}>FALE CONOSCO</Heading>
          <Flex gap={"10px"} flexDirection={{ base: "column", xl: "row" }}>
            <Input
              color={"dark"}
              name="name"
              border={"2px solid"}
              borderColor={"primary"}
              bg={"light"}
              placeholder={"NOME"}
              value={formData.name}
              onChange={(event: any) => handleInputChange(event)}
            />
            <Input
              color={"dark"}
              name="tel"
              border={"2px solid"}
              borderColor={"primary"}
              bg={"light"}
              placeholder={"FONE"}
              value={formData.tel}
              onChange={(event: any) => handleInputChange(event)}
            />
          </Flex>
          <Flex gap={"10px"} flexDirection={{ base: "column", xl: "row" }}>
            <Input
              color={"dark"}
              name="cpf"
              border={"2px solid"}
              borderColor={"primary"}
              bg={"light"}
              placeholder={"CPF"}
              value={formData.cpf}
              onChange={(event: any) => handleInputChange(event)}
            />
            <Input
            type="date"
              color={"dark"}
              name="birth"
              border={"2px solid"}
              borderColor={"primary"}
              bg={"light"}
              placeholder={"DATA DE NASCIMENTO"}
              value={formData.birth}
              onChange={(event: any) => handleInputChange(event)}
            />
          </Flex>

          <Input
            color={"dark"}
            name="email"
            border={"2px solid"}
            borderColor={"primary"}
            bg={"light"}
            placeholder={"E-MAIL"}
            value={formData.email}
            onChange={(event: any) => handleInputChange(event)}
          />
          <Input
            color={"dark"}
            name="vehicule"
            border={"2px solid"}
            borderColor={"primary"}
            bg={"light"}
            placeholder={"VEÍCULO"}
            value={formData.vehicule}
            onChange={(event: any) => handleInputChange(event)}
          />
          <Input
            type="text"
            color={"dark"}
            name="installments"
            border={"2px solid"}
            borderColor={"primary"}
            bg={"light"}
            placeholder={"NÚMERO DE PARCELAS"}
            value={formData.installments}
            onChange={(event: any) => handleInputChange(event)}
          />
                   <Input
            type="text"
            color={"dark"}
            name="payment"
            border={"2px solid"}
            borderColor={"primary"}
            bg={"light"}
            placeholder={"VALOR DE ENTRADA"}
            value={formData.payment}
            onChange={(event: any) => handleInputChange(event)}
          />

          <Flex>
            <CustomButton
              isNotValid={isNotValid}
              handleClick={handleClick}
              title={"ENVIAR"}
            />
          </Flex>
        </Flex>
        <Flex
          flexDirection={"column"}
          w={{ base: "100%", xl: "40%" }}
          mt={{ base: "0rem", xl: "2.5rem" }}
          gap={"20px"}
        >
          <Text>
          Deixe aqui seu contato e os dados do veículo que tem interesse. Em
breve lhe retornaremos com um orçamento que cabe no seu bolso!
          </Text>
          <Text>
          A RA Automóveis agradece o seu contato.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
