import React from "react";
import { delay, motion } from "framer-motion"
import { Flex , Box , Image, Heading , useColorModeValue , Text, Divider } from "@chakra-ui/react";

export default function AboutPage () {
    return (
      <Flex bg={useColorModeValue('gray.100', 'gray.900')} flexDirection={"column"} px={4} mt={{base:1 , md: 3}} borderRadius={"15px"} m={"20px"}  h={{base:"3500px" , md : "1700px"}}>
         
       <Box mt={{base: 2 , md:4}}> <Heading  ml={{base:"19%", md:"45%"}}  mt={{base:3 ,md:2}} fontFamily={"poppins"}>About Me</Heading></Box>

    
      <Flex display={"flex"} justifyContent={"space-evenly"} flexDirection={{base:"column" , md:"row"}}  >
      <motion.div
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{ duration: "1" , delay: "0.5" }}
    >
        <Box boxSize={{base:'430px', md:'300px'}} >
        
          <Image mt={{base:"20" , md:24}} w={"auto"} h={"250px"} ml={{base:"8%" , md:0}} borderRadius={"10px"} src="/dress-img.png" alt ="neha-img" />

        </Box>
        </motion.div>
        <motion.div
      initial={{ x: 800 }}
      animate={{ x: 0 }}
      transition={{ duration: "1" , delay: "0.5" }}
    >
        <Box>
       
          <Text mt={{base:2 ,  md:24}} fontFamily={"poppins"}ml={{base:"10%" , md:0}} fontSize={"large"} >
Hi there 👋 I'm Neha, and I'm a prefinal year student  <br/>studying Computer Science and Engineering. <br/>
 I have a keen interest in full-stack development and <br/>
 strive for excellence in every project I undertake. <br/>
 Although I'm currently a student, my goal is to showcase<br/> my skills in the professional world.
  I find great joy in<br/> transforming ideas into innovative solutions.</Text>
  
        </Box>
        </motion.div>
      </Flex>
      <Divider mt={"20"} w={"100%"} mr={"70px"}/>
      
      
      <Flex display={"flex"} justifyContent={"space-evenly"} flexDirection={{base:"column" , md:"row"}}  >
      <motion.div
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{ duration: "1" , delay: "0.5" }}
    >
      <Box boxSize={{base:'430px', md:'300px'}} >
          <Image mt={{base:"20" , md:36}} w={"auto"} h={"250px"}   ml={{base:"12%" , md:5}} borderRadius={"10px"} src="/nhlap.jpg" alt ="neha-img" />

        </Box>
        </motion.div>
        <motion.div
      initial={{ x: 900 }}
      animate={{ x: 0 }}
      transition={{ duration: "1" , delay: "0.5" }}
    >
        <Box>
          <Heading  mt={{base:3 , md:24}} ml={{base:"10%" , md:0}}  fontFamily={"poppins"}>BFCET HACK 1.0</Heading>
          <Text  mt={{base:2 ,  md:10}} fontFamily={"poppins"} fontSize={"large"} ml={{base:"10%" , md:0}} >

          Embark on my journey! BFCET Hack 1.0 was my  <br/>inaugural hackathon
           experience with team HackHer.<br/> Over 36 intense hours, we delved into innovation,<br/> 
           coding,  and collaboration. Learning from peers and <br/> judges, we honed our skills 
            and gained valuable <br/> insights. Beyond coding, it was about teamwork,<br/> problem-solving, and growth. </Text>
  
        </Box>
        </motion.div>
      </Flex>

      <Divider mt={"20"} w={"100%"} mr={"70px"}/>
     


      <Flex display={"flex"} justifyContent={"space-evenly"}   flexDirection={{base:"column" , md:"row"}}  >
      <motion.div
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{ duration: "1" , delay: "0.5" }}
    >
      <Box boxSize={{base:'430px', md:'350px'}} >
          <Image  w={"auto"} h={"250px"}  mt={{base:"20" , md:36}} ml={{base:"1%" , md:0}}  borderRadius={"10px"} src="/codevistaimg.jfif" alt ="neha-img" />

        </Box>
        </motion.div>
        <motion.div
      initial={{ x: 900 }}
      animate={{ x: 0 }}
      transition={{ duration: "1" , delay: "0.5" }}
    >
        <Box>
          <Heading  mt={{base:3 , md:24}} ml={{base:"10%" , md:0}}  fontFamily={"poppins"}>CODEVISTA 3.0</Heading>
          <Text mt={{base:2 ,  md:10}} fontFamily={"poppins"} fontSize={"large"} ml={{base:"10%" , md:0}}>

          On 21st March 2024,  participated in the college <br/> event CodeVista 3.0,
         themed "Programmer to Startup."  <br/>It was an exceptional platform where programmers  <br/> 
          showcased their skills and ideas. I'm thrilled to   <br/> share that our  team secured the first position, <br/> 
           earning a cash prize. This experience ignited my  <br/>passion for entrepreneurship and innovation.. </Text>
  
        </Box>
        </motion.div>
      </Flex>
      <Divider mt={7}/>
        </Flex>

    )

}