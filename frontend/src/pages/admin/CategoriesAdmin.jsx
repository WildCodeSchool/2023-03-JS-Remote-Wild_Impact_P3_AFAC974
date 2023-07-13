import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

const categoryModel = {
  id: null,
  name: "",
};

const notifyWrong = () =>
  toast("Un problème est survenu, veuillez recommencer.", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

const notifyAdd = () =>
  toast("La catégorie a été correctement mise à jour.", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

const notifyUpdate = () =>
  toast("La catégorie a été correctement mise à jour.", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

const notifyDelete = () =>
  toast("La catégorie été supprimée de la base de données.", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

function CategoriesAdmin() {
  const [category, setCategory] = useState(categoryModel);

  const [categories, setCategories] = useState([]);

  const handleCategory = (name, value) => {
    setCategory({ ...category, [name]: value });
  };

  const getCategories = async () => {
    try {
      const cat = await connexion.get("/categories");
      setCategories(cat);
    } catch (error) {
      notifyWrong();
      console.error(error);
    }
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

  const postCategory = async (e) => {
    e.preventDefault();
    try {
      await connexion.post("/categories", category);
      setCategory(categoryModel);
      getCategories();
      notifyAdd();
    } catch (err) {
      notifyWrong();
      console.error(err);
    }
  };

  const deleteCategory = async (e) => {
    e.preventDefault();
    try {
      await connexion.delete(`/categories/${category.id}`);
      setCategory(categoryModel);
      getCategories();
      notifyDelete();
    } catch (error) {
      notifyWrong();
      console.error(error);
    }
  };

  const updateCategory = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/categories/${category.id}`, category);
      getCategories();
      notifyUpdate();
    } catch (error) {
      notifyWrong();
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-right pr-5 pt-5 text-2xl font-bold">Page Admin</h1>
      <h2 className="text-xl font-bold p-4">Gestion des catégories</h2>

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
            className="border border-black h-7 mt-10 placeholder:pl-2"
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
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="flex pt-10 pb-5 pr-10 gap-10">
          {!category.id && (
            <button className="bg-black text-white py-2 px-4" type="submit">
              Ajouter
            </button>
          )}
        </div>
      </form>
      <div className="flex pl-10 pb-5 pr-10 gap-10">
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
