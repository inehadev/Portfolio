import React from "react";
import { Flex , Box , Image, Heading , useColorModeValue , Text, Divider } from "@chakra-ui/react";

export default function AboutPage () {
    return (
      <Flex bg={useColorModeValue('gray.100', 'gray.900')} flexDirection={"column"} px={4} mt={{base:1 , md: 3}} borderRadius={"15px"} m={"20px"}  h={{base:"2710px" , md : "1300px"}}>
       <Box mt={{base: 2 , md:4}}> <Heading  ml={{base:"15%", md:"45%"}}  mt={{base:2 ,md:2}} fontFamily={"aerial"}>About Me</Heading></Box>
      <Flex display={"flex"} justifyContent={"space-evenly"} flexDirection={{base:"column" , md:"row"}}  >
      
        <Box boxSize={{base:'430px', md:'300px'}} >
        
          <Image mt={"20"} w={"auto"} h={"250px"} ml={{base:"8%" , md:0}} borderRadius={"10px"} src="/dress-img.png" alt ="neha-img" />

        </Box>
        <Box>
          {/* <Heading  mt={"24"}  fontFamily={"aerial"}>About Me</Heading> */}
          <Text mt={{base:2 ,  md:24}} fontFamily={"aerial"} ml={{base:"10%" , md:0}} fontSize={"large"} >
Hi there 👋 I'm Neha, and I'm a prefinal year student  <br/>studying Computer Science and Engineering. <br/>
 I have a keen interest in full-stack development and <br/>
 strive for excellence in every project I undertake. <br/>
 Although I'm currently a student, my goal is to showcase my skills<br/> in the professional world.
  I find great joy in transforming ideas into innovative solutions.</Text>
  
        </Box>
      </Flex>
      <Divider mt={"20"} w={"100%"} mr={"70px"}/>
      
      <Flex display={"flex"} justifyContent={"space-evenly"} flexDirection={{base:"column" , md:"row"}}  >
      <Box boxSize={{base:'430px', md:'300px'}} >
          <Image mt={"20"} w={"auto"} h={"250px"}  ml={{base:"10%" , md:0}} borderRadius={"10px"} src="/nhlap.jpg" alt ="neha-img" />

        </Box>
        <Box>
          <Heading  mt={{base:3 , md:24}} ml={{base:"10%" , md:0}}  fontFamily={"aerial"}>BFCET HACK 1.0</Heading>
          <Text  mt={{base:2 ,  md:10}} fontFamily={"aerial"} fontSize={"large"} ml={{base:"10%" , md:0}} >

          Embark on my journey! BFCET Hack 1.0 was my inaugural hackathon <br/>
           experience with team HackHer. Over 36 intense hours, we delved into innovation, <br/>
           coding, and collaboration. Learning from peers and judges, we honed our skills <br/>
            and gained valuable insights. Beyond coding, it was about teamwork, problem-solving, and growth. </Text>
  
        </Box>
      </Flex>

      <Divider mt={"20"} w={"100%"} mr={"70px"}/>
      <Flex display={"flex"} justifyContent={"space-evenly"}   flexDirection={{base:"column" , md:"row"}}  >
      <Box boxSize={{base:'430px', md:'350px'}} >
          <Image mt={"20"} w={"auto"} h={"250px"}  ml={{base:"2%" , md:0}}  borderRadius={"10px"} src="/codevistaimg.jfif" alt ="neha-img" />

        </Box>
        <Box>
          <Heading  mt={{base:3 , md:24}} ml={{base:"10%" , md:0}}  fontFamily={"aerial"}>CODEVISTA 3.0</Heading>
          <Text mt={{base:2 ,  md:10}} fontFamily={"aerial"} fontSize={"large"} ml={{base:"10%" , md:0}}>

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