import { Text } from "@chakra-ui/react";
import React, { useState } from "react";
import data from "../../data.json";
export default function Filter(props: any) {
  return (
    <>
      {data.projects.map((project: any) => {
        {
          project.react && <Text color="black">{project.name}</Text>;
        }
      })}
    </>
  );
}
