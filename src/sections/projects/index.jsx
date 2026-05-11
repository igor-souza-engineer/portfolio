import Container from "./layout/Container";
import Grid from "./components/Grid";
import Reveal from "../../components/Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[linear-gradient(to_bottom,#0B0B0B_0%,#0B0B0B_55%,#262626_100%)]"
    >
      <Container>
        <div className="mx-auto flex w-full max-w-[860px] flex-col gap-8">
          <Reveal y={18}>
            <span className="text-[22px] leading-[26px] md:text-[25px] md:leading-[30px] font-medium text-[#9CA3AF]">
              Projects
            </span>
          </Reveal>

          <Reveal delay={0.12} y={28}>
            <Grid />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}