import Link from "next/link";
import Image from 'next/image'; import { getPostBySlug } from "@/lib/api";


type Post = {
    id: number;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    _embedded?: any;
};

// 🔥 Fetch dữ liệu từ WordPress
async function getPosts(): Promise<Post[]> {
    try {
        const res = await fetch(
            "https://sub.gopeaks.coach/wp-json/wp/v2/posts?_embed&per_page=10",
            {
                headers: {
                    "User-Agent": "Mozilla/5.0",
                    Accept: "application/json",
                },
                next: { revalidate: 60 }, // ISR (cache 60s)
            }
        );

        if (!res.ok) {
            console.log("Status:", res.status);
            return [];
        }

        return res.json();
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}

// 🔥 UI page
export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="max-w-5xl mx-auto py-10 px-4">
            <section className="relative flex items-center justify-center overflow-hidden bg-black">
                <Image
                    src="/hero-bg.png"
                    alt="GoPeaks Endurance Coaching"
                    fill
                    className="object-cover opacity-60 scale-105 animate-slow-zoom"
                    priority
                />
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <p className="text-primary font-bold text-sm uppercase tracking-[0.4em] mb-6 animate-fade-in-up">CƠ HỘI CUỐI CÙNG</p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] animate-fade-in-up delay-100">
                        Bắt đầu hành trình của <br /> bạn với GoPeaks
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-12 font-medium max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Huấn luyện chuyên nghiệp. Kết quả thực sự. Khám phá tiềm năng endurance của bạn ngay hôm nay.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                        <Link href="/get-started" className="pill-button-blue text-lg px-12 py-4">
                            Khám phá ngay
                        </Link>
                    </div>
                </div>
                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
                    <div className="w-px h-12 bg-white/20"></div>
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                </div>
            </section>

            {posts.length === 0 && (
                <p className="text-gray-500">Không có bài viết nào.</p>
            )}

            <div className="grid gap-6">

                {posts.map((post) => {
                    const image =
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

                    return (
                        <Link
                            key={post.id}
                            href={`/post/${post.slug}`}
                            className="border rounded-xl p-4 hover:shadow-md transition"
                        >
                            {/* Ảnh */}
                            {image && (
                                <img
                                    src={image}
                                    alt={post.title.rendered}
                                    className="w-full h-56 object-cover rounded-lg mb-4"
                                />
                            )}

                            {/* Title */}
                            <h2
                                className="text-xl font-semibold mb-2"
                                dangerouslySetInnerHTML={{
                                    __html: post.title.rendered,
                                }}
                            />

                            {/* Excerpt */}
                            <div
                                className="text-gray-600 mb-4 line-clamp-3"
                                dangerouslySetInnerHTML={{
                                    __html: post.excerpt.rendered,
                                }}
                            />

                            {/* Link */}
                            <span className="text-blue-600 font-medium hover:underline">
                                Đọc tiếp →
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}