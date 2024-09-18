"use client";
import React from "react";
import CardDNP from "../card/DNPCard";
import CardPND from "../card/PNDCard";
import CardAcara from "../card/AcaraCard";

const Divisi = () => {
  return (
    <section id="divisi" className="min-h-screen p-4 transition duration-500">
      <div className="w-full mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Divisi</h2>

        <div className="space-y-8 pt-4">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 h-48">
            <div className="flex overflow-x-auto space-x-4 w-full md:w-1/2 scrollbar-hide">
              <CardAcara />
            </div>

            <div className="text-left md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">Humas</h3>
              <p className="text-gray-700">
                Deskripsi
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 h-48">
            <div className="flex overflow-x-auto space-x-4 w-full md:w-1/2 scrollbar-hide">
              <CardPND />
            </div>

            <div className="text-left md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">
                Publikasi dan Dokumentasi
              </h3>
              <p className="text-gray-700">
                Deskripsi
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 h-48">
            <div className="flex overflow-x-auto space-x-4 w-full md:w-1/2 scrollbar-hide">
              <CardDNP/>
            </div>
            <div className="text-left md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">
                Development and Project
              </h3>
              <p className="text-gray-700">
                Deskripsi 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divisi;
