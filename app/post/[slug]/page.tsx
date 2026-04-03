import { Fragment } from 'react';
import { getPostBySlug } from '@/lib/api';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

// Helper: parse meta content từ HTML string của Rank Math
function getMetaContent(head: string, name: string): string {
    const match =
        head.match(new RegExp(`<meta[^>]*(?:name|property)=["']${name}["'][^>]*content=["']([^"']*)["']`, 'i')) ||
        head.match(new RegExp(`<meta[^>]*content=["']([^"']*)["'][^>]*(?:name|property)=["']${name}["']`, 'i'));
    return match?.[1] ?? '';
}

function getCanonical(head: string): string {
    const match = head.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
    return match?.[1] ?? '';
}

// ✅ generateMetadata — Rank Math Headless
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return {};

    const head = post.seoHead ?? '';

    const title = getMetaContent(head, 'title') || post.title.rendered;
    const description = getMetaContent(head, 'description') || '';
    const ogTitle = getMetaContent(head, 'og:title') || post.title.rendered;
    const ogDesc = getMetaContent(head, 'og:description') || '';
    const ogImage = getMetaContent(head, 'og:image') || '';
    const twTitle = getMetaContent(head, 'twitter:title') || post.title.rendered;
    const twDesc = getMetaContent(head, 'twitter:description') || '';
    const twImage = getMetaContent(head, 'twitter:image') || '';
    const canonical = getCanonical(head) || `https://gopeaks.coach/post/${slug}`;

    return {
        title,
        description,
        alternates: { canonical },
        openGraph: {
            title: ogTitle,
            description: ogDesc,
            images: ogImage ? [{ url: ogImage }] : [],
            type: 'article',
            publishedTime: post.date,
        },
        twitter: {
            card: 'summary_large_image',
            title: twTitle,
            description: twDesc,
            images: twImage ? [twImage] : [],
        },
    };
}

// ✅ Page component
export default async function PostDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return notFound();

    const categories: { id: number; name: string; slug: string }[] =
        post._embedded?.['wp:term']?.[0] ?? [];

    return (
        <article className="max-w-3xl mx-auto p-8" style={{ marginTop: '50px' }}>

            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-2 flex flex-wrap items-center gap-1">
                <Link href="/" className="hover:underline">Trang chủ</Link>
                {categories.map((cat) => (
                    <Fragment key={cat.id}>
                        <span>/</span>
                        <Link href={`/category/${cat.slug}`} className="hover:underline">
                            {cat.name}
                        </Link>
                    </Fragment>
                ))}
                <span>/</span>
                <span
                    className="text-gray-900 line-clamp-1"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
            </nav>

            {/* Date + Author */}
            <p className="text-sm text-gray-500 mb-4">
                {new Date(post.date).toLocaleDateString('vi-VN')}
                {post._embedded?.author?.[0]?.name && (
                    <> | {post._embedded.author[0].name}</>
                )}
            </p>

            {/* Categories Badge */}
            {categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={`/category/${cat.slug}`}
                            className="text-xs font-semibold uppercase tracking-wider bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition"
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>
            )}

            {/* Thumbnail */}
            {post.thumbnail && (
                <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden">
                    <img
                        src={post.thumbnail}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Title */}
            <h1
                className="text-4xl font-bold mb-6"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            {/* Content */}
            <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
        </article>
    );
}