import Content from "./Content"
import Actions from "./Actions"

export default function Section() {
  return (
    <div
      className="
        flex flex-col justify-center gap-10
        items-start text-left
        md:items-center md:text-center
        min-h-[calc(100vh-80px)]
      "
    >
      <Content />
      <Actions />
    </div>
  )
}