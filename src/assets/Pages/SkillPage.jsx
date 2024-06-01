import React from "react";
import { Flex, Heading , Box, List , ListIcon , useColorModeValue, Text, ListItem, Divider } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function SkillPage (){
    return (
        <Flex justifyContent={"center"} px={4} mt={3} flexDirection={"column"}bg={useColorModeValue('gray.100', 'gray.900')} borderRadius={"15px"} h={{base:"1020px",md:"500px"}} m={"20px"} alignItems={"flex-start"} >
          <Heading ml={"40%"} fontFamily={"aerial"} >Skills</Heading>
         
            <Flex ml={{base:"70px",md:"170px"}} flexDirection={{base:"column",md:"row"}} alignItems={"flex-start"} mt={10} gap={"150px"}>
                <Box  h={"310px"} w={"250px"} bg={useColorModeValue('gray.100', 'gray.900')}>
                    <Heading  fontFamily={"aerial"} ml={{base:"5%", md:"20%"}} mt={5}>Frontend</Heading>
                    <Flex  gap={24} mt={9} ml={10} >
            <List spacing={4}>
              <ListItem>  <CheckCircleIcon/>  HTML</ListItem>
              <ListItem>  <CheckCircleIcon />  CSS</ListItem>
              <ListItem>  <CheckCircleIcon />  Tailwind Css</ListItem>
              <ListItem>  <CheckCircleIcon />  React</ListItem>
              <ListItem>  <CheckCircleIcon />  Chakra Ui</ListItem>
             
         </List></Flex>
                </Box>
                <Divider orientation="vertical" bg={useColorModeValue('gray.100', 'gray.900')}/>
               
          <Flex>
          
          <Box   h={"310px"} w={"250px"} bg={useColorModeValue('gray.100', 'gray.900')}>
                    <Heading fontFamily={"aerial"}  ml={{base:"5%", md:"20%"}} mt={5}>Backend</Heading>
             <Flex  gap={24} mt={9} ml={10} >
            <List spacing={4}>
              <ListItem>  <CheckCircleIcon/>  Node js </ListItem>
              <ListItem>  <CheckCircleIcon />  Express</ListItem>
              <ListItem>  <CheckCircleIcon />  MongoDb</ListItem>
              <ListItem>  <CheckCircleIcon />  Firebase</ListItem>
              <ListItem>  <CheckCircleIcon />  FireStore</ListItem>
              </List></Flex>
                </Box>
                
          </Flex>
          </Flex>
        </Flex>
    )
}