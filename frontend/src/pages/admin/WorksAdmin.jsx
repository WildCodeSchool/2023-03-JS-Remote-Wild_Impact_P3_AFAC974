import React, { useState } from "react";
import connexion from "../../services/connexion";

function WorksAdmin() {
  const [work, setWork] = useState({
    title: "",
    summary_title: "",
    date: "",
    image_src: "",
    image_alt: "",
    reference: "",
    summary: "",
    format: "",
    techniques_id: "",
    categories_id: "",
  });

  const handleWork = (name, value) => {
    setWork({ ...work, [name]: value });
  };

  const postWork = async (event) => {
    event.preventDefault();
    try {
      const works = await connexion.post("/works", work);
      setWork(works);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-1">
      <h1 className="text-xl font-bold p-4">Gérer les oeuvres</h1>
      <form
        className="flex justify-around"
        onSubmit={(event) => postWork(event)}
      >
        <div className="w-80">
          <div>
            <label
              className="flex flex-col font-semibold pb-5"
              htmlFor="Référence"
            >
              Référence
              <input
                className="border border-black"
                type="text"
                required
                placeholder="Tapez ici la référence de l'oeuvre"
                minLength={5}
                maxLength={12}
                name="reference"
                onChange={(event) =>
                  handleWork(event.target.name, event.target.value)
                }
                value={work.reference}
              />
            </label>
          </div>
          <div className="pt-5">
            <label
              className="flex flex-col font-semibold pb-5"
              htmlFor="Titre de l'oeuvre"
            >
              Titre de l'oeuvre
              <input
                className="border border-black"
                type="text"
                required
                placeholder="Titre de l'oeuvre"
                minLength={5}
                maxLength={255}
                name="title"
                onChange={(event) =>
                  handleWork(event.target.name, event.target.value)
                }
                value={work.title}
              />
            </label>
          </div>
          <div>
            <label
              className="flex flex-col font-semibold pb-5"
              htmlFor="Titre Résumé"
            >
              Titre Résumé
              <input
                className="border border-black"
                type="text"
                required
                placeholder="Titre Résumé"
                minLength={10}
                maxLength={255}
                name="summary_title"
                onChange={(event) =>
                  handleWork(event.target.name, event.target.value)
                }
                value={work.summary_title}
              />
            </label>
          </div>
          <div>
            <label
              className="flex flex-col font-semibold pb-5"
              htmlFor="Année de réalisation"
            >
              Année de réalisation
              <input
                className="border border-black"
                type="text"
                required
                placeholder="Année de réalisation"
                minLength={4}
                maxLength={50}
                name="date"
                onChange={(event) =>
                  handleWork(event.target.name, event.target.value)
                }
                value={work.date}
              />
            </label>
          </div>
          <div>
            <label
              className="flex flex-col font-semibold pb-5"
              htmlFor="Description"
            >
              Commentaire 1
              <textarea
                className="border border-black"
                required
                placeholder="Description"
                minLength={50}
                name="summary"
                onChange={(event) =>
                  handleWork(event.target.name, event.target.value)
                }
                value={work.summary}
              />
            </label>
          </div>
          <div>
            <label
              className="flex flex-col font-semibold pb-5"
              htmlFor="Description"
            >
              Commentaire 2
              <textarea
                className="border border-black"
                required
                placeholder="Description"
                minLength={50}
                name="summary"
                onChange={(event) =>
                  handleWork(event.target.name, event.target.value)
                }
                value={work.summary}
              />
            </label>
          </div>
          <div>
            <label
              className="flex flex-col font-semibold pb-5"
              htmlFor="Description"
            >
              Commentaire 3
              <textarea
                className="border border-black"
                required
                placeholder="Description"
                minLength={50}
                name="summary"
                onChange={(event) =>
                  handleWork(event.target.name, event.target.value)
                }
                value={work.summary}
              />
            </label>
          </div>
          <div>
            <label
              className="flex flex-col font-semibold pb-5"
              htmlFor="Description"
            >
              Commentaire 4
              <textarea
                className="border border-black"
                required
                placeholder="Description"
                minLength={50}
                name="summary"
                onChange={(event) =>
                  handleWork(event.target.name, event.target.value)
                }
                value={work.summary}
              />
            </label>
          </div>
        </div>
        <div>
          <div className="pt-60">
            <div>
              <label
                className="flex flex-col font-semibold pb-5"
                htmlFor="Technique"
              >
                Technique
                <select className="border border-black" type="text">
                  <option value="">
                    Choisissez la technique à associer avec l'oeuvre
                  </option>
                </select>
              </label>
            </div>
            <div>
              <label
                className="flex flex-col font-semibold pb-5"
                htmlFor="Dimensions"
              >
                Dimensions
                <input
                  className="border border-black"
                  type="text"
                  required
                  placeholder="Notez ici les dimensions de l'oeuvre, en cm"
                  minLength={6}
                  maxLength={50}
                  name="format"
                  onChange={(event) =>
                    handleWork(event.target.name, event.target.value)
                  }
                  value={work.format}
                />
              </label>
            </div>
            <div>
              <label
                className="flex flex-col font-semibold pb-5"
                htmlFor="Catégories"
              >
                Catégorie
                <select className="border border-black" type="text">
                  <option value="">
                    Choisissez la catégorie à associer avec l'oeuvre
                  </option>
                </select>
              </label>
            </div>
            <div>
              <label
                className="flex flex-col font-semibold pb-5"
                htmlFor="Texte alternatif de l'image"
              >
                Texte alternatif de l'image
                <input
                  className="border border-black"
                  type="text"
                  required
                  placeholder="Décrivez l'oeuvre en quelques mots (à destination des personnes déficientes visuelles"
                  name="image_alt"
                  onChange={(event) =>
                    handleWork(event.target.name, event.target.value)
                  }
                  value={work.image_alt}
                />
              </label>
            </div>
            <div>
              <label
                className="flex flex-col font-semibold pb-5"
                htmlFor="Image"
              >
                Image
                <input
                  className="border border-black"
                  type="file"
                  required
                  placeholder="Image"
                  name="image_src"
                  onChange={(event) =>
                    handleWork(event.target.name, event.target.value)
                  }
                  value={work.image_src}
                />
              </label>
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-end pt-10 pb-5 pr-10 gap-10">
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
    </div>
  );
}

export default WorksAdmin;
