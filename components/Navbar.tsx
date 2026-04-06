"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import NavigationDropdown from "@/components/NavigationDropdown";
import { useState, useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();

    const menu = [
        { name: "Điểm đến", href: "/destinations" },
        { name: "Camp", href: "/camps" },
        { name: "Huấn luyện viên", href: "/coaches" },
        { name: "Câu chuyện", href: "/stories" },
        { name: "Lưu trú", href: "/travel" },
        { name: "FAQ", href: "/faq" },
    ];
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-[100] flex justify-center transition-all ${scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-white/10 bg-scrolled"
            : "bg-transparent bg-transparent-scrolled"
            }`}>
            <nav className="w-full max-w-7xl h-[80px] flex items-center justify-between">
                <nav className="p-4 flex items-center gap-2 col-logo">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <span className="text-white font-black text-2xl tracking-tighter">GOPEAKS</span>
                    </Link>
                    <NavigationDropdown />
                </nav>
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-3 nav-menu">
                    {menu.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-[13px] tracking-wider transition-all
                                ${isActive ? "text-white active-menu" : "text-white/80 hover:text-white"}`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Action */}
                <div className="flex items-center">
                    <Link href="/contact" className="px-8 py-3 text-[13px] text-white/80 hover:text-white">
                        Liên hệ
                    </Link>
                    <Link href="/consult" className="pill-button-blue bg-primary hover:bg-primary-hover px-8 py-3 text-[13px]">
                        Nhận tư vấn
                    </Link>
                </div>
            </nav>
        </header>
    );
}