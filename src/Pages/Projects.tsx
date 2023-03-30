import { Box } from "@chakra-ui/react";
import React from "react";
import data from "../../data.json";
import AllProjects from "../components/AllProjects";
export default function Projects(props: any) {
  return (
    <Box w="100%">
      <AllProjects data={data} />
    </Box>
  );
}
