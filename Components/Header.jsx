export default function Header() {
  return (
    <header className="px-5 py-5 shadow-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a href="./" className="text-2xl font-bold">
          Where in the World?
        </a>
        <h3 className="cursor-pointer">
          <i className="fa-regular fa-moon"></i> Dark Mode
        </h3>
      </div>
    </header>
  );
}
