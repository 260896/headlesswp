import { getCategoryBySlug, getPostsByCategory } from '@/lib/api';
import { notFound } from 'next/navigation';
import Link from 'next/link';

function proxyImage(url: string | undefined): string | null {
    if (!url) return null;
    return `/api/image?url=${encodeURIComponent(url)}`;
}

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // 1. Tìm category theo slug
    const category = await getCategoryBySlug(slug);
    if (!category) return notFound();

    // 2. Lấy bài viết thuộc category đó
    const posts = await getPostsByCategory(category.id);

    return (
        <div className="max-w-5xl mx-auto px-4 py-10" style={{ marginTop: '50px' }}>

            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
                <Link href="/" className="hover:underline">Trang chủ</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">{category.name}</span>
            </nav>

            {/* Header */}
            <div className="mb-10">
                <h1 className="text-4xl font-black tracking-tight mb-2">
                    {category.name}
                </h1>
                {category.description && (
                    <p className="text-gray-500 text-base">{category.description}</p>
                )}
                <p className="text-sm text-gray-400 mt-1">
                    {category.count} bài viết
                </p>
            </div>

            {/* Posts Grid */}
            {posts.length === 0 ? (
                <p className="text-gray-500">Chưa có bài viết nào trong chuyên mục này.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post: any) => {
                        const rawImage =
                            post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                        const thumbnail = proxyImage(rawImage);
                        const author = post._embedded?.author?.[0]?.name;
                        const authorName = author?.name || author?.slug || '';

                        return (
                            <Link
                                key={post.id}
                                href={`/post/${post.slug}`}
                                className="group flex flex-col border rounded-xl overflow-hidden hover:shadow-lg transition"
                            >
                                {/* Thumbnail */}
                                {thumbnail ? (
                                    <div className="overflow-hidden">
                                        <img
                                            src={thumbnail}
                                            alt={post.title.rendered}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                                        <span className="text-gray-400 text-sm">Không có ảnh</span>
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-4 flex flex-col flex-1">
                                    <h2
                                        className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors"
                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                    />
                                    <div
                                        className="text-gray-500 text-sm line-clamp-3 flex-1"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                    />

                                    {/* Meta */}
                                    <div className="mt-4 pt-3 border-t flex items-center justify-between text-xs text-gray-400">
                                        <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                                        {authorName && <span>{authorName}</span>}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}