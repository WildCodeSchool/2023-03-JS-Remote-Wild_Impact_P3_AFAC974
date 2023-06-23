import React, { useState, useEffect } from "react";

const categoryModel = {
  id: null,
  name: "",
};

function CategoriesAdmin() {
  const [category, setCategory] = useState(categoryModel);

  const [categories, setCategories] = useState([]);

  // const getCategoryToUpdate = (event) => {
  //   event.preventDefault();
  //   fetch(
  //     `${import.meta.env.VITE_BACKEND_URL}/categories/${event.target.value}`,
  //     {
  //       method: "PUT",
  //       body: JSON.stringify(category),
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  // };

  const handleCategory = (name, value) => {
    setCategory({ ...category, [name]: value });
  };

  const getCategories = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCategories();
  }, []);

  const refreshCategory = (id) => {
    if (id === "") {
      setCategory(categoryModel);
    } else {
      setCategory(categories.find((cat) => cat.id === +id));
    }
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
      .then(() => {
        setCategory(categoryModel);
        getCategories();
      })
      .catch((err) => console.error(err));
  };

  const deleteCategory = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories/${category.id}`, {
      method: "DELETE",
    })
      .then(() => setCategory(categoryModel))
      .then(() => getCategories())
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={(event) => postCategory(event)}>
        <label
          htmlFor="Select categories"
          className="block mb-2 text-sm font-medium text-gray dark:text-white"
        >
          Selectionner une catégorie
          <select
            onChange={(event) => refreshCategory(event.target.value)}
            value={category.id}
            className="bg-gray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choisir la catégorie</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>

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
        <div>
          <button type="button" onClick={(e) => deleteCategory(e)}>
            Supprimer
          </button>
          {/* <button type="button" onClick={() => setCategory(categoryModel)}>
            Ajouter une nouvelle catégorie
          </button> */}
        </div>
      )}
    </div>
  );
}

export default CategoriesAdmin;
