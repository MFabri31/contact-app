import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import Table from "../Table/Table";
import "./Crud.css";

const Crud = () => {
  let initialContact = JSON.parse(localStorage.getItem("contact"));

  if (!initialContact) {
    initialContact = [];
  }

  const [contact, setContact] = useState(initialContact);
  const [dataToEdit, setDataToEdit] = useState(null);

  useEffect(() => {
    let initialContact = JSON.parse(localStorage.getItem("contact"));

    if (initialContact) {
      localStorage.setItem("contact", JSON.stringify(contact));
    } else {
      localStorage.setItem("contact", JSON.stringify([]));
    }
  }, [contact, initialContact]);

  const createData = (data) => {
    data.id = Date.now();
    setContact([...contact, data]);
  };

  const updateData = (data) => {
    let newData = contact.map((elem) => (elem.id === data.id ? data : elem));
    setContact(newData);
  };

  const deleteData = (id, name) => {
    let isDelete = window.confirm(
      `¿Estás seguro que desea elminiar el contacto ${name}?`
    );

    if (isDelete) {
      const newData = contact.filter((elem) => elem.id !== id);
      setContact(newData);
    } else return;
  };

  return (
    <>
      <section className="grid-1-2 Crud">
        <Form
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          data={contact}
        />
        <Table
          data={contact}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </section>
    </>
  );
};

export default Crud;
