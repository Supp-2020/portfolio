import Link from "next/link";

export default function Header() {
  const rightNavItems = [
    { label: "Work Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Say Hello", href: "#contact" },
  ];

  return (
    <header className="w-full h-16 bg-stone-100">
      <nav className="w-full flex items-center justify-between py-4 px-16">
        {/* Left logo */}
        <Link href="#" className="text-2xl font-bold text-slate-800">
          Supreet.js
        </Link>

        {/* Right navigation */}
        <div className="flex items-center gap-8">
          {rightNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              scroll={true}
              className={` ${item.label === "Say Hello" ? "px-3 py-2 rounded-md text-xs font-semibold bg-[#b9ff66] text-[#191a23] transition whitespace-nowrap" : "text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
