import React from "react";
import { Link } from "react-router-dom";

function AcceptRGPD({ toggleDisableButton }) {
  return (
    <div className="text-xs">
      <label>
        <input type="checkbox" value="accept" onChange={toggleDisableButton} />{" "}
        J'ai lu et j'accepte les conditions générales d'utilisation du site AFAC
        974
        <Link
          to="/rgpd"
          target="_blank"
          className="underline text-blue"
          rel="noreferrer"
        >
          (en savoir plus)
        </Link>
      </label>
    </div>
  );
}

export default AcceptRGPD;
