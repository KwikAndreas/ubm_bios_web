"use client";

const Navbar = () => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const yOffset = -70;
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="backdrop-filter:blur(10px) bg-gray-100 dark:bg-gray-900 p-4 fixed w-full z-10 shadow transition duration-500">
      <div className="container mx-auto flex justify-end items-center">
        <div className="flex items-center space-x-4">
          <a
            href="#Profile"
            onClick={(e) => handleLinkClick(e, "#profile")}
            className="text-white hover:text-orange-300 transition-colors duration-300 font-semibold"
          >
            Profile
          </a>
          <a
            href="#visimisi"
            onClick={(e) => handleLinkClick(e, "#visimisi")}
            className="text-white hover:text-orange-300 transition-colors duration-300 font-semibold"
          >
            Visi Misi
          </a>
          <a
            href="#struktur"
            onClick={(e) => handleLinkClick(e, "#struktur")}
            className="text-white  hover:text-orange-300 transition-colors duration-300 font-semibold"
          >
            Struktur
          </a>
          <a
            href="#divisi"
            onClick={(e) => handleLinkClick(e, "#divisi")}
            className="text-white  hover:text-orange-300 transition-colors duration-300 font-semibold"
          >
            Divisi
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
