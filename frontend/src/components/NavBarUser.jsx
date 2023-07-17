/* eslint-disable no-irregular-whitespace */
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import user from "../assets/user.svg";
import logo from "../assets/logo.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    border: "3px solid black",
    transform: "translate(-50%, -50%)",
  },
};

function NavBarUser() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    navigate("/subscription");
  }
  return (
    <div className="bg-black pt-2 pl-10 text-white">
      <ul className="flex justify-between items-center">
        <NavLink to="/">
          <img className="h-20" src={logo} alt="logo" />
        </NavLink>

        <div className="flex gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text underline underline-offset-8 decoration-4 decoration-purple"
                : ""
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text underline underline-offset-8 decoration-4 decoration-purple"
                : ""
            }
          >
            Galerie
          </NavLink>
          <NavLink
            to="/author"
            className={({ isActive }) =>
              isActive
                ? "text underline underline-offset-8 decoration-4 decoration-purple"
                : ""
            }
          >
            Biographie
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text underline underline-offset-8 decoration-4 decoration-purple"
                : ""
            }
          >
            A propos
          </NavLink>
        </div>
        <div className="flex items-center pr-10">
          <Link className="pt-1" to="/favourites">
            <img className="h-6 pr-4" src={user} alt="user" />
          </Link>
          <button type="button" onClick={openModal} className="pt-1">
            Connexion
          </button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="pop-up protection des données"
        >
          <div className="flex flex-col text-justify text-xs">
            <h2>
              MENTIONS LEGALES : <br />
              <br />
              Conformément aux dispositions des articles 6-III et 19 de la Loi
              n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie
              numérique, dite L.C.E.N., nous portons à la connaissance des
              utilisateurs et visiteurs du site AFAC 974 les informations
              suivantes : <br />
              <br />
              1. Informations légales : Statut du propriétaire : particulier.
              <br />
              Le Propriétaire est : Julien Richard <br />
              Adresse postale du propriétaire : Rue de l'avenir du web 66666
              WildCodeSchool.
              <br />
              <br />
              Les Créateurs du site sont : Benoît Béranger, Ugo Bourgoin,
              Camille Fabry, Jérémy Maillard et Nicolas Panis. <br />
              Le Responsable de la publication est : Julien Richard.
              <br />
              Le responsable de la publication est :
              wildProject3@wildcodeschool.com. <br />
              Le responsable de la publication est une personne physique. <br />
              <br />
              Le Webmaster est : Julien Richard. <br />
              Contacter le Webmaster : wildProject3@wildcodeschool.com.
              <br />
              L’hebergeur du site est : OVH 2 rue Kellermann 59100 Roubaix.
              <br />
              <br />
              2. Présentation et principe : <br />
              Est désigné ci-après : Utilisateur, tout internaute se connectant
              et utilisant le site susnommé : AFAC 974. <br />
              Le site AFAC 974 regroupe un ensemble de services, dans l'état, 
              mis à la disposition des utilisateurs. Il est ici précisé que ces
              derniers doivent rester courtois et faire preuve de bonne foi tant
              envers les autres utilisateurs qu'envers le webmaster du site AFAC
              974. Le site AFAC 974 est mis à jour régulièrement par Julien
              Richard. Julien Richard s’efforce de fournir sur le site AFAC 974
              des informations les plus précises possibles (sous réserve de
              modifications apportées depuis leur mise en ligne), mais ne
              saurait garantir l'exactitude, la complétude et l'actualité des
              informations diffusées sur son site, qu’elles soient de son fait
              ou du fait des tiers partenaires qui lui fournissent ces
              informations. En conséquence, l'utilisateur reconnaît utiliser ces
              informations données (à titre indicatif, non exhaustives et
              susceptibles d'évoluer) sous sa responsabilité exclusive. <br />
              <br />
              3. Accessibilité : <br />
              Le site AFAC 974 est par principe accessible aux utilisateurs
              24/24h, 7/7j, sauf interruption, programmée ou non, pour les
              besoins de sa maintenance ou en cas de force majeure. En cas
              d’impossibilité d’accès au service, AFAC 974 s’engage à faire son
              maximum afin de rétablir l’accès au service et s’efforcera alors
              de communiquer préalablement aux utilisateurs les dates et heures
              de l’intervention. N’étant soumis qu’à une obligation de moyen,
              AFAC 974 ne saurait être tenu pour responsable de tout dommage,
              quelle qu’en soit la nature, résultant d’une indisponibilité du
              service.
              <br />
              <br />
              4. Propriété intellectuelle : <br />
              Julien Richard est propriétaire exclusif de tous les droits de
              propriété intellectuelle ou détient les droits d’usage sur tous
              les éléments accessibles sur le site, tant sur la structure que
              sur les textes, images, graphismes, logo, icônes, sons, logiciels…
              Toute reproduction totale ou partielle du site AFAC 974,
              représentation, modification, publication, adaptation totale ou
              partielle de l'un quelconque de ces éléments, quel que soit le
              moyen ou le procédé utilisé, est interdite, sauf autorisation
              écrite préalable de Julien Richard, propriétaire du site à l'email
              : wildProject3@wildcodeschool.com, à défaut elle sera considérée
              comme constitutive d’une contrefaçon et passible de poursuite
              conformément aux dispositions des articles L.335-2 et suivants du
              Code de Propriété Intellectuelle.
              <br />
              <br />
              5. Liens hypertextes et cookies : <br />
              Le site AFAC 974 contient un certain nombre de liens hypertextes
              vers d’autres sites (partenaires, informations …) mis en place
              avec l’autorisation de Julien Richard. Cependant, Julien Richard
              n’a pas la possibilité de vérifier l'ensemble du contenu des sites
              ainsi visités et décline donc toute responsabilité de ce fait
              quand aux risques éventuels de contenus illicites. L’utilisateur
              est informé que lors de ses visites sur le site AFAC 974, un ou
              des cookies sont susceptibles de s’installer automatiquement sur
              son ordinateur par l'intermédiaire de son logiciel de navigation.
              Un cookie est un bloc de données qui ne permet pas d'identifier
              l'utilisateur, mais qui enregistre des informations relatives à la
              navigation de celui-ci sur le site. Le paramétrage du logiciel de
              navigation permet d’informer de la présence de cookie et
              éventuellement, de la refuser de la manière décrite à l’adresse
              suivante : www.cnil.fr. L’utilisateur peut toutefois configurer le
              navigateur de son ordinateur pour refuser l’installation des
              cookies, sachant que le refus d'installation d'un cookie peut
              entraîner l’impossibilité d’accéder à certains services. Pour tout
              bloquage des cookies, tapez dans votre moteur de recherche :
              bloquage des cookies sous IE ou firefox et suivez les instructions
              en fonction de votre version. <br />
              <br />
              6. Protection des biens et des personnes - gestion des données
              personnelles : <br />
              En France, les données personnelles sont notamment protégées par
              la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août
              2004, l'article L. 226-13 du Code pénal et la Directive Européenne
              du 24 octobre 1995. Sur le site AFAC 974, Julien Richard ne
              collecte des informations personnelles ( suivant l'article 4 loi
              n°78-17 du 06 janvier 1978) relatives à l'utilisateur que pour le
              besoin de certains services proposés par le site AFAC 974.
              L'utilisateur fournit ces informations en toute connaissance de
              cause, notamment lorsqu'il procède par lui-même à leur saisie. Il
              est alors précisé à l'utilisateur du site AFAC 974 l’obligation ou
              non de fournir ces informations. Conformément aux dispositions des
              articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative
              à l’informatique, aux fichiers et aux libertés, tout utilisateur
              dispose d’un droit d’accès, de rectification, de suppression et
              d’opposition aux données personnelles le concernant. Pour
              l’exercer, adressez votre demande à AFAC 974 par email :
              wildProject3@wildcodeschool.com ou par écrit dûment signée,
              accompagnée d’une copie du titre d’identité avec signature du
              titulaire de la pièce, en précisant l’adresse à laquelle la
              réponse doit être envoyée. <br />
              Aucune information personnelle de l'utilisateur du site AFAC 974
              n'est publiée à l'insu de l'utilisateur, échangée, transférée,
              cédée ou vendue sur un support quelconque à des tiers. Seule
              l'hypothèse du rachat du site AFAC 974 et de ses droits autorise
              Julien Richardà transmettre les dites informations à l'éventuel
              acquéreur qui serait à son tour tenu à la même obligation de
              conservation et de modification des données vis à vis de
              l'utilisateur du site AFAC 974. Le site AFAC 974 est en conformité
              avec le RGPD voir notre politique RGPD 
              https://afac-974.remote-fr-3.wilders.dev/rgpd. <br />
              Les bases de données sont protégées par les dispositions de la loi
              du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996
              relative à la protection juridique des bases de données.
            </h2>
            <button
              onClick={closeModal}
              type="button"
              className="text-black text-3xl"
            >
              INSCRIPTION
            </button>
          </div>
        </Modal>
      </ul>
    </div>
  );
}

export default NavBarUser;
