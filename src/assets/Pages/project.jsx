import React from "react";
import { Box, Flex  , useColorModeValue , Image , Text, Heading , Divider} from "@chakra-ui/react";
import {  FaReact , FaDatabase , FaNodeJs, FaHtml5 } from 'react-icons/fa';
import { SiFirebase , SiCss3 ,SiChakraui ,SiMongodb } from 'react-icons/si';

export default function Project (){
    return (
        <Flex bg={useColorModeValue('gray.100', 'gray.900')} flexDirection={"column"} px={4} mt={3} borderRadius={"15px"} m={"20px"} h={"1250px"} >
              <Box mt={6} > <Heading ml={"50%"}  fontFamily={"aerial"}  >Project</Heading></Box>
              {/* --------Thread------------*/}
             
           <Flex flexDirection={"row"} justifyContent={"space-around"} >
            
                <Box >
                <Image borderRadius={"20px"} size={"80px"} ml={20} mt={20} src="/threadd.png"></Image>
                
                </Box>
                <Box mt={24} mr={24}>
                    <Heading fontFamily={"aerial"}>Thread</Heading>
                    <Text mt={5} fontFamily={"aerial"}> 
                      In my third year project, I developed a thread social media  platform  <br/>
                       featuring robust user authentication (register, login, logout), post management (create, delete),<br/>
                         like/unlike functionality, user follow/unfollow, and profile updates. <br/>
                          Utilizing Tailwind CSS, React, Chakra UI, Node.js, Express.js, and MongoDB, the project <br/>
                          showcased seamless integration of frontend and backend technologies. It demonstrated my proficiency in <br/>
                            building dynamic web applications with modern tech stacks and comprehensive user interaction capabilities.</Text>
                     <Flex mt={5} gap={3}>
                       <Text fontFamily={"aerial"} fontSize={"large"} > Tech Stak  | </Text> 
                          <FaReact size={32} />
                          <FaNodeJs size={32}/>
                          <SiMongodb size={32}/>
                          <SiChakraui size={32}/>
                        
                     </Flex>

                </Box>
            </Flex>
           <Divider mt={10}/>
      

 
    {/* --------AMACON CLONE------------*/}
            <Flex flexDirection={"row"} justifyContent={"space-around"} >
                <Box >
                <Image borderRadius={"20px"}  mt={20} src="/amazon-.png"></Image>
                
                </Box>
                <Box mt={24} mr={24}>
                    <Heading fontFamily={"aerial"}>Amazon Clone</Heading>
                    <Text mt={5} fontFamily={"aerial"}> I created an Amazon clone in my second year.<br/> 
                    It features user authentication (login, register, logout), <br/> cart functionality (add, remove items), and a smooth checkout process.<br/>
                     Built with React.js and Firebase, it demonstrates my skills in frontend development <br/>
                     and backend integration. This project showcases my ability to create user-friendly <br/>
                     web applications with modern technologies.</Text>
                     <Flex mt={5} gap={3}>
                       <Text fontFamily={"aerial"} fontSize={"large"} > Tech Stak  | </Text> 
                          <FaReact size={32} />
                          <SiFirebase size={32} />
                          <FaDatabase size={32} /> 
                          
                     </Flex>

                </Box>
            </Flex>
           <Divider mt={10}/>


                {/* --------Vercel------------*/}

        
        <Flex flexDirection={"row"} justifyContent={"space-around"} >
                <Box >
                <Image  borderRadius={"20px"} mt={20} src="/vercel.png"></Image>
                
                </Box>
                <Box mt={24} mr={24}>
                    <Heading ml={24} fontFamily={"aerial"}>Vercel</Heading>
                    <Text mt={5} fontFamily={"aerial"}> 

                    In my second year, I created my first frontend project, <br/> a website Vercel. It utilized HTML and CSS, showcasing foundational web development <br/> skills..</Text>
                     <Flex mt={5} gap={3}>
                       <Text fontFamily={"aerial"} fontSize={"large"} > Tech Stak  | </Text> 
                          <FaHtml5 size={32}/>
                          <SiCss3 size={32} /> 
                        
                     </Flex>

                </Box>
            </Flex>
           <Divider mt={10}/>


            </Flex>
    )
}