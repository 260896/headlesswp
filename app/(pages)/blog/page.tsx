// KHÔNG có "use client" — đây là Server Component
import Link from "next/link";
import Image from "next/image";
import CategoryTabsSection from "@/components/CategoryTabsSection";
// hoặc import theo đường dẫn tương đối nếu đặt cùng thư mục:
// import CategoryTabsSection from "./CategoryTabsSection";

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

const EXCLUDED_SLUGS = ["uncategorized", "huan-luyen-vien"];

async function getPosts(): Promise<Post[]> {
    try {
        const res = await fetch(
            "https://sub.gopeaks.coach/wp-json/wp/v2/posts?_embed&per_page=50",
            {
                headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" },
                next: { revalidate: 60 },
            }
        );
        if (!res.ok) return [];
        return res.json();
    } catch {
        return [];
    }
}

async function getCategories(): Promise<Category[]> {
    try {
        const res = await fetch(
            "https://sub.gopeaks.coach/wp-json/wp/v2/categories?per_page=20&hide_empty=true",
            {
                headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" },
                next: { revalidate: 300 },
            }
        );
        if (!res.ok) return [];
        return res.json();
    } catch {
        return [];
    }
}
export default async function BlogPage() {
    const [posts, categories] = await Promise.all([getPosts(), getCategories()]);

    const filteredCategories = categories.filter(
        (c) => !EXCLUDED_SLUGS.includes(c.slug)
    );

    return (
        <div className="max-w-5xl mx-auto py-10 px-4">
            {/* Hero section */}
            <section className="relative flex items-center justify-center overflow-hidden bg-black rounded-2xl mb-10 min-h-[500px]" style={{ marginTop: '30px' }}>
                <Image
                    src="https://sub.gopeaks.coach/wp-content/uploads/2026/04/banner-headless-wp.png"
                    alt="GoPeaks Endurance Coaching"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-60 scale-105 animate-slow-zoom"
                    priority
                />
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <p className="text-primary font-bold text-sm uppercase tracking-[0.4em] mb-6 animate-fade-in-up">
                        CƠ HỘI CUỐI CÙNG
                    </p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.9] animate-fade-in-up delay-100">
                        Bắt đầu hành trình của bạn với GoPeaks
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-12 font-medium max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Huấn luyện chuyên nghiệp. Kết quả thực sự. Khám phá tiềm năng
                        endurance của bạn ngay hôm nay.
                    </p>
                </div>
            </section>

            {/* Category Tabs — Client Component nhận data từ server */}
            <CategoryTabsSection posts={posts} categories={filteredCategories} />
        </div>
    );
}