type SectionHeaderProps = {
  title: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  return (
    <>
      <div className="mt-16 flex items-center gap-8">
        <h2 className="text-3xl font-bold uppercase">{props.title}</h2>
        <div className="flex-1 border border-zinc-800"></div>
      </div>
      <hr className="mt-1 w-16 border-2" />
    </>
  );
};

export default SectionHeader;
