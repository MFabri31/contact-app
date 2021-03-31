import React from "react";
import "./TableRow.css";

const TableRow = ({ elem, setDataToEdit, deleteData }) => {
  let { id, name, phone } = elem;

  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>
        <button className="Btn-edit" onClick={() => setDataToEdit(elem)}>
          Editar
        </button>
        <button className="Btn-remove" onClick={() => deleteData(id, name)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
