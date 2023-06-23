import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import connexion from "../../services/connexion";

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
    } catch (err) {
      console.error(err);
    }
  };

  const updateTechnique = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/techniques/${technique.id}`, technique);
      getTechniques();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTechnique = async (e) => {
    e.preventDefault();
    try {
      await connexion.delete(`/techniques/${technique.id}`);
      setTechnique(techniqueModel);
      getTechniques();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="font-bold 700">Techniques</h1>

      <Outlet />

      <label
        htmlFor="Select techniques"
        className="block mb-2 text-sm font-medium text-gray dark:text-white"
      >
        Selectionner une technique
        <select
          onChange={(e) => refreshTechnique(e.target.value)}
          value={technique.id}
          className="bg-gray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Choisir la technique</option>
          {techniques.map((tech) => (
            <option key={tech.id} value={tech.id}>
              {tech.name}
            </option>
          ))}
        </select>
      </label>

      <form onSubmit={(e) => postTechnique(e)}>
        <label
          htmlFor="Write technique"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Saisir le nom de la technique
          <input
            required
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            name="name"
            value={technique.name}
            onChange={(e) => handleTechnique(e.target.name, e.target.value)}
          />
        </label>

        {!technique.id && (
          <button
            type="submit"
            className="inline-block rounded-full bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Ajouter
          </button>
        )}
      </form>

      {technique.id && (
        <button
          type="button"
          className="inline-block rounded-full bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-{0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          name="name"
          onClick={(e) => updateTechnique(e)}
        >
          Modifier
        </button>
      )}

      {technique.id && (
        <button
          type="button"
          className="inline-block rounded-full bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          name="name"
          onClick={(e) => deleteTechnique(e)}
        >
          Supprimer
        </button>
      )}
    </>
  );
}

export default TechniquesAdmin;
