export default function Actions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href="#projects"
        className="h-11 px-6 inline-flex items-center justify-center rounded-md bg-blue-600 text-sm font-medium text-white transition hover:bg-blue-500"
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="h-11 px-6 inline-flex items-center justify-center rounded-md border border-neutral-700 text-sm font-medium text-white transition hover:border-neutral-500 hover:bg-white/5"
      >
        Get in touch
      </a>
    </div>
  );
}