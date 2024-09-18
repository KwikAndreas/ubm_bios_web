import React from "react";
import Image from "next/image";

const CardPND = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      <Image src="/divisi/pnd/pnd1.jpg" alt="PND" width={164} height={164} />
      <Image src="/divisi/pnd/pnd2.jpg" alt="PND" width={164} height={164} />
      <Image src="/divisi/pnd/pnd3.jpg" alt="PND" width={164} height={164} />
    </div>
  );
};
export default CardPND;
