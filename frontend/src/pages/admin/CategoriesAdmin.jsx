import React, { useState } from "react";

function CategoriesAdmin() {
  const [category, setCategory] = useState("");

  const handleCategory = (event) => {
    event.preventDefault();
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
