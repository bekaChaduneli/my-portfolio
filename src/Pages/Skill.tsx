import { Box, Flex, Text } from "@chakra-ui/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function Skill() {
  return (
    <Flex
      boxShadow={"md"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      h={"100%"}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        h={"81vh"}
        boxShadow={"md"}
      >
        {/* <Text color={"brand.100"} fontSize={"128px"} fontWeight={"900"}>
          <Box ref={(el) => (line1 = el)}>Will Be Soon</Box>
        </Text> */}
        <h1>
          <Box overflow={"hidden"} height={"156px"}>
            <Text color={"brand.100"} fontSize={"52px"} fontWeight={"900"}>
              Will Be Soon
            </Text>
          </Box>
        </h1>
      </Flex>
    </Flex>
  );
}
