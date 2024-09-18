import React from "react";
import Image from "next/image";

const CardAcara = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      <Image src="/divisi/acara/acara1.jpg" alt="Acara 2" width={164} height={164} />
      <Image src="/divisi/acara/acara2.jpg" alt="Acara 2" width={164} height={164} />
      <Image src="/divisi/acara/acara3.jpg" alt="Acara 3" width={164} height={164} />
    </div>
  );
};

export default CardAcara;
