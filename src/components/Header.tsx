import Socials from "./Socials";

const Header = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h1 className="text-4xl font-extrabold uppercase tracking-tight">
          Prateek Soni
        </h1>
        <p className="mt-2 text-xl font-light">Software Developer</p>
      </div>
      <div className="flex items-center justify-end">
        <Socials />
      </div>
    </div>
  );
};

export default Header;
