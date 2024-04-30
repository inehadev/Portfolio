import React from "react";
import Header from "../Components/Header";
import { WrapItem , Avatar, Flex , Box , Heading  , Link, Divider , Image} from '@chakra-ui/react'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
export default function Home (){

    return (
        <>
      <Flex justifyContent={"space-evenly"} gap={10}>
        <Flex alignContent={'center'} justifyContent={'flex-start'} ml={40} mt={150}>
        <WrapItem>
        <Box boxSize='270px' >
      
          <Image src='/profilepic.jpg' alt='neha-img'   borderRadius='full' />
            </Box>
        </WrapItem>
        </Flex>
        <Flex alignContent={'center'} flexDirection={"column"}  justifyContent={'flex-end'} mr={40} mt={170}>
        <Heading size={"3xl"}> Hii 👋 Am Neha ,</Heading>
        <Heading mt={5} size={"xl"} ml={2}>  aspiring Full Stack web development</Heading>
        <Heading mt={5} size={"sm"} ml={20} > "Your story, beautifully coded."</Heading>
        <Divider mt={10}/>
        <Flex gap={6} mt={50} ml={20}>
        <Link href="">< IoLogoInstagram size={"40"}/></Link>
        <Link href="https://github.com/inehadev/">< IoLogoGithub size={"40"}/></Link>
          <Link href="https://www.linkedin.com/in/neha5055/"><IoLogoLinkedin  size={"40"}/></Link>
         
        
        </Flex>
        </Flex>
        </Flex>
       
        </>

    )
}