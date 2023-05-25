import Image from "next/image";
import { navLinks } from "@/constants";
import { menu, close } from "@/public/assets";

const MobileMenu = ({ toggle, active, navClicked, menuToggled }) => {
  return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <Image
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain cursor-pointer "
        onClick={() => menuToggled()}
      />
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 black-gradient absolute top-20 right-0 mx-0 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className="list-none flex justify-end items-start flex-col gap-4 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active == link.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-poiner text-[16px] `}
              onClick={() => {
                navClicked(link.title);
                menuToggled();
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
