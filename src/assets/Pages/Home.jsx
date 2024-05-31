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
          <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} mt={3} borderRadius={"15px"} m={"20px"} h={{base:"800px" , md : "500px"}}>
      <Flex justifyContent={"space-evenly"} gap={{base:2, md:10}} flexDirection={{base:"column" , md:"row"}}>
        <Flex alignContent={'center'} justifyContent={'flex-start'} ml={{base: 3 , md:40}}  mt={{ base: 6, md: 100 }}>
        <WrapItem>
        <Box boxSize={{base:'340' , md:'270'}} justifyContent={"center"} alignItems={"center"} >
      
          <Image mt={10} ml={{base : "22%" , md : 0}} justifyContent={"center"} height={{base:'200px' , md:'250px'}} width={{base:'auto', md:'auto'}} src='/profilepic.jpg' alt='neha-img'   borderRadius='full' />
            </Box>
        </WrapItem>
        </Flex>
        <Flex alignContent={'center'} flexDirection={"column"}  justifyContent={'flex-end'} ml={{base:5 , md:0}} mr={{base:0 , md: 40}} mb={{base:120 , md:0}} mt={{base:0 , md:120}}>
        <Heading size={"3xl"} fontFamily={"aerial"}> Hii 👋 Am Neha </Heading>
        <Heading mt={5} size={"xl"} ml={{base:1, md:2}} fontFamily={"aerial"}>  aspiring Full Stack web development</Heading>
        <Heading mt={5} size={"sm"} ml={{base:10 , md:20}}  fontFamily={"aerial"}> "Your story, beautifully coded."</Heading>
        <Divider mt={10}/>
        <Flex gap={6} mt={50} ml={{base:10, md:20}}>
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