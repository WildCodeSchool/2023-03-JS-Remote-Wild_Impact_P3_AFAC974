import React, { useState } from "react";
// import connexion from "../../services/connexion";

function CategoriesAdmin() {
  const [category, setCategory] = useState({
    name: "",
    sousCat: "",
  });

  const handleCategory = (name, value) => {
    setCategory({ ...category, [name]: value });
  };

  // const handleCategory = async (event) => {
  //   event.preventDefault();
  //   const result = await connexion.post("/categories", { category });
  //   console.info(result);
  // };

  // const deleteCategory = async (event) => {
  //   event.preventDefault();
  // fetch(`${import.meta.env.VITE_BACKEND_URL}/categories/${category.id}`, {
  //   method: "DELETE",    // })
  //   .then((res) => res.json())
  //   .then((json) => console.info(json))
  //   .catch((err) => console.error(err));

  return (
    <div>
      <form>
        {/* onSubmit={(event) => handleCategory(event)} */}
        <label>
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
        <label>
          Nom de la sous-catégorie
          <input
            type="text"
            minLength={4}
            name="sousCat"
            onChange={(event) =>
              handleCategory(event.target.name, event.target.value)
            }
            value={category.sousCat}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
      {/* <button type="button" onClick={(event) => deleteCategory(event)}>
        Supprimer
      </button> */}
    </div>
  );
}

export default CategoriesAdmin;
