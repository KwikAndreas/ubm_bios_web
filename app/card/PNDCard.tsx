import React from "react";
import Image from "next/image";

import pnd1 from "../public/divisi/pnd/pnd1.jpg";
import pnd2 from "../public/divisi/pnd/pnd2.jpg";
import pnd3 from "../public/divisi/pnd/pnd3.jpg";

const CardPND = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      <Image src={pnd1} alt="PND" width={164} height={164} className="border-r-2 border-solid rgb(138, 138, 128);"/>
      <Image src={pnd2} alt="PND" width={164} height={164} />
      <Image src={pnd3} alt="PND" width={164} height={164} />
    </div>
  );
};
export default CardPND;
