import React from "react";
import Image from "next/image";

const CardDNP = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      <Image src="/divisi/dnp/dnp1.jpg" alt="DNP 1" width={164} height={164} />
      <Image src="/divisi/dnp/dnp2.jpg" alt="DNP 2" width={164} height={164} />
      <Image src="/divisi/dnp/dnp3.jpg" alt="DNP 3" width={164} height={164} />
    </div>
  );
};

export default CardDNP;
