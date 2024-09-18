// StrukturSection.tsx
import React from "react";
import StrukturCard from "../card/StrukturCard";

const Struktur: React.FC = () => {
  return (
    <section id="struktur" className="min-h-screen p-6 transition duration-500">
      <div className="flex flex-col items-center space-y-8">
      <div className="flex justify-center gap-8">
        <StrukturCard
          position="Dosen Pembina"
          name="Agustinus Fritz Wijaya, S.Kom, M.Cs."
          photo="/images/guru.jpg"
          isDosen={true}
        />
        <StrukturCard
          position="Dosen Pembina"
          name="Dr. Fransiskus Adikara, S.Kom, M.M"
          photo="/images/guru.jpg"
          isDosen={true}
        />

        <StrukturCard
          position="Dosen Pembina"
          name="Jusia Amanda Ginting, S.Kom, M.Kom"
          photo="/images/guru.jpg"
          isDosen={true}
        />
        <StrukturCard
          position="Dosen Pembina"
          name="Teady Matius Surya Mulyana, S.Kom, M.Kom"
          photo="/images/guru.jpg"
          isDosen={true}
        />
      </div>

      <div className="flex justify-center space-x-8">
        <StrukturCard
          position="Ketua"
          name="Fricilia Angelica"
          photo="/images/ketua.jpg"
          isDosen={false}
        />
        <StrukturCard
          position="Wakil Ketua"
          name="Vinzenne"
          photo="/images/wakil_ketua.jpg"
          isDosen={false}
        />
      </div>

      <div className="flex justify-center space-x-8">
        <StrukturCard
          position="Sekretaris"
          name="Pheremiya Margaretha"
          photo="/images/ketua.jpg"
          isDosen={false}
        />
        <StrukturCard
          position="Bendahara"
          name="Jonathan"
          photo="/images/wakil_ketua.jpg"
          isDosen={false}
        />
        <StrukturCard
          position="Publikasi"
          name="Christiano Gracia Levi"
          photo="/images/wakil_ketua.jpg"
          isDosen={false}
        />
      </div>

      <div className="grid grid-cols-4 gap-8">
        <StrukturCard
          position="Ketua Divisi Acara"
          name="Nici Andreas"
          photo="/images/ketua_divisi_a.jpg"
          isDosen={false}
        />
        <StrukturCard
          position="Ketua Divisi Publikasi & Dokumentasi"
          name="Nico Andreas"
          photo="/images/ketua_divisi_b.jpg"
          isDosen={false}
        />
        <StrukturCard
          position="Ketua Divisi Development & Project"
          name="Christopher Haris"
          photo="/images/ketua_divisi_c.jpg"
          isDosen={false}
        />
        <StrukturCard
          position="Ketua Divisi Development & Project 2"
          name="Kwik Andreas Jonathan"
          photo="/images/ketua_divisi_c.jpg"
          isDosen={false}
        />
      </div>
    </div>
    </section>
  );
};

export default Struktur;
