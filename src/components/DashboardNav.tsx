"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/dashboard/projects", label: "Projects" },
  { href: "/dashboard/upgrade", label: "Upgrade" },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Dashboard navigation">
      <ul className="flex items-center gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-white/20 text-white shadow-md"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
