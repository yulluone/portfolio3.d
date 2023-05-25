import Image from "next/image";
import Link from "next/link";
import { logo } from "@/public/assets";
import { myDetails } from "@/constants";

const LogoAndName = ({ navClicked }) => {
  return (
    <Link
      className="flex items-center gap-2"
      href="/"
      onClick={() => navClicked("")}
    >
      <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
      <p className="text-white text-[18px] font-bold cursor-pointer flex">
        {myDetails.name} &nbsp;
        <span className="sm:block hidden">| {myDetails.company}</span>
      </p>
    </Link>
  );
};

export default LogoAndName;
