import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

/**
 * NavLink component for navigation links.
 * @param {object} props - The props for the NavLink component.
 * @param {React.ReactNode} props.children - The child elements of the NavLink.
 * @returns {JSX.Element} The rendered NavLink component.
 */
const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  );
};

/**
 * Nav component for the navigation bar.
 * @returns {JSX.Element} The rendered Nav component.
 */
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} mt={3} borderRadius={"15px"} m={"20px"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Flex>
                <h6 font ={'bold'} fontFamily={"aerial"}>NEHA</h6>
            </Flex>
            <Flex alignItems={'center'} justifyContent={'space-between'} gap={7}>
                <Box fontFamily={"aerial"}>Home</Box>
                <Box fontFamily={"aerial"}>About</Box>
                <Box fontFamily={"aerial"}>Projects</Box>
                <Box fontFamily={"aerial"}>Connect</Box>
            </Flex>
          <Box></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={"/profilepic.jpg"}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'/profilepic.jpg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p> fontFamily={"aerial"}Neha</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem fontFamily={"aerial"}>Connect</MenuItem>
                  <MenuItem fontFamily={"aerial"}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
