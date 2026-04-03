import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const url = req.nextUrl.searchParams.get('url');

    if (!url) {
        return new NextResponse('Missing url', { status: 400 });
    }

    const allowed = ['sub.gopeaks.coach'];

    try {
        const hostname = new URL(url).hostname;

        if (!allowed.includes(hostname)) {
            return new NextResponse('Forbidden', { status: 403 });
        }

        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Referer': 'https://sub.gopeaks.coach/',
                'Accept': 'image/webp,image/jpeg,image/*',
            },
            next: { revalidate: 3600 },
        });

        console.log('🖼️ Proxy fetch:', url, '→ status:', res.status);

        if (!res.ok) {
            return new NextResponse('Image not found', { status: 404 });
        }

        const buffer = await res.arrayBuffer();
        const contentType = res.headers.get('content-type') ?? 'image/jpeg';

        return new NextResponse(buffer, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=3600',
            },
        });

    } catch {
        return new NextResponse('Invalid URL', { status: 400 });
    }
}
