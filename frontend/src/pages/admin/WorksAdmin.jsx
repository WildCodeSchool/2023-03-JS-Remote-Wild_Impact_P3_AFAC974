import React from "react";

function WorksAdmin() {
  return (
    <div className="flex">
      <h1>Gérer les oeuvres</h1>
      <form className="flex">
        <div className="md:container ">
          <div>
            <label htmlFor="Référence">
              Référence
              <input type="text" placeholder="Référence" />
            </label>
          </div>
          <div className="flex">
            <label htmlFor="Titre de l'oeuvre">
              Titre de l'oeuvre
              <input type="text" placeholder="Titre de l'oeuvre" />
            </label>
          </div>
          <div>
            <label htmlFor="Titre Résumé">
              Titre Résumé
              <input type="text" placeholder="Titre Résumé" />
            </label>
          </div>
          <div>
            <label htmlFor="Année de réalisation">
              Année de réalisation
              <input type="text" placeholder="Année de réalisation" />
            </label>
          </div>
        </div>
        <div className="md:container flex">
          <div>
            <label htmlFor="Technique">
              Technique
              <input type="text" placeholder="Technique" />
            </label>
          </div>
          <div>
            <label htmlFor="Dimensions">
              Dimensions
              <input type="text" placeholder="Dimensions" />
            </label>
          </div>
          <div>
            <label htmlFor="Catégories">
              Catégories
              <input type="text" placeholder="Catégories" />
            </label>
          </div>
          <div>
            <label htmlFor="Description">
              Description
              <input type="text" placeholder="Description" />
            </label>
          </div>
          <div>
            <label htmlFor="Image">
              Image
              <input type="text" placeholder="Image" />
            </label>
          </div>
          <div>
            <label htmlFor="Articles">
              Articles
              <input type="text" placeholder="Articles" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default WorksAdmin;
