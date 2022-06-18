import SectionHeader from "./SectionHeader";

const WorkExperience = () => {
  return (
    <section>
      <SectionHeader title="Work Experience" />
      <div className="mt-8 grid grid-cols-[30%_70%]">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">IBM</div>
          <div className="text-zinc-300">2021 - Present</div>
        </div>
        <div>
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <h4 className="text-xl font-bold">Package Consultant</h4>
              <div className="italic text-zinc-300">2022 - Present</div>
            </div>
            <div className="flex items-baseline gap-4">
              <h4 className="text-xl font-bold">Associate Developer</h4>
              <div className="italic text-zinc-300">2021 - 2022</div>
            </div>
          </div>
          <p className="mt-4 text-lg">
            <ul className="list-disc space-y-2">
              <li>
                Recognized for top performance through promotion and selection
                for high-priority tasks.
              </li>
              <li>
                Optimized system architecture to easily handle 20 million
                requests per day.
              </li>
              <li>
                Added various new functionalities to multiple microservices.
              </li>
              <li>
                Worked on AI-powered chat bot used by 5000+ employees daily.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
