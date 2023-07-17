import React, { useState, useEffect } from "react";
import connexion from "../services/connexion";

function UserSubscription() {
  const [users, setUsers] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      const register = await connexion.post("/users", users);
      setUsers(register);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    postUsers();
  }, []);

  return (
    <div>
      <form
        className="bg-white p-6 rounded-lg shadow-lg"
        onSubmit={(e) => postUsers(e)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="form2Example1"
          >
            Prénom
          </label>
          <input
            type="text"
            id="form2Example1"
            name="firstname"
            value={users.firstname}
            onChange={(e) => handleUser(e.target.name, e.target.value)}
            className="border-black border-solid border-2 rounded py-2 px-4 w-full"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="form2Example2"
          >
            Adresse mail
          </label>
          <input
            type="email"
            id="form2Example2"
            name="email"
            value={users.email}
            onChange={(e) => handleUser(e.target.name, e.target.value)}
            className="border-black border-solid border-2 rounded py-2 px-4 w-full"
            required
            pattern="^[\w-\.]+@([\w-])+\.([\w-]{2,4})$"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="form2Example3"
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="form2Example3"
            name="password"
            value={users.password}
            onChange={(e) => handleUser(e.target.name, e.target.value)}
            className="border-black border-solid border-2 rounded py-2 px-4 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="form2Example4"
          >
            Confirmer le mot de passe
          </label>
          <input
            type="password"
            id="form2Example4"
            name="confirmPassword"
            value={users.confirmPassword}
            onChange={(e) => handleUser(e.target.name, e.target.value)}
            className="border-black border-solid border-2 rounded py-2 px-4 w-full"
          />
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
