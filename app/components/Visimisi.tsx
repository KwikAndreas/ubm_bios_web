const VisiMisi: React.FC = () => {
  return (
    <section
      id="visimisi"
      className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-primary mb-8">Visi & Misi</h2>
      <div className="grid grid-rows-1 md:grid-row-2 gap-8">
        <div className="bg-white p-8 shadow-md rounded-md h-40">
          <h3 className="text-2xl font-semibold text-secondary">Visi</h3>
          <p>
            Menjadikan BIOS sebagai wadah yang memfasilitasi pengembangan
            keterampilan teknis, inovasi, dan kolaborasi bagi mahasiswa/i
            program studi Informatika, guna menciptakan lulusan yang unggul,
            berdaya saing, dan mampu berkontribusi dalam menghadapi tantangan
            kemajuan teknologi global.
          </p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-md">
          <h3 className="text-2xl font-semibold text-secondary">Misi</h3>
          <ul className="list-disc pl-4 text-lg">
            <li>
              Menyelenggarakan kegiatan yang mampu meningkatkan wawasan,
              keterampilan, dan potensi mahasiswa/i di bidang Informatika.
            </li>
            <li>
              Mengadakan kompetisi, acara teknologi, dan kunjungan industri
              untuk memberikan pengalaman langsung di dunia kerja.
            </li>
            <li>
              Menyediakan platform kolaborasi dan klub pemrograman untuk
              mendukung keterlibatan dan pengembangan keterampilan mahasiswa.
            </li>
            <li>
              Melaksanakan program pengabdian masyarakat berbasis
              teknologi informasi.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
