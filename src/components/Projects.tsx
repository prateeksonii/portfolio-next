import SectionHeader from "./SectionHeader";

const Projects = () => {
  return (
    <section>
      <SectionHeader title="Projects" />
      <div className="mt-8 grid grid-cols-[30%_70%]">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">Linkdexing</div>
        </div>
        <div>
          <p className="text-lg">
            <div className="mb-2">
              A web application where you can submit links for indexing
            </div>
            <ul className="list-inside list-disc space-y-2">
              <li>
                Designed, developed and deployed whole system for Linkdexing.com
                as a freelance project.
              </li>
              <li>Created Client-facing UI to submit and monitor links.</li>
              <li>
                Developed REST API for client and admin application with
                role-based authorization.
              </li>
              <li>
                Added admin panel to manage users and view submitted links.
              </li>
            </ul>
            <p className="mt-6">
              <strong>Technologies used - </strong>ReactJS, NodeJS, MongoDB,
              SendInBlue, Namecheap
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
