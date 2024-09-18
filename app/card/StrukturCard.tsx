import React from "react";
import Image, { StaticImageData } from "next/image";

interface StrukturCardProps {
  position: string;
  name: string;
  photo: string | StaticImageData;
  isDosen: boolean;
}

const StrukturCard: React.FC<StrukturCardProps> = ({
  position,
  name,
  photo,
  isDosen,
}) => {
  const getBackgroundColor = () => {
    if (isDosen) {
      return "bg-pink-200";
    }
    switch (position.toLowerCase()) {
      case "ketua":
      case "wakil ketua":
        return "bg-orange-200";
      case "sekretaris":
      case "bendahara":
        return "bg-yellow-200";
      case "ketua divisi":
        return "bg-green-200";
      default:
        return "bg-blue-200";
    }
  };

  return (
    <div className="border border-black rounded-lg text-center min-w-40 max-w-52 items-center shadow-xl">
      <div
        className={`${getBackgroundColor()} py-2  px-2 border-b border-black rounded-t-lg`}
      >
        <h3 className="font-bold">{position}</h3>
      </div>

      <div className="px-4 py-4 items-center text-center justify-between">
        <Image
          src={photo}
          alt={name}
          width={128}
          height={128}
          className="mx-auto mb-2 object-cover"
        />
        <p className="font-medium text-wrap">{name}</p>
      </div>
    </div>
  );
};

export default StrukturCard;
