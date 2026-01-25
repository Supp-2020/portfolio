import Link from "next/link";

export default function Header() {

  const rightNavItems = [
    { label: "Work Experience", href: "#" },
    { label: "Projects", href: "#" },
    { label: "About Me", href: "#" },
  ];

  return (
    <header className="w-full h-16 bg-stone-100">
      <nav className="w-full flex items-center justify-between py-4 px-16">
        {/* Left logo */}
        <Link href='#' className="text-2xl font-bold text-slate-800">Supreet.js</Link>

        {/* Right navigation */}
        <div className="flex items-center gap-8">
          {rightNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
