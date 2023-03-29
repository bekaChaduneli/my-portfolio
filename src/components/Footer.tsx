import { Flex, Image, Text } from "@chakra-ui/react";
import github from "../../public/assets/github.png";
import linkedin from "../../public/assets/linkedin.png";
import instagram from "../../public/assets/instagram.png";
import facebook from "../../public/assets/facebook.png";
import gmail from "../../public/assets/gmail.png";

export default function Footer() {
  return (
    <Flex
      boxShadow={"md"}
      justifyContent={"space-between"}
      paddingLeft={{ sm: "20px", md: "40px", lg: "200px" }}
      paddingRight={{ sm: "20px", md: "40px", lg: "200px" }}
      alignItems={"center"}
      gap={{ sm: "50px", md: "80px", lg: "130px" }}
      w={"100%"}
      h={"100px"}
      bg={"brand.200"}
    >
      <Text
        fontSize={{ sm: "12px", md: "16px" }}
        textAlign={{ sm: "center", lg: "start" }}
        color={"brand.100"}
        fontWeight={"900"}
      >
        Created By Beka Chaduneli
      </Text>
      <Flex gap={{ sm: "10px", md: "20px", lg: "30px" }}>
        <a href="https://github.com/bekaChaduneli">
          <Image
            w={{ sm: "18px", md: "24px", lg: "30px" }}
            minW={{ sm: "18px", md: "24px", lg: "30px" }}
            src={github}
          />
        </a>
        <a href="https://www.linkedin.com/in/beka-chaduneli-28203422b/">
          <Image
            w={{ sm: "18px", md: "24px", lg: "30px" }}
            minW={{ sm: "18px", md: "24px", lg: "30px" }}
            src={linkedin}
          />
        </a>
        <a href="https://www.instagram.com/bekachaduneli/">
          <Image
            w={{ sm: "18px", md: "24px", lg: "30px" }}
            minW={{ sm: "18px", md: "24px", lg: "30px" }}
            src={instagram}
          />
        </a>
        <a href="https://www.facebook.com/chadunelibb/">
          <Image
            w={{ sm: "18px", md: "24px", lg: "30px" }}
            minW={{ sm: "18px", md: "24px", lg: "30px" }}
            src={facebook}
          />
        </a>
        <Image
          w={{ sm: "18px", md: "24px", lg: "30px" }}
          minW={{ sm: "18px", md: "24px", lg: "30px" }}
          src={gmail}
        />
      </Flex>
    </Flex>
  );
}
