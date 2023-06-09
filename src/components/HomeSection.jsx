import React from "react";
import "../App.css";

export default function HomeSection() {
  return (
    <>
      <div className="bg-white sm:flex pt-10 w-full flex-wrap">
        <div className="sm:w-1/2 w-full flex flex-col">
          <div className="flex items-center flex-col justify-center">
            <strong className="all-text sm:text-3xl text-3xl p-8 sm:p-0  md:text-5xl flex text-center">
              Fimat Groupe
              <br />
              Votre Agence de services
              <br />
              Web, de Sécurité informatique,
              <br />
              et de Caméra de surveillance
            </strong>
            <p className="text-black sm:pt-6 font-sans text-xl font-thin flex text-center">
              Fimat Groupe, notre entreprise est
              <br />
              spécialisée
              <br />
              dans la création de Site Web, Sécurité
              <br />
              Informatique et Caméra de
              <br />
              surveillance
            </p>
            <button className="mt-8 p-2 px-6 bg-[#7b0916] hover:bg-[#550813] transition-all text-white border rounded-xl ">
              Découvre nos services
            </button>
          </div>
        </div>
        <div className="sm:w-1/2 w-full pt-16 sm:pt-0">
          <img src="/images/tab.png" alt="" />
        </div>
      </div>
    </>
  );
}
