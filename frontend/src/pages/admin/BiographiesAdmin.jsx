import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";

function BiographiesAdmin() {
  const biographyModel = {
    name: "",
    title1: "",
    image1_src: "",
    image1_alt: "",
    text1: "",
    title2: "",
    image2_src: "",
    image2_alt: "",
    text2: "",
    title3: "",
    image3_src: "",
    image3_alt: "",
    text3: "",
  };

  const [biography, setBiography] = useState({ biographyModel });
  const [biographies, setBiographies] = useState([]);

  const refreshBiography = (id) => {
    if (id === "") {
      setBiography(biographyModel);
    } else {
      setBiography(biographies.find((bio) => bio.id === +id));
    }
  };

  const getBiographies = async () => {
    try {
      const bio = await connexion.get("/biographies");
      setBiographies(bio);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBiographies();
  }, []);

  const handleBiography = (name, value) => {
    setBiography({ ...biography, [name]: value });
  };

  const postBiography = async (event) => {
    event.preventDefault();
    try {
      const bio = await connexion.post("/biographies", biography);
      setBiography(bio);
      setBiography(biographyModel);
      getBiographies();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-1">
      <h1 className="text-right pr-5 pt-5 text-2xl font-bold">Page Admin</h1>
      <h2 className="text-xl font-bold p-4 pb-10">Gestion des Biographies</h2>

      <form onSubmit={(event) => postBiography(event)}>
        <label
          htmlFor="Select biographies"
          className="flex flex-col font-semibold w-80"
        >
          <select
            onChange={(e) => refreshBiography(e.target.value)}
            value={biography.id}
            className="border border-black h-7 mt-10 text-black"
          >
            <option value="">Choisir la biographie</option>
            {biographies.map((bio) => (
              <option key={bio.id} value={bio.id}>
                {bio.name}
              </option>
            ))}
          </select>
        </label>
        <label
          htmlFor="Write biographie"
          className="flex flex-col font-semibold w-80"
        >
          <input
            required
            type="text"
            className="border border-black h-7 mt-10"
            placeholder="Tapez ici le nom de la catégorie"
            name="name"
            value={biography.name}
            onChange={(e) => handleBiography(e.target.name, e.target.value)}
          />
        </label>

        <div>
          <label className="flex flex-col font-semibold pb-5">
            Texte alternatif de l'image part.1
            <input
              className="border border-black h-7"
              type="text"
              required
              placeholder="Décrivez l'oeuvre en quelques mots (à destination des personnes déficientes visuelles"
              name="image_alt"
              onChange={(event) =>
                handleBiography(event.target.name, event.target.value)
              }
              value={biography.image1_alt}
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col font-semibold pb-5">
            Image part.1
            <input
              className="border border-black h-7"
              type="text"
              required
              placeholder="Image"
              name="image_src"
              onChange={(event) =>
                handleBiography(event.target.name, event.target.value)
              }
              value={biography.image1_src}
            />
          </label>
        </div>
        <div className="pt-5">
          <label className="flex flex-col font-semibold pb-5">
            Titre biographie part.1
            <input
              className="border border-black h-7"
              type="text"
              required
              placeholder="Titre de la biographie"
              minLength={5}
              maxLength={255}
              name="title"
              onChange={(event) =>
                handleBiography(event.target.name, event.target.value)
              }
              value={biography.title1}
            />
          </label>
        </div>

        <div>
          <label className="flex flex-col font-semibold pb-5">
            Commentaire 1
            <textarea
              className="border border-black"
              required
              placeholder="Description"
              minLength={50}
              name="summary1"
              onChange={(event) =>
                handleBiography(event.target.name, event.target.value)
              }
              value={biography.text1}
            />
          </label>
        </div>

        <div>
          <label className="flex flex-col font-semibold pb-5">
            Texte alternatif de l'image part.2
            <input
              className="border border-black h-7"
              type="text"
              required
              placeholder="Décrivez l'oeuvre en quelques mots (à destination des personnes déficientes visuelles"
              name="image_alt"
              onChange={(event) =>
                handleBiography(event.target.name, event.target.value)
              }
              value={biography.image2_alt}
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col font-semibold pb-5">
            Image part.2
            <input
              className="border border-black h-7"
              type="text"
              required
              placeholder="Image"
              name="image_src"
              onChange={(event) =>
                handleBiography(event.target.name, event.target.value)
              }
              value={biography.image2_src}
            />
          </label>
        </div>
        <div className="pt-5">
          <label className="flex flex-col font-semibold pb-5">
            Titre biographie part.2
            <input
              className="border border-black h-7"
              type="text"
              required
              placeholder="Titre de la biographie"
              minLength={5}
              maxLength={255}
              name="title"
              onChange={(event) =>
                handleBiography(event.target.name, event.target.value)
              }
              value={biography.title2}
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col font-semibold pb-5">
            Commentaire 2
            <textarea
              className="border border-black"
              placeholder="Description"
              minLength={50}
              name="summary2"
              onChange={(event) =>
                handleBiography(event.target.name, event.target.value)
              }
              value={biography.text2}
            />
          </label>
        </div>

        <div>
          <label className="flex flex-col font-semibold pb-5">
            Texte alternatif de l'image 3
            <input
              className="border border-black h-7"
              type="text"
              required
              placeholder="Décrivez l'oeuvre en quelques mots (à destination des personnes déficientes visuelles"
              name="image_alt"
              onChange={(event) =>
                handleBiography(event.target.name, event.target.value)
              }
              value={biography.image3_alt}
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col font-semibold pb-5">
            Image part.3
            <input
              className="border border-black h-7"
              type="text"
              required
              placeholder="Image"
              name="image_src"
              onChange={(event) =>
                handleBiography(event.target.name, event.target.value)
              }
              value={biography.image3_src}
            />
          </label>

          <div className="pt-5">
            <label className="flex flex-col font-semibold pb-5">
              Titre biographie part.3
              <input
                className="border border-black h-7"
                type="text"
                required
                placeholder="Titre de la biographie"
                minLength={5}
                maxLength={255}
                name="title"
                onChange={(event) =>
                  handleBiography(event.target.name, event.target.value)
                }
                value={biography.title3}
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col font-semibold pb-5">
              Commentaire 3
              <textarea
                className="border border-black"
                placeholder="Description"
                minLength={50}
                name="summary3"
                onChange={(event) =>
                  handleBiography(event.target.name, event.target.value)
                }
                value={biography.text3}
              />
            </label>
          </div>
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
        </div>
      </form>
    </div>
  );
}

export default BiographiesAdmin;
