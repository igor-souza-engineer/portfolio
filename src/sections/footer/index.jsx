import Container from "./layout/Container";
import Brand from "./components/Brand";
import Social from "./components/Social";
import Copyright from "./components/Copyright";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B]">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <Brand />
          <Social />
        </div>

        <div className="mt-8">
          <Copyright />
        </div>
      </Container>
    </footer>
  );
}