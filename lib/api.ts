const BASE_URL = 'https://sub.gopeaks.coach/wp-json/wp/v2';

// Helper: proxy ảnh che domain gốc
function proxyImage(url: string | null | undefined): string | null {
    if (!url) return null;
    return `/api/image?url=${encodeURIComponent(url)}`;
}

// Lấy tất cả bài viết
export async function getPosts() {
    const res = await fetch(`${BASE_URL}/posts?_embed&per_page=10`, {
        headers: {
            'User-Agent': 'Mozilla/5.0',
            Accept: 'application/json',
        },
        next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error('Không thể lấy dữ liệu từ WordPress');

    return res.json();
}

// Lấy chi tiết 1 bài viết theo slug
export async function getPostBySlug(slug: string) {
    const res = await fetch(`${BASE_URL}/posts?slug=${slug}&_embed`, {
        headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'application/json' },
        next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    const posts = await res.json();
    const post = posts[0];
    if (!post) return null;

    // Thumbnail proxy
    const rawThumb = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null;
    const thumbnail = proxyImage(rawThumb);

    // ✅ Lấy SEO từ Rank Math Headless
    const postUrl = `https://sub.gopeaks.coach/${slug}/`;
    const seoHead = await getRankMathSeo(postUrl);

    return { ...post, thumbnail, seoHead };
}

// Lấy category theo slug
export async function getCategoryBySlug(slug: string) {
    const res = await fetch(`${BASE_URL}/categories?slug=${slug}`, {
        headers: {
            'User-Agent': 'Mozilla/5.0',
            Accept: 'application/json',
        },
        next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    const cats = await res.json();
    return cats[0] ?? null;
}

// Lấy bài viết theo category ID
export async function getPostsByCategory(categoryId: number) {
    const res = await fetch(
        `${BASE_URL}/posts?categories=${categoryId}&_embed&per_page=12`,
        {
            headers: {
                'User-Agent': 'Mozilla/5.0',
                Accept: 'application/json',
            },
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) return [];

    const posts = await res.json();

    // Gắn thumbnail proxy vào từng bài
    return posts.map((post: any) => {
        const rawThumb = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null;
        return { ...post, thumbnail: proxyImage(rawThumb) };
    });
}
// ✅ Lấy SEO từ Rank Math Headless
export async function getRankMathSeo(postUrl: string) {
    const res = await fetch(
        `https://sub.gopeaks.coach/wp-json/rankmath/v1/getHead?url=${encodeURIComponent(postUrl)}`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) return null;

    const data = await res.json();
    // data.head chứa toàn bộ HTML meta tags
    return data.head ?? null;
}