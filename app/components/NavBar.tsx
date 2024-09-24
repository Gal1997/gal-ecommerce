import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <Image
        src="/images/logo.png"
        alt="logo"
        width={70}
        height={70}
        className="bg-transparent"
      />
    </div>
  );
};

export default NavBar;
