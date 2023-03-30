import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
export default function AllSkills(props: any) {
  return (
    <Flex
      bg="brand.600"
      flexDir="column"
      minH="70vh"
      w="100%"
      alignItems="Center"
      gap="20px"
    >
      <Text
        mt={{ sm: "30px", md: "50px", lg: "80px", xl: "120px" }}
        fontSize={{ sm: "30px", md: "46px", lg: "60px", xl: "80px" }}
        color="black"
      >
        Skills
      </Text>
      <Text
        mt="-20px"
        fontSize={{ sm: "9px", md: "15px", lg: "20px", xl: "24px" }}
        opacity="70%"
        fontWeight="400"
        color="black"
      >
        Check all my skills and tools which i used for my projects
      </Text>
      <Flex
        w={{ sm: "85%", md: "75%", lg: "70%", xl: "66%" }}
        justifyContent="Center"
        gap={{ sm: "15px", md: "20px", lg: "24px", xl: "30px" }}
        mt={{ sm: "20px", md: "30px", lg: "45px", xl: "60px" }}
        flexDir="row"
        flexWrap="wrap"
        mb="90px"
      >
        {props.data.skills.map((skill: any) => {
          return (
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Flex
                _hover={{
                  mt: "-8px",
                  transition: "0.2s",
                  boxShadow: "md",
                }}
                borderRadius="7px"
                boxShadow="sm"
                flexDir="column"
                color="brand.100"
                w={{ sm: "147px", md: "235px", lg: "300px", xl: "350px" }}
                h={{ sm: "110px", md: "175px", lg: "210px", xl: "270px" }}
              >
                <Flex
                  justifyContent="center"
                  alignItems="Center"
                  w="100%"
                  h={{ sm: "70px", md: "125px", lg: "145px", xl: "200px" }}
                  bg="brand.500"
                >
                  <Flex justifyContent="center" alignItems="center" gap="15px">
                    <Image
                      borderTopRadius="7px"
                      maxH={{ sm: "20px", md: "30px", lg: "24px", xl: "40px" }}
                      maxW={{ sm: "30px", md: "40px", lg: "50px", xl: "60px" }}
                      src={skill.icon}
                    />
                    <Text
                      fontWeight="700"
                      fontSize={{ sm: " 12px", md: "20px", xl: "24px" }}
                    >
                      {skill.name}
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  mt={{ sm: "12px", md: "15px", lg: "17px", xl: "23px" }}
                  fontWeight="500"
                  justifySelf="center"
                  gap="6px"
                  color="black"
                  alignSelf="center"
                >
                  <Text fontSize={{ sm: "10px", md: "12px", lg: "16px" }}>
                    Projects Number :
                  </Text>
                  <Text
                    fontSize={{ sm: "10px", md: "12px", lg: "16px" }}
                    fontWeight="700"
                  >
                    {" "}
                    {skill.projectsnumber}
                  </Text>
                </Flex>
              </Flex>
            </motion.div>
          );
        })}
      </Flex>
    </Flex>
  );
}
