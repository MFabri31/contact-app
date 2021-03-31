import React from "react";
import TableRow from "../TableRow/TableRow";
import "./Table.css";

const Table = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="Table-info">
      <h3 className="Table-title">Contactos</h3>
      <table className="Table">
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Teléfono</td>
            <td>Opciones</td>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <td colSpan="3">Sin contactos</td>
          ) : (
            data.map((elem) => (
              <TableRow
                key={elem.id}
                elem={elem}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
