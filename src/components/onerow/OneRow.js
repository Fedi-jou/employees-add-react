import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

export const OneRow = ({ employees, deleteEmployee }) => {
  return employees.map((employee) => (
    <Tr key={employee.name}>
      <Td>{employee.name}</Td>
      <Td>{employee.surname}</Td>
      <Td>{employee.email}</Td>
      <Td>{employee.fonction}</Td>
      <Td>{employee.qualif}</Td>
      <Td>{employee.niveau}</Td>
      <Td>{employee.valid}</Td>
      <Td className="delete-btn" onClick={() => deleteEmployee(employee.id)}>
        <Icon icon={trash} />
      </Td>
    </Tr>
  ));
};
