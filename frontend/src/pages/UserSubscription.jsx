import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import connexion from "../services/connexion";
import "react-toastify/dist/ReactToastify.css";
import AcceptRGPD from "../components/AcceptRGPD";

function UserSubscription() {
  const [users, setUsers] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  // Nous avons déplacé la gestion de l'état de l'acceptation du RGPD ici.
  const [disableButton, setDisableButton] = useState(true);

  const handleUser = (name, value) => {
    setUsers({
      ...users,
      [name]: value,
    });
  };

  // La fonction de toggle a été déplacée ici.
  const toggleDisableButton = () => {
    setDisableButton(!disableButton);
  };

  const postUsers = async (e) => {
    e.preventDefault();
    if (users.password !== users.confirmPassword) {
      console.error("Les mots de passe ne correspondent pas");
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const myUser = { ...users };
      delete myUser.confirmPassword;
      await connexion.post("/signup", myUser);
      toast.success(
        "Votre compte a été créé, vous allez être redirigé·e vers la page de connexion"
      );
      setTimeout(() => {
        navigate("/auth/connexion");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-black flex items-center justify-center h-screen">
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
              pattern="^[\w-.]+@([\w-])+.([\w-]{2,4})$"
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
        <AcceptRGPD toggleDisableButton={toggleDisableButton} />
        <button
          type="submit"
          disabled={disableButton}
          className="bg-gray-800 text-black rounded py-2 px-4 w-full"
        >
          Créer un compte
        </button>
      </form>
    </div>
  );
}

export default UserSubscription;
