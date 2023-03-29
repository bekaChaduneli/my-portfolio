import BallCanvas from "../components/Cube";
import React from "react";
import { Box, Button, Flex, Tag, Text, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Languages(props: any) {
  return (
    <Flex
      boxShadow={"md"}
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      bg={"brand.300"}
      mb={{ sm: "20px", md: "30px", xl: "40px" }}
      flexDirection={"column"}
    >
      <Text
        color={"transparent"}
        sx={{
          WebkitTextStroke: "4px white",
          textStroke: "4px white",
        }}
        mt={{ sm: "16px", md: "26px", lg: "38", xl: "56px" }}
        letterSpacing={{ sm: "3px", md: "6px", lg: "9px", xl: "12px" }}
        fontWeight={"900"}
        fontSize={{ sm: "34px", md: "48px", lg: "78px", xl: "108px" }}
      >
        MAIN SKILLS
      </Text>
      <Flex
        mt={"14px"}
        mb={{ sm: "20px", md: "30px", xl: "46px" }}
        columnGap={{ sm: "22px", md: "35px", lg: "48px", xl: "100px" }}
        rowGap={"0px"}
        flexDirection={"row"}
        w={{ sm: "90%", md: "85%", xl: "1200px" }}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {props.data.skills.map((technology: any) => {
          const CustomCard = React.forwardRef(
            ({ children, ...rest }: any, ref) => (
              <Box p="1">
                <Tag ref={ref} {...rest}>
                  {children}
                </Tag>
              </Box>
            )
          );

          return (
            <>
              {technology.main && (
                <Box>
                  <Tooltip placement="top" label={technology.name}>
                    <CustomCard>
                      <Box
                        w={{
                          sm: "70px",
                          md: "110px",
                          lg: "150px",
                          xl: "200px",
                        }}
                        h={{
                          sm: "70px",
                          md: "110px",
                          lg: "150px",
                          xl: "200px",
                        }}
                        key={technology.name}
                      >
                        <BallCanvas icon={technology.icon} />
                      </Box>
                    </CustomCard>
                  </Tooltip>
                </Box>
              )}
            </>
          );
        })}
      </Flex>
      <Link to="skill">
        <Button
          colorScheme="none"
          w={"240px"}
          h={"50px"}
          mt={"0px"}
          variant="solid"
          borderRadius={"6px"}
          boxShadow="md"
          mb="30px"
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
    </Flex>
  );
}
