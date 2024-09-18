import React from "react";
import Image from "next/image";

import acara1 from "../public/divisi/acara/acara1.jpg";
import acara2 from "../public/divisi/acara/acara2.jpg";
import acara3 from "../public/divisi/acara/acara3.jpg";

const CardAcara = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      <Image src={acara1} alt="Acara 2" width={164} height={164} />
      <Image src={acara2} alt="Acara 2" width={164} height={164} />
      <Image src={acara3} alt="Acara 3" width={164} height={164} />
    </div>
  );
};

export default CardAcara;
