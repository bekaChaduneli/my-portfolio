import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Filter from "./Filter";
function AllProjects(props: any) {
  const [filteredItem, setFilteredItem] = useState("react");
  return (
    <Flex
      justifyContent="center"
      flexDir="column"
      flexWrap="wrap"
      alignItems="center"
      bg="brand.400"
      w="100%"
      h="100%"
    >
      <Text
        mt={{ sm: "30px", md: "50px", lg: "80px", xl: "120px" }}
        fontSize={{ sm: "30px", md: "46px", lg: "60px", xl: "80px" }}
        color="black"
      >
        My Projects
      </Text>
      <Text
        fontSize={{ sm: "9px", md: "15px", lg: "20px", xl: "24px" }}
        opacity="70%"
        fontWeight="400"
        color="black"
      >
        Here are all the projects that I have done since I started studying
      </Text>

      <Flex
        mb={{ sm: "130px", md: "50px", lg: "70px", xl: "120px" }}
        mt={{ sm: "25px", md: "35px", lg: "45px", xl: "60px" }}
        w={{ sm: "90%", md: "85%", xl: "75%" }}
        gap={{ sm: "20px", md: "30px", lg: "40px", xl: "50px" }}
        flexWrap="wrap"
      >
        {props.data.projects.map((project: any) => {
          const [isHovered, setIsHovered] = useState(false);

          const handleMouseEnter = () => {
            setIsHovered(true);
          };

          const handleMouseLeave = () => {
            setIsHovered(false);
          };
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
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: "spring", stiffness: 300, damping: 17 }}
              >
                <Box
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Flex
                    _hover={{
                      mt: "-8px",
                      transition: "0.2s",
                      boxShadow: "md",
                    }}
                    borderRadius={{
                      sm: "4px",
                      md: "10px",
                      lg: "12px",
                      xl: "15px",
                    }}
                    minW={{
                      sm: "100%",
                      md: "265px",
                      lg: "360px",
                      xl: "430px",
                    }}
                    minH={{
                      sm: "160px",
                      md: "170px",
                      lg: "210px",
                      xl: "260px",
                    }}
                    fontWeight="400"
                    boxShadow="sm"
                  >
                    <Text color="black"></Text>
                    <Image
                      objectFit={"cover"}
                      w={{ sm: "330px", md: "265px", lg: "360px", xl: "430px" }}
                      boxShadow="inner"
                      h={{ sm: "160px", md: "170px", lg: "210px", xl: "260px" }}
                      borderRadius={{
                        sm: "4px",
                        md: "10px",
                        lg: "12px",
                        xl: "15px",
                      }}
                      src={project.image}
                    />
                    {isHovered ? (
                      <>
                        <Box
                          w={{
                            sm: "330px",
                            md: "265px",
                            lg: "360px",
                            xl: "430px",
                          }}
                          h={{
                            sm: "160px",
                            md: "170px",
                            lg: "210px",
                            xl: "260px",
                          }}
                          position="absolute"
                          bg="brand.100"
                          borderRadius={{
                            sm: "4px",
                            md: "10px",
                            lg: "12px",
                            xl: "15px",
                          }}
                          opacity="70%"
                        />
                        <Flex
                          flexDir="column"
                          borderRadius={{
                            sm: "4px",
                            md: "10px",
                            lg: "12px",
                            xl: "15px",
                          }}
                          display="flex"
                          w={{
                            sm: "330px",
                            md: "265px",
                            lg: "360px",
                            xl: "430px",
                          }}
                          h={{
                            sm: "160px",
                            md: "170px",
                            lg: "210px",
                            xl: "260px",
                          }}
                          justifyContent="center"
                          alignItems="center"
                          gap={{ sm: "3px", md: "5px", lg: "7px", xl: "10px" }}
                          position="absolute"
                        >
                          <Text
                            mt="0px"
                            fontWeight="900"
                            fontSize={{
                              sm: "22px",
                              md: "16px",
                              lg: "19px",
                              xl: "23px",
                            }}
                          >
                            {project.name}
                          </Text>
                          <Text
                            display={{ sm: "none", md: "none", lg: "block" }}
                            fontSize={{
                              sm: "4px",
                              md: "6px",
                              lg: "9px",
                              xl: "12px",
                            }}
                            maxW="350px"
                            textAlign={{ lg: "center", xl: "left" }}
                          >
                            {project.about}
                          </Text>
                          <Flex
                            gap="14px"
                            justifyContent="center"
                            alignItems="center"
                          >
                            {project.tools.map((es: any) => {
                              return (
                                <Box
                                  display={"flex"}
                                  maxW={{
                                    sm: "25px",
                                    md: "28px",
                                    lg: "20px",
                                    xl: "30px",
                                  }}
                                >
                                  <Image src={es} />
                                </Box>
                              );
                            })}
                          </Flex>
                          <Box
                            w={"80%"}
                            mt={{
                              sm: "6px",
                              md: "12px",
                              lg: "20px",
                              xl: "30px",
                            }}
                            display={"flex"}
                            gap={{
                              sm: "5px",
                              md: "8px",
                              lg: "12px",
                              xl: "20px",
                            }}
                            justifyContent={"space-between"}
                          >
                            <Box
                              backgroundColor={"brand.300"}
                              color={"brand.100"}
                              borderRadius={"3px"}
                              display={"flex"}
                              fontSize={{
                                sm: "12px",
                                md: "8px",
                                lg: "10px",
                                xl: "12px",
                              }}
                              alignItems={"center"}
                              justifyContent={"center"}
                              w={"100%"}
                              h={{
                                sm: "25px",
                                md: "20px",
                                lg: "25px",
                                xl: "30px",
                              }}
                            >
                              <a href={project.github}>GITHUB</a>
                            </Box>
                            <Box
                              backgroundColor={"brand.300"}
                              color={"brand.100"}
                              borderRadius={"3px"}
                              display={"flex"}
                              w={"100%"}
                              alignItems={"center"}
                              justifyContent={"center"}
                              fontSize={{
                                sm: "12px",
                                md: "8px",
                                lg: "10px",
                                xl: "12px",
                              }}
                              h={{
                                sm: "25px",
                                md: "20px",
                                lg: "25px",
                                xl: "30px",
                              }}
                            >
                              <a href={project.live}>LIVE</a>
                            </Box>
                          </Box>
                        </Flex>
                      </>
                    ) : (
                      ""
                    )}
                  </Flex>
                </Box>
              </motion.div>
            </motion.div>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default AllProjects;
