import { Box } from "@chakra-ui/react";
import AllSkills from "../components/AllSkills";
import data from "../../data.json";
export default function Skill() {
  return (
    <Box w="100%" minH="500px">
      <AllSkills data={data} />
    </Box>
  );
}
