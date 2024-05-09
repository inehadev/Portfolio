import React from "react";
import {Divider, Link,  useColorModeValue, Button,Icon, Text,Box, Avatar, Flex, Heading} from "@chakra-ui/react"
import { EmailIcon } from '@chakra-ui/icons';
 export default function Footer (){
    return(
        <>
        
        <Box  m={"20px"} h={"250px"} px={4} bg={useColorModeValue('gray.100', 'gray.900')} borderRadius={"15px"}>
        <Flex  bg={useColorModeValue('gray.100', 'gray.900')}  justifyContent={"center"} px={4} h={"70px"}  m={"20px"}   borderRadius={"15px"}  >
          
            <Divider width="60%" mt={14}/>
            <Avatar mt={7} name='Ryan Florence' src='/image.jpeg'><Divider/></Avatar>
            <Divider width="60%" mt={14}/>
           
            </Flex>
            
          <Heading ml={"48%"} fontFamily={"aerial"} size={"large"}>NEHA</Heading>
          <Text fontSize={"large"} ml={"42%"} mt={2} fontFamily={"aerial"} >🔹"Keep calm and code on."🔹</Text>

            
   <Button mt={3} borderRadius={"24"} bg={useColorModeValue('gray.100', 'gray.900')} ml={"45%"} leftIcon={<EmailIcon />}  variant='solid'><a href="mailto: 7087330257n@gmail.com">Get in touch</a></Button>
   </Box>
   
            </>
    )
 }