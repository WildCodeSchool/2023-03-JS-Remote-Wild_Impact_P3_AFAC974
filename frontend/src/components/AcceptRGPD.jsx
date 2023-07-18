import React, { useState } from "react";

function AcceptRGPD() {
  const [disableButton, setDisableButton] = useState(true);
  const toggleDisableButton = () => {
    setDisableButton(!disableButton);
  };

  // à caler dans le modal d'inscription : setDisableButton(false);

  return (
    <div>
      <label>
        <input type="checkbox" value="accept" onChange={toggleDisableButton} />{" "}
        J'ai lu et j'accepte les conditions générales d'utilisation du site AFAC
        974
        <a
          href={`${import.meta.env.VITE_BACKEND_URL}/rgpd`}
          target="_blank"
          className="underline text-blue"
          rel="noreferrer"
        >
          (en savoir plus)
        </a>
      </label>
      <div className="flex">
        <button
          type="button"
          disabled={disableButton}
          className={`${
            disableButton ? "bg-blue" : "bg-black"
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-end`}
        >
          Inscription
        </button>
      </div>
    </div>
  );
}

export default AcceptRGPD;
