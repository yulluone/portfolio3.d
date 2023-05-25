import { navLinks } from "@/constants";

const NavLinksComponent = ({ navClicked, active }) => {
  return (
    <ul className="list-none hidden sm:flex flex-row gap-10">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active == link.title ? "text-white" : "text-secondary"
          } hover:text-white text-[18px] font-medium cursor-pointer `}
          onClick={() => navClicked(link.title)}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinksComponent;
