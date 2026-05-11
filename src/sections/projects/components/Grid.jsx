import Card from "./Card";
import { projects } from "../data";

export default function Grid() {
  return (
    <div className="relative w-full max-w-[860px]">
      {/* Main projects panel */}
      <div className="relative z-10 rounded-[16px] bg-[#262626] p-4 md:p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              stack={project.stack}
              liveUrl={project.liveUrl}
              sourceUrl={project.sourceUrl}
            />
          ))}
        </div>
      </div>

      {/* Bottom fade extension */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-14 z-0 h-20 rounded-b-[24px] bg-gradient-to-b from-[#262626] via-[#262626]/75 to-transparent blur-sm md:-bottom-24 md:h-28" />
    </div>
  );
}