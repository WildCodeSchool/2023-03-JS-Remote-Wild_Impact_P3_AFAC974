import React from "react";

function BiographyAdmin() {
  return (
    <div className="flex-1">
      <h1 className="text-right pr-5 pt-5 text-2xl font-bold">Page Admin</h1>
      <h2 className="text-xl font-bold p-4 pb-10">Gestion de la biographie</h2>
      <form className="ml-10">
        <label className="flex flex-col font-semibold w-80">
          <select className="border border-black h-7 mt-10">
            <option value="">Choisir une biographie</option>
          </select>
          <input
            className="border border-black h-7 mt-10"
            type="text"
            placeholder="Tapez ici le nom de l'article"
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

export default BiographyAdmin;
