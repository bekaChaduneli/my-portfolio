import {
  Box,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import avatarImage from "../../public/assets/mobileAvatar.png";
import Footer from "../components/Footer";
import MainLogo from "../components/MainLogo";

export default function Roots() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box fontWeight={"900"} color={"brand.200"}>
      <Flex
        zIndex={"2"}
        boxShadow="md"
        h={{ sm: "55px", md: "70px", xl: "80px" }}
        flexDir={"row"}
        paddingLeft={{ sm: "5%", md: "8%", xl: "12%" }}
        paddingRight={{ sm: "5%", md: "8%", xl: "12%" }}
        alignItems={"center"}
        w={"100%"}
        bg="brand.100"
        justifyContent={"space-between"}
      >
        <Flex
          alignItems={"center"}
          gap={{ sm: "16px", md: "24px", xl: "32px" }}
          h={"40px"}
          w="260px"
        >
          <Box
            display={{ sm: "none", md: "block" }}
            w={{ sm: "39px", md: "45px", xl: "50px" }}
          >
            <MainLogo />
          </Box>
          <Image
            w="30px"
            display={{ sm: "block", md: "none" }}
            src={avatarImage}
          />
          <Text
            fontSize={{ sm: "12px", md: "17px", xl: "24px" }}
            fontWeight={"900"}
            minWidth={{ sm: "200px", md: "1200px" }}
            mt={"2px"}
            w={{ sm: "200px", md: "1200px" }}
          >
            <Link to="/">BEKA CHADUNELI</Link>
          </Text>
        </Flex>
        <Flex
          fontSize={{ md: "14px", lg: "16px", xl: "18px" }}
          fontWeight={"700"}
          gap={{ sm: "12px", md: "25px", xl: "64px" }}
          alignItems={"center"}
          display={{ sm: "none", md: "flex" }}
        >
          <Link to="/">MAIN</Link>
          <Link to="about">ABOUT</Link>
          <Link to="projects">PROJECTS</Link>
          <Link to="skill">SKILLS</Link>
        </Flex>
        <Flex
          onClick={onOpen}
          display={{ sm: "flex", md: "none" }}
          w={"35px"}
          flexDir={"column"}
          gap={"7px"}
        >
          <Box w={"100%"} h={"3px"} borderRadius={"1px"} bg={"brand.200"} />
          <Box w={"100%"} h={"3px"} borderRadius={"1px"} bg={"brand.200"} />
          <Box w={"100%"} h={"3px"} borderRadius={"1px"} bg={"brand.200"} />
        </Flex>
      </Flex>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex justifyContent="space-between" w="100%" alignItems="center">
              <Text fontWeight={"900"} color={"brand.100"} fontSize={"38px"}>
                Menu
              </Text>
              <CloseButton w="50px" h="50px" onClick={onClose} />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex
              onClick={onClose}
              mt={"32px"}
              flexDir={"column"}
              fontSize={"22px"}
              color={"brand.100"}
              fontWeight={"700"}
              gap={"22px"}
            >
              <Link to="/">MAIN</Link>
              <Link to="about">ABOUT</Link>
              <Link to="projects">PROJECTS</Link>
              <Link to="skill">SKILLS</Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Outlet />
      <Footer />
    </Box>
  );
}
