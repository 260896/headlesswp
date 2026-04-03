"use client";

import Link from "next/link";
import { useState } from "react";

type Category = {
    id: number;
    name: string;
    slug: string;
    count: number;
};

type Post = {
    id: number;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    categories: number[];
    date: string;
    _embedded?: any;
};

export default function CategoryTabsSection({
    posts,
    categories,
}: {
    posts: Post[];
    categories: Category[];
}) {
    const [activeTab, setActiveTab] = useState<number | "all">("all");

    const filteredPosts =
        activeTab === "all"
            ? posts
            : posts.filter((p) => p.categories.includes(activeTab as number));

    return (
        <section className="mt-16">
            {/* Section heading */}
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-black tracking-tight">Bài viết nổi bật</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
            </div>

            {/* Tab bar */}
            <div className="relative mb-8">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {/* Tab "Tất cả" */}
                    <button
                        onClick={() => setActiveTab("all")}
                        className={`
              flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
              ${activeTab === "all"
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }
            `}
                    >
                        Tất cả
                        <span
                            className={`ml-1.5 text-xs ${activeTab === "all" ? "text-blue-200" : "text-gray-400"
                                }`}
                        >
                            {posts.length}
                        </span>
                    </button>

                    {/* Tab từng chuyên mục */}
                    {categories.map((cat) => {
                        const count = posts.filter((p) =>
                            p.categories.includes(cat.id)
                        ).length;
                        if (count === 0) return null;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`
                  flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                  ${activeTab === cat.id
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }
                `}
                            >
                                {cat.name}
                                <span
                                    className={`ml-1.5 text-xs ${activeTab === cat.id ? "text-blue-200" : "text-gray-400"
                                        }`}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
            </div>

            {/* Posts grid */}
            {filteredPosts.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                    <p className="text-lg font-medium">Không có bài viết nào.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => {
                        const image =
                            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                        const authorObj = post._embedded?.author?.[0];
                        // WP REST API: "name" = Display Name (hiển thị trong WP > Users > Name)
                        // "slug" = username — tránh hiển thị slug
                        const authorName = authorObj?.name ?? "GoPeaks";
                        const authorAvatar = authorObj?.avatar_urls?.["48"];
                        // Lấy category hiển thị đầu tiên (đã loại excluded ở page)
                        const catId = post.categories?.find((id) =>
                            categories.some((c) => c.id === id)
                        );
                        const catName = categories.find((c) => c.id === catId)?.name;
                        const dateFormatted = new Date(post.date).toLocaleDateString(
                            "vi-VN",
                            { day: "2-digit", month: "2-digit", year: "numeric" }
                        );

                        return (
                            <Link
                                key={post.id}
                                href={`/post/${post.slug}`}
                                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 bg-white"
                            >
                                {/* Thumbnail */}
                                <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={post.title.rendered}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                                            <span className="text-blue-300 text-4xl">🏔️</span>
                                        </div>
                                    )}
                                    {catName && (
                                        <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                                            {catName}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 p-5">
                                    <h3
                                        className="font-bold text-base leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2"
                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                    />
                                    <div
                                        className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                    />

                                    {/* Footer */}
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                        <div className="flex items-center gap-2">
                                            {authorAvatar ? (
                                                <img
                                                    src={authorAvatar}
                                                    alt={authorName}
                                                    className="w-7 h-7 rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">
                                                    {authorName[0]}
                                                </div>
                                            )}
                                            <span className="text-xs text-gray-500 font-medium">
                                                {authorName}
                                            </span>
                                        </div>
                                        <span className="text-xs text-gray-400">{dateFormatted}</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </section>
    );
}