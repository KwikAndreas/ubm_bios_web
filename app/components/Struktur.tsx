import React from "react";
import Image from "next/image";

const Struktur: React.FC = () => {
  const dosenPembina = [
    {
      img: "/public/static/bios.png",
      name: "Agustinus Fritz Wijaya, S.Kom, M.Cs",
    },
    {
      img: "/public/static/bios.png",
      name: "Dr. Fransiskus Adikara, S.Kom, M.M",
    },
    { img: "/public/static/bios.png", name: "Jusia Amanda Ginting S.Kom, M.M" },
    {
      img: "/public/static/bios.png",
      name: "Teady Matius Surya Mulyana, S.Kom, M.Kom",
    },
  ];

  const ketuaDivisi = [
    { img: "/public/static/bios.png", name: "NICI ANDREAS" },
    { img: "/public/static/bios.png", name: "Nama Ketua Divisi PnD" },
    { img: "/public/static/bios.png", name: "Christopher Haris" },
  ];

  const anggotaHumas = [
    { img: "/public/static/bios.png", name: "Nama Anggota Divisi Humas 1" },
    { img: "/public/static/bios.png", name: "Nama Anggota Divisi Humas 2" },
    { img: "/public/static/bios.png", name: "Nama Anggota Divisi Humas 3" },
    { img: "/public/static/bios.png", name: "Nama Anggota Divisi Humas 4" },
    { img: "/public/static/bios.png", name: "Nama Anggota Divisi Humas 5" },
  ];

  const anggotaPND = [
    { img: "/public/static/bios.png", name: "Nama Anggota Divisi PND 1" },
    { img: "/public/static/bios.png", name: "Nama Anggota Divisi PND 2" },
    { img: "/public/static/bios.png", name: "Nama Anggota Divisi PND 3" },
    { img: "/public/static/bios.png", name: "Nama Anggota Divisi PND 4" },
    { img: "/public/static/bios.png", name: "Nama Anggota Divisi PND 5" },
  ];

  const anggotaDNP = [
    { img: "/public/static/bios.png", name: "Kwik Andreas Jonathan" },
    { img: "/public/static/bios.png", name: "Steven Sebastian" },
    { img: "/public/static/bios.png", name: "Raffael Bernard Wijaya" },
    { img: "/public/static/bios.png", name: "Alvyn Vinardy Salim" },
    { img: "/public/static/bios.png", name: "Joshua Immanuel Nicholas" },
  ];

  return (
    <section id="struktur" className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-primary text-center mb-8">
        Struktur Organisasi
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex justify-center space-x-8 relative">
          {dosenPembina.map((dosen, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
                <Image
                  src={`/images/${dosen.img}`}
                  width={64}
                  height={64}
                  alt={`Dosen Pembina ${index + 1}`}
                  className="object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-primary">
                  {dosen.name}
                </h3>
                <p className="text-sm text-gray-500">Dosen Pembina</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-full flex justify-center mt-8">
          <div className="absolute top-4 w-64 h-0.5 bg-gray-400 left-1/2 transform -translate-x-1/2"></div>
        </div>

        <div className="relative w-full flex justify-center mt-8">
          <div className="absolute top-4 h-8 w-0.5 bg-gray-400 left-1/2 transform -translate-x-1/2"></div>
        </div>

        <div className="flex justify-center space-x-8 relative mt-8">
          <div className="relative">
            <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
              <Image
                src={"/public/static/bios.png"}
                width={64}
                height={64}
                alt="Ketua"
                className="object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">
                Fricilia Angelica
              </h3>
              <p className="text-sm text-gray-500">Ketua</p>
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
              <img
                src="/images/wakil_ketua.jpg"
                alt="Wakil Ketua"
                className="w-56 h-56 object-cover mb-4"
              />
              <Image
                src={"/public/static/bios.png"}
                width={64}
                height={64}
                alt="Wakil Ketua"
                className="object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">
                Vinzenne Fernando Karim
              </h3>
              <p className="text-sm text-gray-500">Wakil Ketua</p>
            </div>
          </div>
        </div>

        <div className="relative w-full flex justify-center mt-8">
          <div className="absolute top-4 w-32 h-0.5 bg-gray-400 left-1/2 transform -translate-x-1/2"></div>
        </div>

        <div className="flex justify-center space-x-8 relative mt-8">
          <div className="relative">
            <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
              <Image
                src={"/public/static/bios.png"}
                width={64}
                height={64}
                alt="Bendahara"
                className="object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">Jonathan</h3>
              <p className="text-sm text-gray-500">Sekretaris</p>
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
              <Image
                src={"/public/static/bios.png"}
                width={64}
                height={64}
                alt="Sekretaris"
                className="object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">
                Pheremya Margaretha
              </h3>
              <p className="text-sm text-gray-500">Sekretaris</p>
            </div>
          </div>
          {/* <div className="relative">
            <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
              <img
                src="/images/bendahara.jpg"
                alt="humas"
                className="w-56 h-56 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">
                Nici Andreas
              </h3>
              <p className="text-sm text-gray-500">Humas</p>
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
              <img
                src="/images/bendahara.jpg"
                alt="Perkab"
                className="w-56 h-56 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">
                Pheremya Margaretha
              </h3>
              <p className="text-sm text-gray-500">Perkab</p>
            </div>
          </div> */}
        </div>

        <div className="relative w-full flex justify-center mt-8">
          <div className="absolute top-4 w-64 h-0.5 bg-gray-400 left-1/2 transform -translate-x-1/2"></div>
        </div>

        <div className="flex justify-center space-x-8 mt-8">
          {ketuaDivisi.map((divisi, divisiIndex) => (
            <div key={divisiIndex} className="relative">
              <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
                <Image src={`/images/${divisi.img}`} width={64} height={64} alt={`Ketua Divisi ${divisiIndex + 1}`} className="object-cover mb-4"/>
                <h3 className="text-lg font-semibold text-primary">
                  {divisi.name}
                </h3>
                <p className="text-sm text-gray-500">Ketua Divisi</p>
              </div>
              <div className="absolute top-full left-1/2 h-32 w-0.5 bg-gray-400 transform -translate-x-1/2"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-8 mt-8">
          {ketuaDivisi.map((_, divisiIndex) => (
            <div key={divisiIndex} className="flex flex-col items-center">
              {anggotaPND.map((anggota, index) => (
                <div key={index} className="relative mb-4">
                  <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
                    <Image src={`/images/${anggota.img}`} width={64} height={64} alt={`Anggota Divisi ${divisiIndex + 1}`} className="object-cover mb-4"/>
                    <h3 className="text-lg font-semibold text-primary">
                      {anggota.name}
                    </h3>
                    <p className="text-sm text-gray-500">Anggota</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Struktur;
