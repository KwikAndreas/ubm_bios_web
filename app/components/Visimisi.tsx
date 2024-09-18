import React from "react";

const Visimisi = () => {
  return (
    <section id="visimisi" className="min-h-screen p-6 transition duration-500">
      <div className="container mx-auto text-center mt-4 select-none w-full justify-start">
        <div className="flex flex-col md:flex-row gap-4 p-4 align-top">
          <div className="flex flex-col justify-start items-center text-center w-full md:w-6/12">
            <h3 className="text-4xl select-none font-bold mb-2 text-gray-900">
              Visi
            </h3>
            <div className="w-full md:w-10/12">
              <p className="text-left">
                Menjadikan BIOS sebagai wadah yang memfasilitasi pengembangan
                keterampilan teknis, inovasi, dan kolaborasi bagi mahasiswa/i
                program studi Informatika, guna menciptakan lulusan yang unggul,
                berdaya saing, dan mampu berkontribusi dalam menghadapi
                tantangan kemajuan teknologi global.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center text-center w-full md:w-6/12">
            <h3 className="text-4xl select-none font-bold mb-2 text-gray-900">
              Misi
            </h3>
            <div className="w-full md:w-10/12">
              <p className="text-left mb-1">
                1. Menyelenggarakan kegiatan yang mampu meningkatkan wawasan,
                keterampilan, dan potensi mahasiswa/i di bidang Informatika.
              </p>
              <p className="text-left mb-1">
                2. Mengadakan kompetisi, acara teknologi, dan kunjungan industri
                untuk memberikan pengalaman langsung di dunia kerja.
              </p>
              <p className="text-left mb-1">
                3. Menyediakan platform kolaborasi dan klub pemrograman untuk
                mendukung keterlibatan dan pengembangan keterampilan mahasiswa.
              </p>
              <p className="text-left mb-1">
                4. Melaksanakan program pengabdian masyarakat berbasis
                teknologi informasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visimisi;
