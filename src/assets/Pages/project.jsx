import React from "react";
import { Box, Flex, useColorModeValue, Image, Text, Heading, Divider, Link } from "@chakra-ui/react";
import { FaReact, FaDatabase, FaNodeJs } from 'react-icons/fa';
import { SiFirebase, SiChakraui, SiMongodb, SiExpress, SiNextdotjs, SiTypescript } from 'react-icons/si';

export default function Project() {
  return (
    <Flex bg={useColorModeValue('gray.100', 'gray.900')} flexDirection={"column"} px={4} mt={3} borderRadius={"15px"} m={"20px"} h={{ base: "5500px", md: "2400px" }} >
      <Box mt={{ base: 2, md: 4 }} justifyContent={"center"} > <Heading ml={{base:"19%", md:"45%"}}  fontFamily={"aerial"} mt={{ base: 3, md: 2 }} >Project</Heading></Box>

      {/*-------------------------------------------------------Anonymous message----------------------------------------------------------*/}

      <Flex flexDirection={{ base: "column", md: "row" }} justifyContent={{ base: "justify-between", md: "space-evenly" }} gap={10}  >
        <Link href="https://anonymous-feedback-b48l.vercel.app/">
          <Box>
            <Image borderRadius={"20px"} h={200} w={320} justifyContent={{base:"center"}}  mt={32} src="/Section 1.png"></Image>
          </Box>
        </Link>
        <Box mt={24} >
          <Heading fontFamily={"poppins"}   >Anonymous Messgae</Heading>
          <Text mt={5} fontFamily={"poppins"} ml={{ base: "22%", md: 0 }}>



            I built an anonymous message project <br />  where users can send messages along with their <br /> profile links, which are then displayed on <br />
            the user's dashboard. The tech stack I<br /> used includes Next.js for the frontend, TypeScript  <br /> for type safety, Zod for schema validation, MongoDB for <br />
            database management, and Resend for email functionality.
          </Text>
          <Flex mt={5} gap={3}>
            <Text fontFamily={"poppins"} fontSize={"large"} ml={{ base: "22%", md: 0 }} > Tech Stak  | </Text>
            <SiNextdotjs size={32} />
            <SiTypescript size={32} />
            <SiMongodb size={32} />


          </Flex>

        </Box>
      </Flex>


      <Divider mt={10} />



      {/*-------------------------------------------------------PlacementEdge----------------------------------------------------------*/}
      <Flex flexDirection={{ base: "column", md: "row" }} justifyContent={{ base: "justify-between", md: "space-evenly" }} gap={10}  >
        <Link href="https://placement-edge.vercel.app/">
          <Box>
            <Image borderRadius={"20px"} h={200} w={320} mt={32} justifyContent={{base:"center"}}  src="/placementedge.png"></Image>
          </Box>
        </Link>
        <Box mt={24} >
          <Heading fontFamily={"poppins"}  >PlacementEdge</Heading>
          <Text mt={5} fontFamily={"poppins"} ml={{ base: "22%", md: 0 }}>




            Developed PlacementEdge, an AI-driven chatbot <br />   to assist students with placement queries. <br /> Integrated GeminiAI for smart query <br />
            responses, leveraging Next.js, TypeScript, and Shadcn for a<br /> smooth user interface. Utilized Zod for<br /> schema validation and NextAuth for secure authentication, <br />
            ensuring a robust and seamless user experience <br />with accurate placement guidance.
          </Text>
          <Flex mt={5} gap={3}>
            <Text fontFamily={"poppins"} fontSize={"large"} ml={{ base: "22%", md: 0 }} > Tech Stak  | </Text>
            <SiNextdotjs size={32} />
            <SiTypescript size={32} />
            <SiMongodb size={32} />


          </Flex>

        </Box>
      </Flex>


      <Divider mt={10} />







      {/* --------shebizzconnect------------*/}


      <Flex flexDirection={{ base: "column", md: "row" }} justifyContent={{ base: "justify-between", md: "space-evenly" }} gap={10}  >
        <Link href="https://shebizconnect.vercel.app/">
          <Box>
            <Image borderRadius={"20px"} h={200} w={320} mt={32} justifyContent={{base:"center"}}  src="/shebizconnect.png"></Image>
          </Box>
        </Link>
        <Box mt={24} >
          <Heading fontFamily={"poppins"}  >SheBizConnect</Heading>
          <Text mt={5} fontFamily={"poppins"} ml={{ base: "22%", md: 0 }}>

            I developed SheBizConnect, a platform empowering <br /> women to offer their  services. Key features include<br /> profile
            creation, updates, and item management<br /> categorized by service type.  Users can also add,<br /> update, search, and manage
            categories, with <br /> secure login, logout, and registration processes. <br /> The platform was built  using the MERN stack
            <br />  (MongoDB, Express, React, Node.js), ensuring a robust <br /> and scalable solution. This project  highlights my ability to  <br />create user-friendly,
            feature-rich applications from scratch.</Text>
          <Flex mt={5} gap={3}>
            <Text fontFamily={"poppins"} fontSize={"large"} ml={{ base: "22%", md: 0 }} > Tech Stak  | </Text>
            <FaReact size={32} />
            <FaNodeJs size={32} />
            <SiExpress size={32} />
            <SiMongodb size={32} />

          </Flex>

        </Box>
      </Flex>


      <Divider mt={10} />


      {/* ---------------Thread----------------*/}


      <Flex flexDirection={{ base: "column", md: "row" }} justifyContent={{ base: "justify-between", md: "space-evenly" }} gap={10}  >
        <Link className="decoration-0" href="https://github.com/inehadev/Thread-client">
          <Box boxSize={{ base: '300px', md: '300px' }} >
            <Image borderRadius={"20px"} h={220} w={250} size={"80px"}justifyContent={{base:"center"}}   mt={32} src="/threadd.png"></Image>

          </Box></Link>

        <Box mt={20} ml={4} >
          <Link className="decoration-0" href="https://github.com/inehadev/Thread-Backend">
            <Heading fontFamily={"poppins"}   >Thread</Heading></Link>
          <Text mt={5} fontFamily={"poppins"} ml={{ base: "22%", md: 0 }}>
            In my third year project, I developed a thread  <br />social media  platform
            featuring robust user authentication<br />  (register, login, logout), post management (create, delete),
            <br /> like/unlike functionality, user   follow/unfollow, and profile updates.
            <br /> Utilizing Tailwind CSS, React, Chakra UI, Node.js, Express.js, and <br /> MongoDB, the project
            showcased seamless integration <br />of frontend and backend technologies.  It demonstrated<br /> my proficiency  in
            building dynamic web application with<br /> modern tech stacks and comprehensive user interaction<br /> capabilities.</Text>
          <Flex mt={5} gap={3}>
            <Text fontFamily={"poppins"} fontSize={"large"} ml={{ base: "22%", md: 0 }}> Tech Stak  | </Text>
            <FaReact size={32} />
            <FaNodeJs size={32} />
            <SiMongodb size={32} />
            <SiChakraui size={32} />

          </Flex>

        </Box>
      </Flex>
      <Divider mt={10} />



      {/* --------AMACON CLONE------------*/}

      <Flex flexDirection={{ base: "column", md: "row" }} justify={{ base: "justify-between", md: "space-evenly" }} gap={10} >
        <Link href="https://github.com/inehadev/amazon-clone">
          <Box >
            <Image borderRadius={"20px"} h={200} w={300} justifyContent={{base:"center"}}  mt={32} src="/amazon-.png"></Image>

          </Box>
        </Link>
        <Box mt={24} >
          <Heading fontFamily={"poppins"}   >Amazon Clone</Heading>
          <Text mt={5} fontFamily={"poppins"} ml={{ base: "22%", md: 0 }}> I created an Amazon clone in my second  year.
            It  <br />  features user authentication   (login, register, logout), <br />  cart functionality (add,  remove items), and a smooth <br />  checkout process.
            Built with React.js and Firebase, it <br />  demonstrates my skills in frontend development <br />
            and backend integration. This project showcases <br />  my ability to create user-friendly
            web   <br /> applications with modern technologies.</Text>
          <Flex mt={5} gap={3}>
            <Text fontFamily={"poppins"} fontSize={"large"} ml={{ base: "22%", md: 0 }} > Tech Stack  | </Text>
            <FaReact size={32} />
            <SiFirebase size={32} />
            <FaDatabase size={32} />

          </Flex>

        </Box>
      </Flex>







      <Divider mt={10} />


    </Flex>
  )
}