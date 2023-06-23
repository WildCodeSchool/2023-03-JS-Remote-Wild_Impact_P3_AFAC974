import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import connexion from "../../services/connexion";

function TechniquesAdmin() {
  const techniqueModel = { id: null, name: "" };

  const [technique, setTechnique] = useState({ techniqueModel });

  const [techniques, setTechniques] = useState([]);

  const getTechniques = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/techniques`)
      .then((res) => res.json())
      .then((data) => setTechniques(data))
      .catch((err) => console.error(err));
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
      const newTechnique = await connexion.post("/techniques", technique);
      setTechnique(newTechnique);
      setTechnique(techniqueModel);
      getTechniques();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTechnique = async (e) => {
    e.preventDefault();
    await connexion.delete(`/techniques/${technique.id}`);
    setTechnique(techniqueModel);
    getTechniques();
  };

  return (
    <div className="flex-1">
      <h1 className="text-right pr-5 pt-5 text-2xl font-bold">Page Admin</h1>
      <h2 className="text-xl font-bold p-4 pb-10">Gestion des techniques</h2>

      <Outlet />
      <form className="ml-10" onSubmit={(e) => postTechnique(e)}>
        <label
          htmlFor="Select techniques"
          className="flex flex-col font-semibold w-80"
        >
          <select
            onChange={(e) =>
              setTechnique(
                techniques.find((tech) => tech.id === +e.target.value)
              )
            }
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
            className="border border-black h-7 mt-10"
            placeholder="Tapez ici le nom de la catégorie"
            name="name"
            value={technique.name}
            onChange={(e) => handleTechnique(e.target.name, e.target.value)}
          />
        </label>
        <div className="flex justify-end pt-60 pb-5 pr-10 gap-10">
          {!technique.id && (
            <button type="submit" className="bg-black text-white py-2 px-4">
              Ajouter
            </button>
          )}
        </div>
      </form>

      <div className="pt-10 pr-10">
        {technique.id && (
          <button type="button" className="bg-black text-white py-2 px-4">
            Modifier
          </button>
        )}

        {technique.id && (
          <button
            type="button"
            className="bg-black text-white py-2 px-4"
            name="name"
            value={technique.id}
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
