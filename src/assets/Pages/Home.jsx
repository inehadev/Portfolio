import React from "react";
import Header from "../Components/Header";
import AboutPage from "./AboutPage"
import { WrapItem , Avatar, Flex , Box , Heading  ,Text, Link, Divider , Image , useColorModeValue}from '@chakra-ui/react'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import Project from "./project";
import SkillPage from "./SkillPage";
import Footer from "../Components/Footer";
export default function Home (){

    return (
        <>
          <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} mt={3} borderRadius={"15px"} m={"20px"} h={"500px"}>
      <Flex justifyContent={"space-evenly"} gap={10}>
        <Flex alignContent={'center'} justifyContent={'flex-start'} ml={40} mt={100}>
        <WrapItem>
        <Box boxSize='270px' >
      
          <Image src='/profilepic.jpg' alt='neha-img'   borderRadius='full' />
            </Box>
        </WrapItem>
        </Flex>
        <Flex alignContent={'center'} flexDirection={"column"}  justifyContent={'flex-end'} mr={40} mt={120}>
        <Heading size={"3xl"} fontFamily={"aerial"}> Hii 👋 Am Neha ,</Heading>
        <Heading mt={5} size={"xl"} ml={2} fontFamily={"aerial"}>  aspiring Full Stack web development</Heading>
        <Heading mt={5} size={"sm"} ml={20}  fontFamily={"aerial"}> "Your story, beautifully coded."</Heading>
        <Divider mt={10}/>
        <Flex gap={6} mt={50} ml={20}>
        <Link href="">< IoLogoInstagram size={"40"}/></Link>
        <Link href="https://github.com/inehadev/">< IoLogoGithub size={"40"}/></Link>
          <Link href="https://www.linkedin.com/in/neha5055/"><IoLogoLinkedin  size={"40"}/></Link>
         
        
        </Flex>
        </Flex>
        </Flex>
        </Box>
        <AboutPage/>
        <Project/>
        <SkillPage/>
        <Footer/>
       
        </>

    )
}