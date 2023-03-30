import { Box, Flex, Image, Input, Text, Textarea } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import email from "../../public/assets/email.png";
import name from "../../public/assets/name.png";
import message from "../../public/assets/message.png";
import MailBoxLogo from "./MailBoxLogo";

export default function Contact() {
  const ref: any = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let count = 0;
  const [limit, setLimit] = useState<Boolean>(false);
  const [success, setSuccess] = useState<Boolean | null>(null);
  console.log(watch("example"));
  const onSubmit = (e: any) => {
    console.log(e);
    count++;
    {
      count == 1 && setLimit(true);
    }

    emailjs
      .sendForm(
        "service_8j0928k",
        "template_l4yi9mg",
        ref.current,
        "Mjk41bwr-b_4yGOY1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Flex
      w={"100%"}
      boxShadow={"md"}
      justifyContent={"center"}
      mt={{ sm: "40px", md: "50px", lg: "70px", xl: "100px" }}
      mb={"5px"}
      fontWeight={"300"}
      color={"brand.100"}
    >
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mb={"100px"}
        w={"100%"}
        gap={"16px"}
      >
        <Text
          fontWeight={"900"}
          fontSize={{ sm: "40px", md: "55px", lg: "76px", xl: "100px" }}
          color={"brand.100"}
        >
          Contact Me
        </Text>
        <Text
          alignSelf={"center"}
          textAlign={"center"}
          w={{ sm: "90%", md: "60%", lg: "620px" }}
          mt={{ sm: "-10px", md: "-20px", xl: "-30px" }}
          fontWeight={"300"}
          fontSize={{ sm: "17px", md: "19px", xl: "24px" }}
        >
          I am interested in starting a job as a Web developer. If you have any
          offers or just want to say hello, message me
        </Text>
        <Flex
          justifyContent={"center"}
          gap={{ sm: "5px", md: "30px", lg: "110px", xl: "200px" }}
          w={{ sm: "90%", md: "70%", lg: "80%" }}
          flexDir={{ sm: "column", lg: "row" }}
          alignItems={"center"}
        >
          <Box ml={{ sm: "0px", lg: "100px" }}>
            <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <Flex gap={"9px"} alignItems={"center"}>
                  <Image h={"23px"} src={name} /> <Text>Name</Text>
                </Flex>
                <Input
                  sx={{
                    border: "0.4px solid #c2c2c27d",

                    borderRadius: "md",
                    _focus: {
                      outline: "none",
                      boxShadow: "0 0 0 1px #ff8800",
                      borderColor: "brand.300",
                    },
                    _active: {
                      backgroundColor: "none",
                    },
                  }}
                  w={{ sm: "85vw", md: "60vw", lg: "450px" }}
                  h={"50px"}
                  placeholder="name"
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                ></Input>
                {errors.name?.type === "required" && (
                  <Text
                    fontSize={"16px"}
                    color={"red"}
                    fontWeight={"400"}
                    role="alert"
                    mt={"5px"}
                  >
                    Name is blank
                  </Text>
                )}
              </Box>

              <Box mt={"15px"}>
                <Flex gap={"9px"} alignItems={"center"}>
                  <Image h={"23px"} src={email} /> <Text>Email</Text>
                </Flex>
                <Input
                  sx={{
                    border: "0.4px solid #c2c2c27d",
                    borderRadius: "md",
                    _focus: {
                      outline: "none",
                      boxShadow: "0 0 0 1px #ff8800",
                      borderColor: "brand.300",
                    },
                    _active: {
                      backgroundColor: "none",
                    },
                  }}
                  h={"50px"}
                  placeholder="Mail"
                  {...register("email", {
                    required: "Filling is required!",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Mail is not valid!",
                    },
                  })}
                ></Input>

                {errors.email && (
                  <Text
                    mt={"5px"}
                    fontSize={"16px"}
                    color={"red"}
                    fontWeight={"400"}
                  >
                    The email is incorrect
                  </Text>
                )}
              </Box>
              <Box mt={"15px"}>
                <Flex gap={"9px"} alignItems={"center"}>
                  <Image h={"23px"} src={message} /> <Text>Message</Text>
                </Flex>
                <Textarea
                  sx={{
                    border: "0.4px solid #c2c2c27d",
                    borderRadius: "md",
                    _focus: {
                      outline: "none",
                      boxShadow: "0 0 0 1px #ff8800",
                      borderColor: "brand.300",
                    },
                    _active: {
                      backgroundColor: "none",
                    },
                  }}
                  h={"180px"}
                  placeholder="Message"
                  {...register("message", { required: true })}
                  aria-invalid={errors.message ? "true" : "false"}
                ></Textarea>
                {errors.message?.type === "required" && (
                  <Text
                    mt={"5px"}
                    fontSize={"16px"}
                    color={"red"}
                    fontWeight={"400"}
                    role="alert"
                  >
                    Message is blank
                  </Text>
                )}
              </Box>
              {!limit && (
                <button
                  style={{
                    width: "170px",
                    backgroundColor: "orange",
                    borderRadius: "10px",
                    height: "50px",
                    marginTop: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  type="submit"
                >
                  <Text
                    mt={"5px"}
                    fontWeight={"900"}
                    color={"brand.200"}
                    fontSize={"22px"}
                  >
                    SUBMIT
                  </Text>
                </button>
              )}
              {success && (
                <Text mt={"4px"} fontWeight={"900"} color={"brand.300"}>
                  "Your message has been sent."
                </Text>
              )}
            </form>
          </Box>
          <Flex
            mt={{ sm: "5px", md: "30px", lg: "0px" }}
            alignItems={"center"}
            h={{ sm: "200px", md: "230px", lg: "550px" }}
            maxWidth={"350px"}
            mb={{ sm: "-40px", md: "0px" }}
          >
            <MailBoxLogo />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
