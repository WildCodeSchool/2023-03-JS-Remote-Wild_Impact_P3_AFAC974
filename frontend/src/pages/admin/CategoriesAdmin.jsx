import React, { useState } from "react";

function CategoriesAdmin() {
  const [category, setCategory] = useState({
    name: "",
  });

  const handleCategory = (name, value) => {
    setCategory({ ...category, [name]: value });
  };

  const postCategory = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`, {
      method: "POST",
      body: JSON.stringify(category),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => console.info(json))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={(event) => postCategory(event)}>
        <label htmlFor="">
          Nom de la catégorie
          <input
            type="text"
            minLength={4}
            name="name"
            onChange={(event) =>
              handleCategory(event.target.name, event.target.value)
            }
            value={category.name}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default CategoriesAdmin;
