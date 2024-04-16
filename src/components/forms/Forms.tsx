"use client";
import { Flex, Heading, Text, Textarea, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomButton from './../buttons/CustomButton';
import lines from "@/assets/contactLines.png";
import Image from "next/image";

export default function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
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
    if (formData.name !== "" && formData.email !== "" && formData.tel !== "") {
      setIsNotValid(false);
    } else {
      setIsNotValid(true);
    }

    setWhatsMessage(
      `Nome: ${formData.name}
E-Mail: ${formData.email}
Telefone: ${formData.tel}
\n 
Mensagem:${formData.message === "" ? "Preciso de ajuda, você poderia me atender?" : formData.message}
`
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
    w={'100%'}
    h={'100%'}
      flexDirection={"column"}
      color={"light"}
      fontStyle={"italic"}
      paddingX={{ base: "50px", xl: "100px" }}
      paddingBottom={{ base: "20px", xl: "20px" }}
      textTransform={"uppercase"}
      fontSize={"0.8rem"}
      position={'relative'}
    >
      <Flex position={'absolute'} h={{base:'100%', xl:'90%'}} w={'100%'} zIndex={10} align={'flex-end'}>
        <Flex display={{base:'none', xl:'flex'}} position='relative'  h={{base:'20%', xl:'30%'}} w={'100%'} align={'flex-end'}>
          <Image
                  alt=""
                  src={lines}
                  fill
                  style={{ position: "absolute", objectFit:'cover', objectPosition:'bottom right' }}
          />
        </Flex>
      </Flex>
      <Heading color={"primary"} marginBottom={'20px'}>CONTATO</Heading>
      <Text marginBottom={'10px'}>Algum dos nossos veículos te interessou? </Text>
      <Text  marginBottom={'20px'}>
        Entre em contato para saber mais detalhes. Teremos o maior prazer em lhe
        atender e tirar todas as suas dúvidas.
      </Text>
      <Flex gap={'40px'} marginBottom={{base:'20px', xl:'100px'}} zIndex={20} flexDirection={{base:'column', xl:"row"}}>
        <Flex flexDirection={"column"} w={{base:"100%", xl:"60%"}} gap={"15px"}>
          <Heading fontSize={"1.4rem"}>FALE CONOSCO</Heading>
          <Flex gap={"10px"} flexDirection={{base:'column', xl:"row"}}>
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
          <Textarea
            color={"dark"}
            name="message"
            border={"2px solid"}
            minHeight={'200px'}
            borderColor={"primary"}
            bg={"light"}
            placeholder={"MENSAGEM"}
            value={formData.message}
            onChange={(event: any) => handleTextareaChange(event)}
          />
          <Flex>
       <CustomButton isNotValid={isNotValid} handleClick={handleClick} title={"ENVIAR"}/>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} w={{base:'100%', xl:"40%"}} mt={{base:'0rem', xl:"2.5rem"}} gap={'20px'}>
          <Text>
            Deixe aqui seu contato e sua mensagem. Retornaremos em breve para
            tirar todas as suas dúvidas ou marcar uma visita ou videochamada.
          </Text>
          <Text>
            Para nós é sempre um prazer fazer novas amizades e realizar sonhos!
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
