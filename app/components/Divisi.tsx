import React from "react";
import Image from "next/image";

const Divisi: React.FC = () => {
  return (
    <section id="divisi" className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-primary text-center mb-8">
        Divisi
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-md rounded-md text-center">
          <Image
            src={"/public/static/bios.png"}
            width={64}
            height={64}
            alt="Humas"
            className="object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold text-secondary mb-4">Humas</h2>
          <p>Menghubungkan organisasi dengan pihak eksternal...</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-md text-center">
          <Image
            src={"/public/static/bios.png"}
            width={64}
            height={64}
            alt="Publikasi"
            className="object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Publikasi & Dokumentasi
          </h2>
          <p>
            Bertanggung jawab atas semua publikasi dan dokumentasi kegiatan...
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-md text-center">
          <Image
            src={"/public/static/bios.png"}
            width={64}
            height={64}
            alt="Development"
            className="object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Development & Project
          </h2>
          <p>Mengembangkan aplikasi dan sistem internal organisasi...</p>
        </div>
      </div>
    </section>
  );
};

export default Divisi;
