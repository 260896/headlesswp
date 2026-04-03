"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();

    const menu = [
        { name: "Kiến thức", href: "/blog" },
        { name: "Huấn luyện viên", href: "/coaches" },
        { name: "Dịch vụ", href: "/services", hasSub: true },
        { name: "Chương trình", href: "/programs", hasSub: true },
        { name: "Đánh giá", href: "/reviews" },
        { name: "Liên hệ", href: "/contact" },
    ];

    return (
        <header className="fixed w-full z-[100] flex justify-center transition-all bg-deep-black/80 backdrop-blur-md">
            <nav className="w-full max-w-7xl h-[64px] px-6 lg:px-10 flex items-center justify-between rounded-full">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                            <path d="M4 18L10 6L14 12L20 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="text-white font-black text-xl tracking-tighter">GOPEAKS</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {menu.map((item) => {
                        // 🔥 Active logic (support sub route)
                        const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wider transition-all
                                ${isActive
                                        ? "text-white"
                                        : "text-white/60 hover:text-white"
                                    }`}
                            >
                                {item.name}

                                {item.hasSub && (
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform ${isActive ? "rotate-180 opacity-100" : "opacity-60"
                                            }`}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Action */}
                <div className="flex items-center">
                    <Link href="/register" className="pill-button-white px-6 py-2.5 text-[13px]">
                        Bắt đầu
                    </Link>
                </div>
            </nav>
        </header>
    );
}