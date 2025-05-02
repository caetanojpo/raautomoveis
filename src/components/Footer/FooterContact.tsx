"use client";
import { customGradient } from "@/app/theme";
import { Flex, Box, Input } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/footerLogo.png";
import CustomButton from "../buttons/CustomButton";

export default function FooterContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (formData.name !== "" && formData.email !== "") {
      setIsNotValid(false);
    } else {
      setIsNotValid(true);
    }

    setWhatsMessage(
      `Olá, como vai? Me chamo ${formData.name}, com o e-mail: ${formData.email}. Gostaria de saber mais sobre os seus serviços!`
    );
  }, [formData]);

  const handleClick: any = () => {
    if (isNotValid) return;
    const url = `https://api.whatsapp.com/send?phone=5511974326999&text=${encodeURIComponent(
      whatsMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Flex
      style={{ background: customGradient }}
      h={{ base: "50dvh", md: "35dvh", xl: "12dvh" }}
      w={"100dvw"}
      position={"relative"}
      flexDir={{ base: "column", xl: "row" }}
    >
      <Flex
        position={"relative"}
        w={{ base: "80%", lg: "50%", "2xl": "20%" }}
        h={{ base: "30%", xl: "94%" }}
        zIndex={20}
      >
        {" "}
        <Image
          alt="RA Automoveis logo"
          src={logo}
          fill
          objectFit={"contain"}
          objectPosition={"left"}
          style={{ position: "absolute" }}
        />
      </Flex>
      <Flex
        zIndex={20}
        align={"center"}
        justify={"center"}
        w={{ base: "100%", xl: "80%" }}
        h={"100%"}
        gap={{ base: "20px", xl: "10px" }}
        flexDir={{ base: "column", xl: "row" }}
      >
        <Input
          name="name"
          value={formData.name}
          w={{ base: "90%", xl: "30%" }}
          placeholder="Digite seu nome"
          bg={"light"}
          borderRadius={"20px"}
          borderColor={"primary"}
          borderWidth={"2px"}
          onChange={(event: any) => handleTextareaChange(event)}
        />
        <Input
          name="email"
          value={formData.email}
          w={{ base: "90%", xl: "30%" }}
          placeholder="Seu e-mail"
          bg={"light"}
          borderRadius={"20px"}
          borderColor={"primary"}
          borderWidth={"2px"}
          onChange={(event: any) => handleTextareaChange(event)}
        />

        <CustomButton
          wBase={"90%"}
          title="ENTRAR EM CONTATO"
          isNotValid={isNotValid}
          handleClick={handleClick}
        />
      </Flex>
      <Box
        position={"absolute"}
        w={"100%"}
        h={"10%"}
        bottom={0}
        bg={"primary"}
        zIndex={10}
      />
    </Flex>
  );
}
