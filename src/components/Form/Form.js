import React, { useState, useEffect } from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const initialForm = {
  id: null,
  name: "",
  phone: "",
};

const Form = ({ createData, updateData, dataToEdit, setDataToEdit, data }) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(false);

  const { id, name, phone } = form;

  useEffect(() => {
    if (dataToEdit) setForm(dataToEdit);
    else setForm(initialForm);
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      setError(true);
      return;
    }

    setError(false);

    if (id === null) createData(form);
    else updateData(form);

    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3 className="Form-title">
        {id === null ? "Agregar Contacto" : "Editar Contacto"}
      </h3>
      <form onSubmit={handleSubmit} className="Form">
        <div className="Form-fields">
          <FontAwesomeIcon icon={faUser} color="grey" />
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Nombre"
            onChange={handleChange}
          />
        </div>
        <div className="Form-fields">
          <FontAwesomeIcon icon={faPhoneAlt} color="grey" />
          <input
            type="text"
            name="phone"
            value={phone}
            placeholder="Teléfono"
            onChange={handleChange}
          />
        </div>

        {data.length < 10 ? (
          <input className="Btn-add" type="submit" value="Añadir" />
        ) : (
          <input
            className="Btn Btn-add "
            type="submit"
            value="Agregar"
            disabled
          />
        )}
        <input
          className="Btn-reset"
          type="reset"
          value="Limpiar"
          onClick={handleReset}
        />

        {error ? (
          <div className="Form-message">
            Todos los campos deben estar completos.
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Form;
