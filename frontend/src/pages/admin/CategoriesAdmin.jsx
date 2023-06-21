import React, { useState } from "react";

function CategoriesAdmin() {
  const [category, setCategory] = useState({
    id: null,
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
      .then((json) => setCategory(json))
      .catch((err) => console.error(err));
  };

  const deleteCategory = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories/${category.id}`, {
      method: "DELETE",
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
        {!category.id && <button type="submit">Ajouter</button>}
      </form>
      {category.id && (
        <button type="button" onClick={(e) => deleteCategory(e)}>
          Supprimer
        </button>
      )}
    </div>
  );
}

export default CategoriesAdmin;
