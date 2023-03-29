import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Skills(props: any) {
  const [selectedProject, setSelectedProject] = useState("Entertaiment app");
  return (
    <Flex
      flexDir={"column"}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      mb={"7em"}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        mt={{ sm: "60px", md: "80px", xl: "100px" }}
        w={"100%"}
      >
        <Box zIndex="99" flexDir="column" display={{ sm: "flex", md: "none" }}>
          <Flex w="100%" justifyContent="center">
            <Menu>
              <MenuButton<any> w="300px" bg="brand.300" as={Button}>
                Main Projects
              </MenuButton>
              <MenuList>
                {props.data.projects.map((e: any, index: any) => (
                  <>
                    {e.best && (
                      <div
                        onClick={() => {
                          setSelectedProject(e.name);
                        }}
                      >
                        <MenuItem<any> color="brand.100">{e.name}</MenuItem>
                      </div>
                    )}
                  </>
                ))}
              </MenuList>
            </Menu>
          </Flex>
          <Flex zIndex="0" mt="60px">
            {props.data.projects.map((e: any, index: any) => (
              <>
                {e.name === selectedProject && (
                  <Flex
                    justifyContent="Center"
                    alignItems="center"
                    flexDir="column"
                    position="relative"
                  >
                    <Box w={"330px"}>
                      <Image
                        zIndex={"10"}
                        position="absolute"
                        src="../../public/assets/monitor.png"
                        w={"330px"}
                      />
                      <Image
                        zIndex={"0"}
                        position={"absolute"}
                        src={e.image}
                        w={"247px"}
                        mt="15px"
                        h="160px"
                        ml="40px"
                        objectFit={"cover"}
                      />
                    </Box>
                    <Flex
                      alignItems="center"
                      flexDir="column"
                      w="100%"
                      h="400px"
                      mt="210px"
                    >
                      <Text fontSize="30px" fontWeight="900" color="black">
                        {e.name}
                      </Text>
                      <Flex alignItems="center" gap="15px">
                        <Text fontSize="34px" color="brand.300">
                          {e.date}
                        </Text>
                        <Flex gap={"8px"}>
                          {e.tools.map((es: any) => {
                            return (
                              <Box display={"flex"} w={"30px"} h={"30px"}>
                                <Image src={es} />
                              </Box>
                            );
                          })}
                        </Flex>
                      </Flex>

                      <Text
                        maxW="75%"
                        textAlign="center"
                        color="brand.100"
                        fontSize="14px"
                        fontWeight="400"
                      >
                        {e.about}
                      </Text>
                      <Box
                        w={"80%"}
                        mt="30px"
                        display={"flex"}
                        gap={"20px"}
                        justifyContent={"space-between"}
                      >
                        <Box
                          backgroundColor={"brand.300"}
                          color={"brand.100"}
                          borderRadius={"3px"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          w={"100%"}
                          h={"30px"}
                        >
                          <a href={e.github}>GITHUB</a>
                        </Box>
                        <Box
                          backgroundColor={"brand.100"}
                          color={"brand.200"}
                          borderRadius={"3px"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          w={"100%"}
                          h={"30px"}
                        >
                          <a href={e.live}>LIVE</a>
                        </Box>
                      </Box>
                    </Flex>
                  </Flex>
                )}
              </>
            ))}
          </Flex>
        </Box>
        <Tabs
          display={{ sm: "none", md: "block" }}
          position="relative"
          variant="unstyled"
        >
          <TabList
            w={{ sm: "90vw", md: "100%" }}
            gap={{ sm: "20px", md: "10px", xl: "50px" }}
            color={"black"}
          >
            {props.data.projects.map((e: any, index: any) => (
              <>
                {e.best && (
                  <>
                    <Tab>
                      <Text
                        fontSize={{ md: "10px", xl: "19px" }}
                        fontWeight={"700"}
                      >
                        {e.name}
                      </Text>
                    </Tab>
                  </>
                )}
              </>
            ))}
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="3px"
            bg="brand.300"
            borderRadius="2px"
          />
          <TabPanels mt={"6em"}>
            {props.data.projects.map((e: any) => (
              <>
                {e.best && (
                  <TabPanel>
                    <Box
                      color={"black"}
                      w={"100%"}
                      h={"100%"}
                      ml={{ sm: "0", md: "-30px", xl: "0px" }}
                      mt={{ sm: "0px", md: "-65px", xl: "0px" }}
                      alignItems={{ md: "center", xl: "normal" }}
                      display={"flex"}
                      flexDir={{ sm: "row", md: "column", xl: "row" }}
                      justifyContent={"space-between"}
                      gap={{ md: "0px", xl: "250px" }}
                    >
                      <Box
                        w={{ md: "450px", xl: "579px" }}
                        h={{ md: "430px", xl: "550px" }}
                      >
                        <Image
                          zIndex={"10"}
                          src="../../public/assets/monitor.png"
                          position={"absolute"}
                          w={{ md: "500px", xl: "780px" }}
                        />
                        <Image
                          zIndex={"0"}
                          position={"absolute"}
                          src={e.image}
                          w={{ md: "380px", xl: "580px" }}
                          marginLeft={{ md: "60px", xl: "95px" }}
                          marginTop={{ md: "20px", xl: "40px" }}
                          objectFit={"cover"}
                          h={{ md: "245px", xl: "328px" }}
                        />
                      </Box>

                      <Box
                        h={{ sm: "0px", md: "380px", xl: "400" }}
                        mt={{ sm: "0px", md: "-110px", xl: "0px" }}
                        justifyContent={"space-between"}
                        alignItems={{
                          sm: "normal",
                          md: "center",
                          xl: "normal",
                        }}
                        textAlign={{ sm: "start", md: "center", xl: "start" }}
                        w={"600px"}
                        ml={{ sm: "0", md: "50px", xl: "0px" }}
                        display={"flex"}
                        marginTop={"30px"}
                        flexDirection={"column"}
                      >
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          gap={"10px"}
                        >
                          <Text
                            fontSize={"50px"}
                            textTransform={"uppercase"}
                            fontWeight={"900"}
                            color={"brand.100"}
                          >
                            {e.name}
                          </Text>
                          <Text
                            fontSize={"35px"}
                            mt={"-25px"}
                            letterSpacing={"2px"}
                            color={"brand.300"}
                            fontWeight={"700"}
                            textTransform={"uppercase"}
                          >
                            {e.date}
                          </Text>
                          <Flex
                            alignSelf={{
                              sm: "normal",
                              md: "center",
                              xl: "normal",
                            }}
                            justifySelf={{
                              sm: "normal",
                              md: "center",
                              xl: "normal",
                            }}
                            alignItems={"center"}
                            gap={"10px"}
                          >
                            {e.tools.map((es: any) => {
                              return (
                                <Box
                                  display={"flex"}
                                  alignItems={"center"}
                                  w={{ sm: "30px", md: "40px", xl: "30px" }}
                                  h={{ sm: "30px", md: "40px", xl: "30px" }}
                                >
                                  <Image src={es} />
                                </Box>
                              );
                            })}
                          </Flex>
                          <Text
                            mt={"12px"}
                            fontWeight={"300"}
                            fontSize={"19px"}
                            letterSpacing={"1px"}
                            maxWidth={"500px"}
                          >
                            {e.about}
                          </Text>
                        </Box>
                        <Box
                          w={"100%"}
                          display={"flex"}
                          gap={"50px"}
                          justifyContent={"space-between"}
                        >
                          <Box
                            backgroundColor={"brand.300"}
                            color={"brand.100"}
                            borderRadius={"7px"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            w={"100%"}
                            h={"50px"}
                          >
                            <a href={e.github}>GITHUB</a>
                          </Box>
                          <Box
                            backgroundColor={"brand.100"}
                            color={"brand.200"}
                            borderRadius={"7px"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            w={"100%"}
                            h={"50px"}
                          >
                            <a href={e.live}>LIVE</a>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </TabPanel>
                )}
              </>
            ))}
          </TabPanels>
        </Tabs>
      </Flex>
      <Box mt={{ sm: "-115px", md: "44px", xl: "0px" }}>
        <Link to="projects">
          <Button
            colorScheme="none"
            w={"240px"}
            h={"50px"}
            variant="solid"
            borderRadius={"6px"}
            boxShadow="md"
            backgroundColor={"transparent"}
            color={"brand.100"}
            fontSize={"19px"}
            alignItems={"center"}
          >
            <Text fontWeight={"900"} mt={"5px"}>
              SEE MORE
            </Text>
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}
