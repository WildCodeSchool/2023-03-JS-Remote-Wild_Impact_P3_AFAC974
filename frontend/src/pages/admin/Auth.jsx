import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import connexion from "../../services/connexion";
import { useCurrentUser } from "../../components/contexts/UserContexts";

function Auth() {
  const [userToLog, setUserToLog] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useCurrentUser();
  const navigate = useNavigate();

  const handleUser = (event) => {
    setUserToLog({ ...userToLog, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const log = await connexion.post("/login", userToLog);
      setUser(log.msg);
      setTimeout(() => {
        navigate("/administration/articles");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-white p-6 rounded-lg shadow-lg"
        onSubmit={(event) => login(event)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="form2Example1"
          >
            Adresse mail
          </label>
          <input
            type="email"
            id="form2Example1"
            name="email"
            value={userToLog.email}
            onChange={(event) => handleUser(event)}
            className="border-black border-solid border-2 rounded py-2 px-4 w-full"
            required
            pattern="^[\w-\.]+@([\w-])+\.([\w-]{2,4})$"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="form2Example2"
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="form2Example2"
            value={userToLog.password}
            onChange={(event) => handleUser(event)}
            name="password"
            className="border-black border-solid border-2 rounded py-2 px-4 w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-gray-800 text-black
         rounded py-2 px-4 w-full"
        >
          Connexion
        </button>
      </form>
    </div>
  );
}

export default Auth;
