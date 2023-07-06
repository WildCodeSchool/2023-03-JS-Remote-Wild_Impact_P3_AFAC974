import React, { useState } from "react";
import connexion from "../../services/connexion";

function UsersAdmin() {
  const [user, setUser] = useState({
    email: "",
    firstname: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleUser = (name, value) => {
    if (name === "email") {
      if (!validateEmail(value)) {
        console.error("Adresse e-mail invalide");
        return;
      }
    }
    setUser({ ...user, [name]: value });
  };

  const postUser = async (event) => {
    event.preventDefault();
    try {
      const users = await connexion.post("/users", user);
      setUser(users);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-right pr-5 pt-5 text-2xl font-bold">Page Admin</h1>
      <h2 className="text-xl font-bold p-4 pb-10">Gestion des utilisateurs</h2>
      <form className="flex pl-10" onSubmit={(event) => postUser(event)}>
        <div className="w-80">
          <div>
            <label className="flex flex-col font-semibold">
              Référence
              <input
                className="border border-black h-7 placeholder:pl-2"
                type="text"
                required
                placeholder="Tapez ici la référence de l'utilisateur"
                minLength={5}
                maxLength={12}
                name="firstname"
                onChange={(event) =>
                  handleUser(event.target.name, event.target.value)
                }
                value={user.firstname}
              />
            </label>
          </div>
          <div className="pt-5">
            <label className="flex flex-col font-semibold pb-5">
              Adresse e-mail
              <input
                className="border border-black h-7 w-full"
                type="email"
                required
                placeholder="Adresse e-mail"
                name="email"
                onChange={(event) =>
                  handleUser(event.target.name, event.target.value)
                }
                value={user.email}
              />
            </label>
          </div>
          <div className="flex pt-10 pb-5 pr-10 gap-10">
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

export default UsersAdmin;
