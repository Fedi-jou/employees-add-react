import React, { useState, useEffect, useId } from "react";
import { v4 as uuid } from "uuid";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("employees");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const AddEmp = () => {
  // main array of objects state || employees state || employees array of objects
  const [employees, setEmployees] = useState(getDatafromLS());

  // input field states

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [fonction, setFonction] = useState("");
  const [qualif, setQualif] = useState("");
  const [niveau, setNiveau] = useState("");
  const [valid, setValid] = useState("");
  const [id, setId] = useState(null);
  // form submit event

  const HandleAddemployeeSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let employee = {
      id: uuid(),
      name,
      surname,
      email,
      fonction,
      qualif,
      niveau,
      valid,
    };
    setEmployees([...employees, employee]);
    setId(null);
    setName("");
    setSurname("");
    setEmail("");
    setFonction("");
    setQualif("");
    setNiveau("");
    setValid("");
  };

  // delete employee from LS
  // const deleteEmployee = (name) => {
  //   const filteredEmployees = employees.filter((element, index) => {
  //     return element.name !== name;
  //   });
  //   setEmployees(filteredEmployees);
  // };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <div className="wrapper">
      <div className="main">
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
              Ajouter un employ??
            </Heading>
            <form onSubmit={HandleAddemployeeSubmit}>
              <FormControl id="userName" isRequired>
                <FormLabel>Nom</FormLabel>
                <Input
                  placeholder="Nom"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </FormControl>
              <FormControl id="prenom" isRequired>
                <FormLabel>Prenom</FormLabel>
                <Input
                  placeholder="Prenom"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  onChange={(e) => setSurname(e.target.value)}
                  value={surname}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="your-email@example.com"
                  _placeholder={{ color: "gray.500" }}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </FormControl>

              <FormControl id="fonction" isRequired>
                <FormLabel>Fonction</FormLabel>
                <Input
                  placeholder="Fonction"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  onChange={(e) => setFonction(e.target.value)}
                  value={fonction}
                />
              </FormControl>
              <FormControl id="qualif" isRequired>
                <FormLabel>Qualification</FormLabel>
                <Input
                  placeholder="Qualification"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  onChange={(e) => setQualif(e.target.value)}
                  value={qualif}
                />
              </FormControl>
              <FormControl id="Niveau_ling" isRequired>
                <FormLabel>Niveau linguistique</FormLabel>
                <Input
                  placeholder="Niveau linguistique"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  onChange={(e) => setNiveau(e.target.value)}
                  value={niveau}
                />
              </FormControl>
              <FormControl id="Validit??" isRequired>
                <FormLabel>Validit?? licence</FormLabel>
                <Input
                  placeholder="Validit?? licence"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  onChange={(e) => setValid(e.target.value)}
                  value={valid}
                />
              </FormControl>
              <Stack spacing={6} direction={["column", "row"]}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  w="full"
                  _hover={{
                    bg: "blue.500",
                  }}
                  onSubmit={HandleAddemployeeSubmit}
                  type="submit"
                >
                  Ajouter
                </Button>
              </Stack>
            </form>
          </Stack>
        </Flex>
      </div>
    </div>
  );
};

export default AddEmp;
