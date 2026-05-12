import Content from "./Content";
import Actions from "./Actions";

export default function Section() {
  return (
    <div
      className="
        flex flex-col justify-start gap-10
        items-start text-left
        pt-15
        md:min-h-[calc(100vh-80px)]
        md:justify-center md:items-center md:text-center md:pt-0
      "
    >
      <Content />
      <Actions />
    </div>
  );
}