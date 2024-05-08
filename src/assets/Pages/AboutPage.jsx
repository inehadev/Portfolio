import React from "react";
import { Flex , Box , Image, Heading , useColorModeValue , Text, Divider } from "@chakra-ui/react";

export default function AboutPage () {
    return (
      <Flex bg={useColorModeValue('gray.100', 'gray.900')} flexDirection={"column"} px={4} mt={3} borderRadius={"15px"} m={"20px"} h={"1300px"}>
       <Box mt={5}> <Heading  ml={"40%"}  fontFamily={"aerial"}>About Me</Heading></Box>
      <Flex display={"flex"} justifyContent={"space-evenly"} >
      
        <Box  >
        
          <Image mt={"20"} w={"auto"} h={"250px"} borderRadius={"10px"} src="/dress-img.png" alt ="neha-img" />

        </Box>
        <Box>
          {/* <Heading  mt={"24"}  fontFamily={"aerial"}>About Me</Heading> */}
          <Text mt={"24"} fontFamily={"aerial"} fontSize={"large"}>
Hi there 👋 I'm Neha, and I'm a prefinal year student  <br/>studying Computer Science and Engineering. <br/>
 I have a keen interest in full-stack development and <br/>
 strive for excellence in every project I undertake. <br/>
 Although I'm currently a student, my goal is to showcase my skills<br/> in the professional world.
  I find great joy in transforming ideas into innovative solutions.</Text>
  
        </Box>
      </Flex>
      <Divider mt={"20"} w={"100%"} mr={"70px"}/>
      <Flex display={"flex"} justifyContent={"space-evenly"} >
      <Box  >
          <Image mt={"20"} w={"auto"} h={"250px"} borderRadius={"10px"} src="/nhlap.jpg" alt ="neha-img" />

        </Box>
        <Box>
          <Heading  mt={"24"}  fontFamily={"aerial"}>BFCET HACK 1.0</Heading>
          <Text mt={"6"} fontFamily={"aerial"} fontSize={"large"}>

          Embark on my journey! BFCET Hack 1.0 was my inaugural hackathon <br/>
           experience with team HackHer. Over 36 intense hours, we delved into innovation, <br/>
           coding, and collaboration. Learning from peers and judges, we honed our skills <br/>
            and gained valuable insights. Beyond coding, it was about teamwork, problem-solving, and growth. </Text>
  
        </Box>
      </Flex>

      <Divider mt={"20"} w={"100%"} mr={"70px"}/>
      <Flex display={"flex"} justifyContent={"space-evenly"} >
      <Box  >
          <Image mt={"20"} w={"auto"} h={"250px"} borderRadius={"10px"} src="/codevistaimg.jfif" alt ="neha-img" />

        </Box>
        <Box>
          <Heading  mt={"24"}  fontFamily={"aerial"}>CODEVISTA 3.0</Heading>
          <Text mt={"6"} fontFamily={"aerial"} fontSize={"large"}>

          On 21st March 2024,  participated in the college event CodeVista 3.0, <br/>
         themed "Programmer to Startup." It was an exceptional platform where programmers  <br/>
          showcased their skills and ideas. I'm thrilled to share that our team secured the first position,  <br/>
           earning a cash prize. This experience ignited my passion for entrepreneurship and innovation.. </Text>
  
        </Box>
      </Flex>
      <Divider mt={7}/>
        </Flex>

    )

}