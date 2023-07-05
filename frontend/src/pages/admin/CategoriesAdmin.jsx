import React, { useState, useEffect } from "react";

const categoryModel = {
  id: null,
  name: "",
};

function CategoriesAdmin() {
  const [category, setCategory] = useState(categoryModel);

  const [categories, setCategories] = useState([]);

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

  const updateCategory = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories/${category.id}`, {
      method: "PUT",
      body: JSON.stringify(category),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => getCategories())
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex-1">
      <h1 className="text-right pr-5 pt-5 text-2xl font-bold">Page Admin</h1>
      <h2 className="text-xl font-bold p-4 pb-10">Gestion des catégories</h2>

      <form className="ml-10" onSubmit={(event) => postCategory(event)}>
        <label
          htmlFor="Select categories"
          className="flex flex-col font-semibold w-80"
        >
          <select
            onChange={(event) => refreshCategory(event.target.value)}
            value={category.id}
            className="border border-black h-7 mt-10 text-black"
          >
            <option value="">Choisir la catégorie</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="" className="flex flex-col font-semibold w-80">
          <input
            className="border border-black h-7 mt-10"
            type="text"
            minLength={4}
            placeholder="Tapez ici le nom de la catégorie"
            name="name"
            onChange={(event) =>
              handleCategory(event.target.name, event.target.value)
            }
            value={category.name}
          />
        </label>
        <div className="flex pt-10 pb-5 pr-10 gap-10">
          {!category.id && (
            <button className="bg-black text-white py-2 px-4" type="submit">
              Ajouter
            </button>
          )}
        </div>
      </form>
      <div className="flex justify-end pb-5 pr-10 gap-10">
        {category.id && (
          <button
            className="bg-black text-white py-2 px-4"
            type="button"
            onClick={(e) => deleteCategory(e)}
          >
            Supprimer
          </button>
        )}
        {category.id && (
          <button
            className="bg-black text-white py-2 px-4"
            type="button"
            onClick={(e) => updateCategory(e)}
          >
            Modifier
          </button>
        )}
      </div>
    </div>
  );
}

export default CategoriesAdmin;
