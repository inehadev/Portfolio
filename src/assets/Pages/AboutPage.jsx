import React from "react";
import { Flex , Box , Image, Heading , useColorModeValue , Text, Divider } from "@chakra-ui/react";

export default function AboutPage () {
    return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} mt={3} borderRadius={"15px"} m={"20px"} h={"700px"}>
      <Flex display={"flex"} justifyContent={"space-evenly"} >
      
        <Box  >
          <Image mt={"20"} w={"auto"} h={"250px"} borderRadius={"10px"} src="/nhlap.jpg" alt ="neha-img" />

        </Box>
        <Box>
          <Heading  mt={"24"}  fontFamily={"aerial"}>About Me</Heading>
          <Text mt={"6"} fontFamily={"aerial"}>
Hi there 👋 I'm Neha, and I'm a prefinal year student  <br/>studying Computer Science and Engineering. <br/>
 I have a keen interest in full-stack development and <br/>
 strive for excellence in every project I undertake. <br/>
 Although I'm currently a student, my goal is to showcase my skills in the professional world.<br/>
  I find great joy in transforming ideas into innovative solutions.</Text>
  
        </Box>
      </Flex>
      <Divider mt={"20"} w={"100%"} mr={"70px"}/>
        </Box>
    )

}