import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import MainLogo from "./MainLogo";
import { init } from "ityped";

export default function Header(props: any) {
  const firstRender = useRef(true);
  const textRef: any = useRef();

  useEffect(() => {
    if (firstRender.current) {
      init(textRef.current, {
        showCursor: false,
        loop: true,
        typeSpeed: 70,
        backSpeed: 70,
        strings: [
          "React",
          "Typescript",
          "Javascript",
          "NodeJS",
          "NextJS",
          "SQL",
          "Chakra UI",
          "Tailwind",
        ],
      });
    }
    firstRender.current = false;
  }, []);

  return (
    <Flex
      boxShadow="base"
      alignItems={"center"}
      h={{ sm: "500px", md: "450px", lg: "680px", xl: "720px" }}
      bg="brand.300"
      justifyContent={"center"}
    >
      <Flex
        w={{ sm: "100%", md: "84%", xl: "1100px" }}
        ml={{ sm: "0px", md: "-80px", xl: "0px" }}
        justifyContent={{ sm: "", lg: "space-between", xl: "" }}
        mt={{ sm: "0px", md: "-100px", xl: "0px" }}
        alignItems={"center"}
        flexDir={{ sm: "column", md: "row" }}
        gap={{ sm: "50px", md: "70px", lg: "180px", xl: "240px" }}
        h={"600px"}
      >
        <Flex
          mt={{ sm: "-130px", md: "0" }}
          order={{ sm: "2", md: "1" }}
          w={{ sm: "100%" }}
          ml={{ sm: "40px" }}
        >
          <Box
            ml={{ sm: "0px", md: "0px", xl: "-60px" }}
            mt={{ sm: "74px", md: "", xl: "0px" }}
            w={{ sm: "90%", md: "400px", lg: "500px", xl: "500px" }}
            justifyContent={"center"}
            boxSizing={"border-box"}
          >
            <Box>
              <Text
                fontWeight={"900"}
                fontSize={{ sm: "64px", md: "84px", lg: "122px", xl: "124px" }}
              >
                I'm Beka
              </Text>
            </Box>

            <Box>
              <Text
                w={{ sm: "100%", md: "900px", xl: "1000px" }}
                minWidth={{ sm: "100%", md: "900px", xl: "1000px" }}
                color={"transparent"}
                mt={{ sm: "-17px", md: "-20px", lg: "-35px", xl: "-40px" }}
                sx={{
                  WebkitTextStroke: "2.5px white",
                  textStroke: "2.5px white",
                }}
                fontWeight={"900"}
                letterSpacing={"2px"}
                fontSize={{ sm: "24px", md: "30px", lg: "45px", xl: "48px" }}
              >
                FULL STACK DEVELOPER
              </Text>
            </Box>
            <Flex
              alignSelf={{ sm: "center" }}
              justifySelf={{ sm: "center" }}
              mt={{ sm: "22px", md: "0px" }}
              alignItems={{ sm: "center", md: "" }}
              gap={{ sm: "0px", md: "30px" }}
            >
              <Text
                fontWeight={"900"}
                mt={{ sm: "-32px", md: "0" }}
                fontSize={{ sm: "55px", md: "50px", lg: "65px", xl: "74" }}
              >
                I LOVE
              </Text>
              <Box
                color={"brand.100"}
                position={"absolute"}
                mt={{ sm: "80px", md: "0px" }}
                ml={{ sm: "0px", md: "185px", lg: "240px", xl: "280px" }}
                fontWeight={"900"}
                fontSize={{ sm: "60px", md: "58px", lg: "70px", xl: "74px" }}
                ref={textRef}
              ></Box>
            </Flex>

            <Flex
              minWidth={{ sm: "90%", md: "500px", xl: "600px" }}
              w={{ sm: "100%", md: "84vw", lg: "85vw", xl: "100%" }}
              mt={{ sm: "65px", md: "55px", lg: "100px", xl: "20px" }}
              gap={{ sm: "32px", md: "48px", xl: "64px" }}
            >
              <Button
                colorScheme="none"
                variant="solid"
                w={"100%"}
                h={{ sm: "50px", md: "55px", lg: "70px", xl: "50px" }}
                border={"4px"}
                borderRadius={{ sm: "6px", md: "10px", xl: "16px" }}
                fontSize={{ sm: "12px", md: "16px", lg: "24px", xl: "19px" }}
                bg="brand.300"
              >
                <Text fontWeight={"900"} mt={"5px"}>
                  DOWNLOAD CV
                </Text>
              </Button>
              <Box w={"100%"}>
                <Link to="about">
                  <Button
                    colorScheme="none"
                    w={"100%"}
                    h={{ sm: "50px", md: "55px", lg: "70px", xl: "50px" }}
                    variant="solid"
                    backgroundColor={"brand.100"}
                    color={"brand.300"}
                    borderRadius={{ sm: "6px", md: "10px", xl: "16px" }}
                    fontSize={{
                      sm: "12px",
                      md: "16px",
                      lg: "24px",
                      xl: "19px",
                    }}
                    alignItems={"center"}
                  >
                    <Text fontWeight={"900"} mt={"5px"}>
                      ABOUT ME
                    </Text>
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Box
          order={{ sm: "1", md: "2" }}
          mr={{ sm: "0px", lg: "50px", xl: "0px" }}
          width={{ sm: "130px", lg: "350px", xl: "1000px" }}
          mt={{ sm: "30px", md: "0" }}
          ml={{ sm: "0px", md: "10px" }}
          height={{ sm: "200px", md: "500px", lg: "550px", xl: "1000px" }}
        >
          <MainLogo />
        </Box>
      </Flex>
    </Flex>
  );
}
