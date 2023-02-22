import React, { useState } from "react";
import { useFormik } from "formik";

function Home() {
  const [people, setPeople] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      profession: "",
    },
    onSubmit: (values, actions) => {
      // const newPerson = { name: values.name, profession: values.profession };
      setPeople([...people, formik.values]);
      actions.resetForm();
    },
  });

  const handleRemovePerson = (index) => {
    debugger;
    setPeople(people.filter((_, i) => i !== index));
  };

  console.log(formik.values);
  return (
    <div>
      <h1>Adicionar Pessoa</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="profession">Profissão:</label>
        <input
          id="profession"
          name="profession"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.profession}
        />

        <button type="submit">Adicionar</button>
      </form>

      <h2>Pessoas Adicionadas:</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} - {person.profession}
            <button onClick={() => handleRemovePerson(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
