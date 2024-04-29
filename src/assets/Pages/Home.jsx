import React from "react";
import Header from "../Components/Header";
import { WrapItem , Avatar, Flex , Box , Heading } from '@chakra-ui/react'
export default function Home (){

    return (
        <>
      <Flex justifyContent={"space-evenly"} gap={10}>
        <Flex alignContent={'center'} justifyContent={'flex-start'} ml={40} mt={130}>
        <WrapItem>
        <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
        </WrapItem>
        </Flex>
        <Flex alignContent={'center'} flexDirection={"column"}  justifyContent={'flex-end'} mr={40} mt={95}>
        <Heading size={"3xl"}> Hii 👋 Am Neha ,</Heading>
        <Heading mt={5} size={"xl"}>      aspiring Full Stack web development</Heading>
          
        </Flex>
        </Flex>
       
        </>

    )
}