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
    <div className="flex flex-col">
      <h1>Gérer les oeuvres</h1>
      <form className="flex" onSubmit={(event) => postWork(event)}>
        <div className="md:container ">
          <div className="flex">
            <label htmlFor="Titre de l'oeuvre">
              Titre de l'oeuvre
              <input
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
            <label htmlFor="Titre Résumé">
              Titre Résumé
              <input
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
            <label htmlFor="Année de réalisation">
              Année de réalisation
              <input
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
            <label htmlFor="Image">
              Image
              <input
                type="text"
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
          <div>
            <label htmlFor="Texte alternatif de l'image">
              Texte alternatif de l'image
              <input
                type="text"
                required
                placeholder="Texte alternatif de l'image"
                name="image_alt"
                onChange={(event) =>
                  handleWork(event.target.name, event.target.value)
                }
                value={work.image_alt}
              />
            </label>
          </div>
          <div>
            <label htmlFor="Référence">
              Référence
              <input
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
          <div>
            <label htmlFor="Description">
              Description
              <textarea
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
            <label htmlFor="Dimensions">
              Dimensions
              <input
                type="text"
                required
                placeholder="Dimensions"
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
          <div className="md:container flex">
            <div>
              <label htmlFor="Technique">
                Technique //* faire les fetch pour techniques et catégories pour
                pouvoir les afficher / state / poster*/
                <input type="text" placeholder="Technique" />
              </label>
            </div>
            <div>
              <label htmlFor="Catégories">
                Catégories
                <input type="text" placeholder="Catégories" />
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="Articles">
              Articles
              <input type="text" placeholder="Articles" />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-blue py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default WorksAdmin;
