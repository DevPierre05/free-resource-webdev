export default function Footer () {
  const year = new Date().getFullYear();
  return (
    <footer className="absolute bottom-0 w-full pt-10 text-center">
      <p className="text-slate-400 dark:text-slate-600 hover:text-light-primary hover:dark:text-dark-primary">
        © <span>{year}</span> - Designed & Built by{" "}
        <a
          href="https://github.com/DevPierre05"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Peter Osei
        </a>
      </p>
    </footer>
  );
}