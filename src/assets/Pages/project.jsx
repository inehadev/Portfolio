import React from "react";
import { Box, Flex  , useColorModeValue , Image , Text, Heading , Divider, Link} from "@chakra-ui/react";
import {  FaReact , FaDatabase , FaNodeJs, FaHtml5 } from 'react-icons/fa';
import { SiFirebase , SiCss3 ,SiChakraui ,SiMongodb } from 'react-icons/si';

export default function Project (){
    return (
        <Flex bg={useColorModeValue('gray.100', 'gray.900')} flexDirection={"column"} px={4} mt={3} borderRadius={"15px"} m={"20px"}  h={{base:"3010px" , md : "1370px"}} >
              <Box  mt={{base: 2 , md:4}} justifyContent={"center"} > <Heading  ml={{base:"33%" , md:"42%"}} fontFamily={"aerial"}   mt={{base:3 ,md:2}} >Project</Heading></Box>
              {/* --------Thread------------*/}
             
           <Flex flexDirection={{base:"column" , md:"row"}}  justifyContent={"space-evenly"}  >
            <Link href="https://github.com/inehadev/Thread-client">
           <Box boxSize={{base:'300px', md:'300px'}} >
                <Image borderRadius={"20px"}  ml={{base:"19%" , md:20}} size={"80px"} mt={32} src="/threadd.png"></Image>
                
                </Box></Link>
                <Link href="https://github.com/inehadev/Thread-Backend">
                <Box mt={20} mr={24}>
                    <Heading fontFamily={"poppins"}  >Thread</Heading>
                    <Text mt={5} fontFamily={"poppins"} ml={{base:"22%" , md:0}}> 
                      In my third year project, I developed a thread  <br/>social media  platform 
                       featuring robust user authentication<br/>  (register, login, logout), post management (create, delete),
                       <br/> like/unlike functionality, user   follow/unfollow, and profile updates. 
                       <br/> Utilizing Tailwind CSS, React, Chakra UI, Node.js, Express.js, and <br/> MongoDB, the project 
                          showcased seamless integration <br/>of frontend and backend technologies.  It demonstrated my proficiency <br/> in 
                            building dynamic web applications with modern tech<br/> stacks and comprehensive user interaction capabilities.</Text>
                     <Flex mt={5} gap={3}>
                       <Text fontFamily={"poppins"} fontSize={"large"} ml={{base:"22%" , md:0}}> Tech Stak  | </Text> 
                          <FaReact size={32} />
                          <FaNodeJs size={32}/>
                          <SiMongodb size={32}/>
                          <SiChakraui size={32}/>
                        
                     </Flex>

                </Box></Link>
            </Flex>
           <Divider mt={10}/>
      

 
    {/* --------AMACON CLONE------------*/}
    <Link href="https://github.com/inehadev/amazon-clone">
            <Flex flexDirection={{base:"column" , md:"row"}}  justifyContent={"space-evenly"} >
                <Box >
                <Image borderRadius={"20px"} ml={{base:"19%" , md:20}}  mt={32} src="/amazon-.png"></Image>
                
                </Box>
                <Box mt={24} mr={24}>
                    <Heading fontFamily={"poppins"}  >Amazon Clone</Heading>
                    <Text mt={5} fontFamily={"poppins"} ml={{base:"22%" , md:0}}> I created an Amazon clone in my second  year.
                    It  <br/>  features user authentication   (login, register, logout), <br/>  cart functionality (add,  remove items), and a smooth <br/>  checkout process.
                     Built with React.js and Firebase, it <br/>  demonstrates my skills in frontend development <br/>
                     and backend integration. This project showcases <br/>  my ability to create user-friendly 
                     web   <br/> applications with modern technologies.</Text>
                     <Flex mt={5} gap={3}>
                       <Text fontFamily={"poppins"} fontSize={"large"} ml={{base:"22%" , md:0}} > Tech Stak  | </Text> 
                          <FaReact size={32} />
                          <SiFirebase size={32} />
                          <FaDatabase size={32} /> 
                          
                     </Flex>

                </Box>
            </Flex></Link>
           <Divider mt={10}/>


                {/* --------Vercel------------*/}

        
        <Flex flexDirection={{base:"column" , md:"row"}}  justifyContent={"space-evenly"} >
                <Box >
                <Image  borderRadius={"20px"} ml={{base:"19%" , md:20}} mt={24} src="/vercel.png"></Image>
                
                </Box>
                <Box mt={24} mr={24}>
                    <Heading  fontFamily={"poppins"} >Vercel</Heading>
                    <Text mt={5} fontFamily={"poppins"} ml={{base:"22%" , md:0}}> 

                    In my second year, I created my first <br/> frontend project,  a website Vercel. It <br/> utilized HTML and CSS, showcasing <br/> foundational web  development skills..</Text>
                     <Flex mt={5} gap={3}>
                       <Text fontFamily={"poppins"} fontSize={"large"} ml={{base:"22%" , md:0}} > Tech Stak  | </Text> 
                          <FaHtml5 size={32}/>
                          <SiCss3 size={32} /> 
                        
                     </Flex>

                </Box>
            </Flex>
           <Divider mt={10}/>


            </Flex>
    )
}