import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (

        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
                <Image
                    src="https://sub.gopeaks.coach/wp-content/uploads/2026/04/banner-headless-wp.png"
                    alt="GoPeaks Adventure"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-tight animate-fade-in-up">
                        Tập hết mình.<br />Hồi phục trọn vẹn.
                    </h1>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-200">
                        <Link href="/destinations" className="pill-button-blue text-lg px-10 py-4 bg-primary hover:bg-primary-hover shadow-xl shadow-primary/20">
                            Khám phá điểm đến
                        </Link>
                        <Link href="/camps" className="pill-button-outline text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                            Xem camp sắp mở
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
