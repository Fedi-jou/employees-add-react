import React from "react";
import { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import { OneRow } from "../onerow/OneRow";

const getDatafromLS = () => {
  const data = localStorage.getItem("employees");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function EmpList() {
  const [employees, setEmployees] = useState(getDatafromLS());

  // delete employee
  const deleteEmployee = (id) => {
    const filteredEmployees = employees.filter((element, index) => {
      return element.id !== id;
    });
    setEmployees(filteredEmployees);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <div>
      <div className="view-container">
        {employees.length > 0 && (
          <>
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <TableCaption> List Of Employeees </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Nom</Th>
                    <Th>Prenom</Th>
                    <Th>E-mail</Th>
                    <Th>fonction</Th>
                    <Th>qualification</Th>
                    <Th>niveau linguistique</Th>
                    <Th>validité licence</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <OneRow
                    employees={employees}
                    deleteEmployee={deleteEmployee}
                  />
                </Tbody>
              </Table>
            </TableContainer>
            <div className="text-center">
              <button
                className="btn btn-danger btn-md"
                onClick={() => setEmployees([])}
              >
                Remove All
              </button>
            </div>
          </>
        )}
        {employees.length < 1 && <div>No epmloyees are added yet</div>}
      </div>
    </div>
  );
}

export default EmpList;
