import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import finance from "@/assets/finance.png"
import FinanceForms from '@/components/forms/FinanceForms'

export default function page() {
  return (
    <Flex
    h={`100%`}
    minH={"100dvh"}
    w={"100dvw"}
    flexDirection={"column"}
    bg={`dark`}
    gap={"40px"}
    
 
  >
        <Flex >
      <FinanceForms/>
    </Flex>
    <Flex position={"relative"} h={{base:"18dvh", xl:"83dvh"}} w={"100%"} zIndex={30} marginBottom={{base:'50px', xl:'100px'}} >
      <Image
        alt=""
        src={finance}
        fill
        style={{ position: "absolute", objectFit:'cover', objectPosition:'center' }}
      />
    </Flex>

  </Flex>
  )
}
