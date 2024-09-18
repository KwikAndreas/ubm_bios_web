const Struktur: React.FC = () => {
  const dosenPembina = [
    { img: "dosen1.jpg", name: "Agustinus Fritz Wijaya, S.Kom, M.Cs" },
    { img: "dosen2.jpg", name: "Dr. Fransiskus Adikara, S.Kom, M.M" },
    { img: "dosen3.jpg", name: "Jusia Amanda Ginting S.Kom, M.M" },
    { img: "dosen4.jpg", name: "Teady Matius Surya Mulyana, S.Kom, M.Kom" },
  ];

  const ketuaDivisi = [
    { img: "ketua_divisi1.jpg", name: "NICI ANDREAS" },
    { img: "ketua_divisi2.jpg", name: "Nama Ketua Divisi PnD" },
    { img: "ketua_divisi3.jpg", name: "Christopher Haris" },
  ];

  const anggotaHumas = [
    { img: "anggota_divisi1_1.jpg", name: "Nama Anggota Divisi Humas 1" },
    { img: "anggota_divisi1_2.jpg", name: "Nama Anggota Divisi Humas 2" },
    { img: "anggota_divisi1_3.jpg", name: "Nama Anggota Divisi Humas 3" },
    { img: "anggota_divisi1_4.jpg", name: "Nama Anggota Divisi Humas 4" },
    { img: "anggota_divisi1_5.jpg", name: "Nama Anggota Divisi Humas 5" },
  ];

  const anggotaPND = [
    { img: "anggota_divisi1_1.jpg", name: "Nama Anggota Divisi PND 1" },
    { img: "anggota_divisi1_2.jpg", name: "Nama Anggota Divisi PND 2" },
    { img: "anggota_divisi1_3.jpg", name: "Nama Anggota Divisi PND 3" },
    { img: "anggota_divisi1_4.jpg", name: "Nama Anggota Divisi PND 4" },
    { img: "anggota_divisi1_5.jpg", name: "Nama Anggota Divisi PND 5" },
  ];

  const anggotaDNP = [
    { img: "anggota_dnp1.jpg", name: "Kwik Andreas Jonathan" },
    { img: "anggota_dnp2.jpg", name: "Steven Sebastian" },
    { img: "anggota_dnp3.jpg", name: "Raffael Bernard Wijaya" },
    { img: "anggota_dnp4.jpg", name: "Alvyn Vinardy Salim" },
    { img: "anggota_dnp5.jpg", name: "Joshua Immanuel Nicholas" },
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
                <img
                  src={`/images/${dosen.img}`}
                  alt={`Dosen Pembina ${index + 1}`}
                  className="w-56 h-56 object-cover mb-4"
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
              <img
                src="/images/ketua.jpg"
                alt="Ketua"
                className="w-56 h-56 object-cover mb-4"
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
              <img
                src="/images/sekretaris.jpg"
                alt="Sekretaris"
                className="w-56 h-56 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">Jonathan</h3>
              <p className="text-sm text-gray-500">Sekretaris</p>
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
              <img
                src="/images/bendahara.jpg"
                alt="Bendahara"
                className="w-56 h-56 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">
                Pheremya Margaretha
              </h3>
              <p className="text-sm text-gray-500">Bendahara</p>
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
                <img
                  src={`/images/${divisi.img}`}
                  alt={`Ketua Divisi ${divisiIndex + 1}`}
                  className="w-56 h-56 object-cover mb-4"
                />
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
                    <img
                      src={`/images/${anggota.img}`}
                      alt={`Anggota Divisi ${divisiIndex + 1} ${index + 1}`}
                      className="w-56 h-56 object-cover mb-4"
                    />
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
