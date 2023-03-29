import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import Skills from "../components/Skills";
import BallCanvas from "../components/Cube";
import Languages from "../components/Languages";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import data from "../../data.json";
export default function Main(props: any) {
  return (
    <Box overflow={"hidden"}>
      <Header data={data} />
      <Skills data={data} />
      <Languages data={data} />
      <Contact />
    </Box>
  );
}
