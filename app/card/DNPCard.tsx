import React from "react";
import Image from "next/image";

import Dnp1 from "../public/divisi/dnp/dnp1.jpg";
import Dnp2 from "../public/divisi/dnp/dnp2.jpg";
import Dnp3 from "../public/divisi/dnp/dnp3.jpg";

const CardDNP = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      <Image src={Dnp1} alt="DNP 1" width={164} height={164} />
      <Image src={Dnp2} alt="DNP 2" width={164} height={164} />
      <Image src={Dnp3} alt="DNP 3" width={164} height={164} />
    </div>
  );
};

export default CardDNP;
