import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import connexion from "../services/connexion";

function UserSubscription() {
  const [users, setUsers] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleUser = (name, value) => {
    setUsers({
      ...users,
      [name]: value,
    });
  };

  const postUsers = async (e) => {
    e.preventDefault();
    if (users.password !== users.confirmPassword) {
      console.error("Les mots de passe ne correspondent pas");
      return;
    }
    try {
      const myUser = { ...users };
      delete myUser.confirmPassword;
      await connexion.post("/signup", myUser);
      navigate("/auth/connexion");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        className="bg-white p-6 rounded-lg shadow-lg"
        onSubmit={(e) => postUsers(e)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Prénom
            <input
              type="text"
              name="firstname"
              value={users.firstname}
              onChange={(e) => handleUser(e.target.name, e.target.value)}
              className="border-black border-solid border-2 rounded py-2 px-4 w-full"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Adresse mail
            <input
              type="email"
              name="email"
              value={users.email}
              onChange={(e) => handleUser(e.target.name, e.target.value)}
              className="border-black border-solid border-2 rounded py-2 px-4 w-full"
              required
              pattern="^[\w-\.]+@([\w-])+\.([\w-]{2,4})$"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Mot de passe
            <input
              type="password"
              name="password"
              value={users.password}
              onChange={(e) => handleUser(e.target.name, e.target.value)}
              className="border-black border-solid border-2 rounded py-2 px-4 w-full"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirmer le mot de passe
            <input
              type="password"
              name="confirmPassword"
              value={users.confirmPassword}
              onChange={(e) => handleUser(e.target.name, e.target.value)}
              className="border-black border-solid border-2 rounded py-2 px-4 w-full"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-gray-800 text-black rounded py-2 px-4 w-full"
        >
          Créer un compte
        </button>
      </form>
    </div>
  );
}

export default UserSubscription;
