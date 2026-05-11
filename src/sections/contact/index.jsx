import Container from "./layout/Container";
import Content from "./components/Content";
import Reveal from "../../components/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[100svh] items-center bg-[#262626]"
    >
      <Container>
        <Reveal y={30}>
          <Content />
        </Reveal>
      </Container>
    </section>
  );
}