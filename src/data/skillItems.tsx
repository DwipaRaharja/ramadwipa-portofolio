const skills = [
  "Vibe Coding",
  "UI / UX",
  "Web Designer",
  "Front End Developer",
  "Back End Developer",
  "Focused Problem Solving",
];

const SkillItems = ({ hidden = false }: { hidden?: boolean }) => (
  <div aria-hidden={hidden} className="flex shrink-0 items-center">
    {skills.map((skill) => (
      <div
        key={skill}
        className="flex shrink-0 items-center gap-5 pr-5 lg:gap-10 lg:pr-10"
      >
        <p className="text-xl font-bold whitespace-nowrap text-white">
          {skill}
        </p>

        <div className="size-3 shrink-0 rounded-full border-2 border-[#C7C7C7] bg-[linear-gradient(180deg,#F0F4FE_30%,#3C63C5_100%)] lg:size-7" />
      </div>
    ))}
  </div>
);

export default SkillItems;