import SectionHeader from "./SectionHeader";

const Internships = () => {
  return (
    <section>
      <SectionHeader title="Internships" />
      <div className="mt-8 grid grid-cols-[30%_70%]">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">Indshine</div>
          <div className="text-zinc-300">Dec 2019</div>
        </div>
        <div>
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <h4 className="text-xl font-bold">Software Developer</h4>
            </div>
          </div>
          <p className="mt-4 text-lg">
            <ul className="list-inside list-disc space-y-2">
              <li>
                Enhanced preferences to improve user experience of existing
                application.
              </li>
              <li>
                Redesigned static pages to have consistent UI across the
                website.
              </li>
              <li>
                Setup Content Management System with Gitlab for the official
                blogs.
              </li>
            </ul>

            <p className="mt-6">
              <strong>Technologies used - </strong>ReactJS, Ant Design, Django,
              Bootstrap, JQuery
            </p>
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-[30%_70%]">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">IAugmentor Labs</div>
          <div className="text-zinc-300">Jun - Sep 2019</div>
        </div>
        <div>
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <h4 className="text-xl font-bold">Web Developer</h4>
            </div>
          </div>
          <p className="mt-4 text-lg">
            <ul className="list-inside list-disc space-y-2">
              <li>
                Developed complete frontend for CMS panel used by the
                organization.
              </li>
              <li>Redesigned official website using the mockups provided.</li>
              <li>Fixed 100+ bugs in existing codebase.</li>
            </ul>

            <p className="mt-6">
              <strong>Technologies used - </strong>ReactJS, Ant Design, Django,
              Bootstrap, JQuery
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Internships;
