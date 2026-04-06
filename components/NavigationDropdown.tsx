"use client";

import { useState, useRef, useEffect } from "react";

interface NavItem {
    id: string;
    label: string;
    sublabel: string;
    href: string;
    isActive?: boolean;
    badge?: string;
    isExternal?: boolean;
}

const navItems: NavItem[] = [
    {
        id: "gopeaks",
        label: "Gopeaks",
        sublabel: "Trang chính",
        href: "/",
        isExternal: true,
    },
    {
        id: "training-camp",
        label: "Training Camp",
        sublabel: "Camp & race-cation",
        href: "/training-camp",
        isActive: true,
        badge: "Đang xem",
    },
    {
        id: "gopeaks-bike",
        label: "Gopeaks Bike",
        sublabel: "Cộng đồng đạp xe",
        href: "/bike",
        isExternal: true,
    },
    {
        id: "gopeaks-coach",
        label: "Gopeaks Coach",
        sublabel: "Huấn luyện 1-1",
        href: "/coach",
        isExternal: true,
    },
    {
        id: "trikids",
        label: "TriKids",
        sublabel: "Triathlon thiếu nhi",
        href: "/trikids",
        isExternal: true,
    },
];

function ExternalLinkIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400 flex-shrink-0"
        >
            <path
                d="M2.333 2.333h9.334M11.667 2.333v9.334M2.333 11.667l9.334-9.334"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
            <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function NavigationDropdown() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block" ref={ref}>
            {/* Trigger */}
            <button
                onClick={() => setOpen((v) => !v)}
                className="text-[10px] flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold tracking-wide transition-colors duration-150 border border-white/20 backdrop-blur-sm"
            >
                TRAINING CAMP
                <ChevronIcon open={open} />
            </button>

            {/* Dropdown Panel */}
            {open && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 animate-fade-in">
                    {/* Header */}
                    <div className="px-5 pt-5 pb-2">
                        <span className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase">
                            Hệ thống Gopeaks
                        </span>
                    </div>

                    {/* Items */}
                    <ul className="pb-3">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    target={item.isExternal ? "_blank" : undefined}
                                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                                    className={`flex items-center justify-between px-5 py-3 transition-colors duration-100 group ${item.isActive
                                        ? "bg-gray-50"
                                        : "hover:bg-gray-50"
                                        }`}
                                >
                                    <div>
                                        <p
                                            className={`text-[14px] font-semibold leading-snug ${item.isActive ? "text-blue-600" : "text-gray-900"
                                                }`}
                                        >
                                            {item.label}
                                        </p>
                                        <p className="text-[12px] text-gray-400 mt-0.5">
                                            {item.sublabel}
                                        </p>
                                    </div>

                                    {item.badge ? (
                                        <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-semibold whitespace-nowrap">
                                            {item.badge}
                                        </span>
                                    ) : (
                                        <ExternalLinkIcon />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.15s ease-out forwards;
        }
      `}</style>
        </div>
    );
}