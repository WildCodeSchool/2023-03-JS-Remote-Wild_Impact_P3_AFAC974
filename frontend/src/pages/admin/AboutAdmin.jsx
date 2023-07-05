import React, { useEffect, useState } from "react";

function AboutAdmin() {
  const aboutModel = {
    id: null,
    name: "",
    summary: "",
  };

  const [about, setAbout] = useState(aboutModel);

  const [abouts, setAbouts] = useState([]);

  const handleAbout = (name, value) => {
    setAbout({ ...about, [name]: value });
  };

  const getAbouts = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/about`)
      .then((res) => res.json())
      .then((data) => setAbouts(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAbouts();
  }, []);

  const refreshAbout = (id) => {
    if (id === "") {
      setAbout(aboutModel);
    } else {
      setAbout(abouts.find((ab) => ab.id === +id));
    }
  };

  const postAbout = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/about`, {
      method: "POST",
      body: JSON.stringify(about),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setAbout(aboutModel);
        getAbouts();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex-1">
      <h1 className="text-right pr-5 pt-5 text-2xl font-bold">Page Admin</h1>
      <h2 className="text-xl font-bold p-4 pb-10">Gestion du à propos</h2>
      <form className="ml-10" onSubmit={(event) => postAbout(event)}>
        <label className="flex flex-col font-semibold w-80 pb-5">
          <select
            className="border border-black h-7 mt-10"
            onChange={(event) => refreshAbout(event.target.value)}
            value={about.id}
          >
            <option value="">Choisir un à propos</option>
            {abouts.map((ab) => (
              <option key={ab.id} value={ab.id}>
                {ab.name}
              </option>
            ))}
          </select>
          <input
            className="border border-black h-7 mt-10"
            type="text"
            minLength={4}
            placeholder="Nom du commentaire"
            name="name"
            onChange={(event) =>
              handleAbout(event.target.name, event.target.value)
            }
            value={about.name}
          />
        </label>
        <label className="flex flex-col font-semibold w-80">
          Commentaire
          <textarea
            className="border border-black"
            required
            placeholder="Tapez ici votre commentaire"
            minLength={20}
            name="summary"
            onChange={(event) =>
              handleAbout(event.target.name, event.target.value)
            }
            value={about.summary}
          />
        </label>
        <div className="flex justify-end pt-60 pb-5 pr-10 gap-10">
          <button type="submit" className="bg-black text-white py-2 px-4">
            Ajouter
          </button>
          <button type="button" className="bg-black text-white py-2 px-4">
            Modifier
          </button>
          <button type="button" className="bg-black text-white py-2 px-4">
            Supprimer
          </button>
        </div>
      </form>
    </div>
  );
}

export default AboutAdmin;
