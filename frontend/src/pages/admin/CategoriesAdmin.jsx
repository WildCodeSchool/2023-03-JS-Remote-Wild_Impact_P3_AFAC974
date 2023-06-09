import React, { useState } from "react";
import connexion from "../../services/connexion";

function CategoriesAdmin() {
  const [category, setCategory] = useState("");

  const handleCategory = async (event) => {
    event.preventDefault();
    const result = await connexion.post("/categories", { category });
    console.info(result);
  };

  return (
    <div>
      <form onSubmit={(event) => handleCategory(event)}>
        <label>
          Nom de la catégorie
          <input
            type="text"
            minLength={4}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default CategoriesAdmin;
