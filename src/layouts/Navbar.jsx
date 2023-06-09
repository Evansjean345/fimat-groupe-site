import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between w-full bg-white">
        <div className="w-1/2 py-6 md:pl-44">
          <img src="/logo/logo.png" alt="" className="md:h-28 h-24" />
        </div>
        <div className="w-1/2 flex justify-end md:pr-44 py-14">
          <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer">
            <img src="/logo/menu.png" alt="" className="md:h-20 h-16" />
          </label>
        </div>
      </div>
      {/* My drawer */}
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side bg-[#69030c51]">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul
            className="menu w-full sm:w-80 h-[100vh] bg-white text-base-content"
            id="menu-side-fimat"
          >
            {/* Sidebar content here */}
            <li className="flex justify-end items-end">
              <label htmlFor="my-drawer-4" className="drawer-button">
                <img src="/logo/croix.svg" alt="" className="h-20" />
              </label>
            </li>
            <li className="md:px-12 py-6 px-6 flex items-center justify-center  border-b-2 border-[#7b0916]">
              <img
                src="/logo/logo.png"
                alt=""
                className="sm:h-28 w-3/4 sm:w-full"
                id="logo-fimat"
              />
            </li>
            <li className="pt-2 sm:pl-2 text-lg font-semibold">
              <Link className="all-text hover:border border border-black">
                Accueil
              </Link>
            </li>
            <li className="all-text py-1  sm:pl-2  text-lg font-semibold">
              <Link className="hover:border border-black">
                Site web sur-mesure création
              </Link>
            </li>
            <li className="all-text py-1  sm:pl-2  text-lg font-semibold">
              <Link className="hover:border border-black">
                Location de site web
              </Link>
            </li>
            <li className="all-text py-1  sm:pl-2  text-lg font-semibold">
              <Link className="hover:border border-black">
                Sécurité informatique
              </Link>
            </li>
            <li className="all-text py-1  sm:pl-2  text-lg font-semibold">
              <Link className="hover:border border-black">
                Systèmes de surveillance
              </Link>
            </li>
            <li className="all-text py-1  sm:pl-2  text-lg font-semibold">
              <Link className="hover:border border-black">Infogérance</Link>
            </li>
            <li className="all-text py-1  sm:pl-2  text-lg font-semibold">
              <Link className="hover:border border-black">Contact</Link>
            </li>
            <ul className="px-6 py-2 flex items-center justify-center    sm:pl-2">
              <li>
                <img src="/logo/instagram.svg" alt="" className="h-12" />
              </li>
              <li>
                <img src="/logo/facebook.svg" alt="" className="h-12" />
              </li>
              <li>
                <img src="/logo/tiktok.svg" alt="" className="h-12" />
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}
