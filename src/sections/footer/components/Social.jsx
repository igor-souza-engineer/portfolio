function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7 fill-current"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.02-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.96c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7 fill-current"
    >
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.35 8h4.3v13.5H.35V8Zm7.15 0h4.13v1.84h.06c.58-1.1 1.98-2.26 4.07-2.26 4.35 0 5.15 2.86 5.15 6.58v7.34h-4.3v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.68-2.49 3.43v6.61h-4.3V8Z" />
    </svg>
  );
}

function MediumIcon() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-[4px] bg-[#FFFFFF] text-[12px] font-bold text-[#0B0B0B]">
      M
    </span>
  );
}

export default function Social() {
  return (
    <div className="flex flex-col items-start">
      <p className="text-[17px] leading-[22px] font-normal text-[#FFFFFF]">
        Find me at
      </p>

      <div className="mt-4 flex items-center gap-4">
        <a
          href="https://github.com/igor-souza-engineer"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-[#FFFFFF] transition hover:text-[#9CA3AF]"
        >
          <GithubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/codebyigor/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-[#FFFFFF] transition hover:text-[#9CA3AF]"
        >
          <LinkedinIcon />
        </a>

        <a
          href="http://medium.com/@codebyigor"
          target="_blank"
          rel="noreferrer"
          aria-label="Medium"
          className="transition hover:opacity-70"
        >
          <MediumIcon />
        </a>
      </div>
    </div>
  );
}