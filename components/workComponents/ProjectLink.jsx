import Image from "next/image";

const ProjectLink = ({ src, alt, link }) => {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="ml-1 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
    >
      <Image src={src} alt={alt} className="w-1/2 h-1/2 object-contain" />
    </div>
  );
};

export default ProjectLink;
