import Container from "./layout/Container";
import Content from "./components/Content";
import Photo from "./components/Photo";
import Reveal from "../../components/Reveal";

export default function About() {
  return (
    <section id="about" className="relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal y={28}>
            <Content />
          </Reveal>

          <Reveal delay={0.16} y={32}>
            <Photo />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}