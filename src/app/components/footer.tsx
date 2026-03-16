import Image from "next/image";

export default function Footer() {
  return (
    <div className="mb-5 row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Documentation
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Social Media
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Contact us →
      </a>
    </div>
  );
}
