import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

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
  toast("La catégorie a été correctement ajoutée.", {
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

function TechniquesAdmin() {
  const techniqueModel = { id: null, name: "" };

  const [technique, setTechnique] = useState({ techniqueModel });

  const [techniques, setTechniques] = useState([]);

  const refreshTechnique = (id) => {
    if (id === "") {
      setTechnique(techniqueModel);
    } else {
      setTechnique(techniques.find((tech) => tech.id === +id));
    }
  };

  const getTechniques = async () => {
    try {
      const tech = await connexion.get("/techniques");
      setTechniques(tech);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTechniques();
  }, []);

  const handleTechnique = (name, value) => {
    setTechnique({ ...technique, [name]: value });
  };

  const postTechnique = async (e) => {
    e.preventDefault();
    try {
      const tech = await connexion.post("/techniques", technique);
      setTechnique(tech);
      setTechnique(techniqueModel);
      getTechniques();
      notifyAdd();
    } catch (err) {
      notifyWrong();
      console.error(err);
    }
  };

  const updateTechnique = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/techniques/${technique.id}`, technique);
      getTechniques();
      notifyUpdate();
    } catch (error) {
      notifyWrong();
      console.error(error);
    }
  };

  const deleteTechnique = async (e) => {
    e.preventDefault();
    try {
      await connexion.delete(`/techniques/${technique.id}`);
      setTechnique(techniqueModel);
      getTechniques();
      notifyDelete();
    } catch (error) {
      notifyWrong();
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-right pr-5 pt-5 text-2xl font-bold">Page Admin</h1>
      <h2 className="text-xl font-bold p-4">Gestion des techniques</h2>
      <form className="ml-10" onSubmit={(e) => postTechnique(e)}>
        <label
          htmlFor="Select techniques"
          className="flex flex-col font-semibold w-80"
        >
          <select
            onChange={(e) => refreshTechnique(e.target.value)}
            value={technique.id}
            className="border border-black h-7 mt-10 text-black"
          >
            <option value="">Choisir la technique</option>
            {techniques.map((tech) => (
              <option key={tech.id} value={tech.id}>
                {tech.name}
              </option>
            ))}
          </select>
        </label>
        <label
          htmlFor="Write technique"
          className="flex flex-col font-semibold w-80"
        >
          <input
            required
            type="text"
            className="border border-black h-7 mt-10 placeholder:pl-2"
            placeholder="Tapez ici le nom de la catégorie"
            name="name"
            value={technique.name}
            onChange={(e) => handleTechnique(e.target.name, e.target.value)}
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
          {!technique.id && (
            <button type="submit" className="bg-black text-white py-2 px-4">
              Ajouter
            </button>
          )}
        </div>
      </form>
      <div className="flex pl-10 pb-5 pr-10 gap-10">
        {technique.id && (
          <button
            type="button"
            className="bg-black text-white py-2 px-4"
            name="name"
            onClick={(e) => updateTechnique(e)}
          >
            Modifier
          </button>
        )}

        {technique.id && (
          <button
            type="button"
            className="bg-black text-white py-2 px-4"
            name="name"
            onClick={(e) => deleteTechnique(e)}
          >
            Supprimer
          </button>
        )}
      </div>
    </div>
  );
}

export default TechniquesAdmin;
