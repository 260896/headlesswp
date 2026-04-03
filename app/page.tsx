import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Globe, Award, Activity, CheckCircle2, Star } from 'lucide-react';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
                <Image
                    src="https://sub.gopeaks.coach/wp-content/uploads/2026/04/banner-headless-wp.png"
                    alt="GoPeaks Endurance Coaching"
                    fill
                    sizes="100vw"
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
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Chuẩn quốc tế",
                                desc: "World Triathlon, TrainingPeaks và USA Triathlon certifications. Chúng tôi cam kết chất lượng huấn luyện hàng đầu.",
                                icon: ShieldCheck,
                                lightBg: true
                            },
                            {
                                title: "Toàn diện hơn",
                                desc: "Không chỉ là giáo án chạy bộ. Chúng tôi tối ưu hóa thể chất, tinh thần và hiệu suất dài hạn cho bạn.",
                                icon: Activity,
                                lightBg: true
                            },
                            {
                                title: "Cá nhân hóa",
                                desc: "Mọi chương trình đều được thiết kế riêng dựa trên dữ liệu thật của chính cơ thể bạn.",
                                icon: Award,
                                lightBg: true
                            }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-light-bg hover:bg-black transition-all duration-500 hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary transition-colors">
                                    <item.icon size={28} className="text-black group-hover:text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-white">{item.title}</h3>
                                <p className="text-black/60 group-hover:text-white/70 leading-relaxed font-semibold">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Digitalized Coaching Section */}
            <section className="py-32 bg-deep-black overflow-hidden relative">
                {/* Abstract Background Element */}
                <div className="absolute -right-24 top-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <p className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-6">Digitalized Coaching</p>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                                Dữ liệu thật. <br /> Chuẩn quốc tế.
                            </h2>
                            <p className="text-lg text-white/60 mb-12 leading-relaxed">
                                GoPeaks tích hợp công nghệ mới nhất từ TrainingPeaks và Garmin để theo dõi từng nhịp tim, sải bước của bạn. Chúng tôi biến con số thành thành tích.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {["WORLD TRIATHLON", "TRAININGPEAKS", "USA TRIATHLON"].map((badge) => (
                                    <div key={badge} className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white/40 text-[10px] font-black tracking-widest text-center hover:bg-white/10 hover:text-white transition-all cursor-default">
                                        {badge}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="w-full aspect-square bg-gradient-to-tr from-primary/30 to-transparent rounded-full flex items-center justify-center p-8 lg:p-12">
                                <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/hero-bg.png"
                                        alt="Data driven coaching"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                                    {/* Floating UI Card Mockup */}
                                    <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                                    <Activity size={20} className="text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Performance</p>
                                                    <p className="text-white font-bold text-sm">Threshold Power</p>
                                                </div>
                                            </div>
                                            <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                                                +12.5%
                                            </div>
                                        </div>
                                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                            <div className="w-3/4 h-full bg-primary shadow-[0_0_10px_#3b62ff]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Coach Section */}
            <section className="py-32 px-6 bg-light-bg">
                <div className="max-w-6xl mx-auto">
                    <div className="relative rounded-[40px] bg-white overflow-hidden shadow-xl flex flex-col md:flex-row">
                        {/* Image Side */}
                        <div className="md:w-5/12 h-[450px] md:h-auto relative">
                            <Image src="/coach-oanh.png" alt="Lê Kim Oanh" fill className="object-cover" />
                            <div className="absolute top-6 left-6 px-4 py-2 bg-primary rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                                Featured
                            </div>
                        </div>
                        {/* Content Side */}
                        <div className="md:w-7/12 p-8 md:p-16 flex flex-col justify-center">
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] text-primary font-bold uppercase tracking-wider flex items-center gap-1">
                                    <CheckCircle2 size={12} /> Verified
                                </span>
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-wider">Nutrition Expert</span>
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-wider">Recovery Specialist</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Lê Kim Oanh</h2>
                            <p className="text-lg text-black/40 font-bold mb-8 italic">Nutrition & Recovery Specialist</p>

                            <p className="text-lg text-black/60 leading-relaxed mb-10 font-medium">
                                Chuyên gia dinh dưỡng thể thao và phục hồi với bằng tiến sĩ. Với hơn 9 năm kinh nghiệm, cô đã đồng hành cùng hàng trăm vận động viên chuyên nghiệp và nghiệp dư đạt mục tiêu cao nhất.
                            </p>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 py-8 border-y border-gray-100">
                                <div>
                                    <p className="text-3xl font-black tracking-tighter mb-1">9 năm</p>
                                    <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider">Kinh nghiệm</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-black tracking-tighter mb-1">110+</p>
                                    <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider">Vận động viên</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-black tracking-tighter mb-1 text-primary">96%</p>
                                    <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider">Hoàn thành MĐ</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1 mb-1">
                                        <p className="text-3xl font-black tracking-tighter">4.9</p>
                                        <Star size={16} className="fill-amber-400 text-amber-400" />
                                    </div>
                                    <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider">Đánh giá</p>
                                </div>
                            </div>

                            <Link href="/coaches/kim-oanh" className="text-primary font-bold hover:underline flex items-center gap-2 group">
                                Xem hồ sơ chi tiết <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Values / Final CTA is handled by Footer's "Ready when you are" section */}
        </div>
    );
}
