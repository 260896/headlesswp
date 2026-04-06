import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, Users, ArrowRight, Star, Quote } from 'lucide-react';
import "./home.css";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
                {/* <Image
                    src="https://sub.gopeaks.coach/wp-content/uploads/2026/04/banner-headless-wp.png"
                    alt="GoPeaks Adventure"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-50"
                    priority
                /> */}
                {/* video */}
                <video autoPlay loop playsInline className="absolute inset-0 h-full w-full object-cover">
                    <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    <source src="https://videos.pexels.com/video-files/3195650/3195650-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
                <div className="relative max-w-7xl max-w-7xl z-10 px-6 max-w-5xl mx-auto w-full">
                    <div className="flex flex-row items-center gap-4 mb-8 animate-fade-in-up delay-100">
                        <span className="hero-badge-glass whitespace-nowrap">Gopeaks Training Camp</span>
                        <span className="hero-badge-gradient whitespace-nowrap">Race-cation</span>
                    </div>
                    <p className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-tight animate-fade-in-up">
                        Tập hết mình.<br />Hồi phục trọn vẹn.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-start gap-6 animate-fade-in-up delay-200">
                        <Link href="/destinations" className="pill-button-blue text-lg px-10 py-4 bg-primary hover:bg-primary-hover shadow-xl shadow-primary/20">
                            Khám phá điểm đến
                        </Link>
                        <Link href="/camps" className="pill-button-outline text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                            Xem camp sắp mở
                        </Link>
                    </div>
                </div>
            </section>

            {/* Feature Highlights Section */}
            <section className="relative z-20 mt-10 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Điểm đến trước", desc: "Tối ưu hóa trải nghiệm tập luyện tại các địa điểm đẹp nhất.", icon: MapPin },
                        { title: "Camp chọn lọc", desc: "Chương trình chuyên sâu từ các huấn luyện viên hàng đầu.", icon: Calendar },
                        { title: "Nhóm giới hạn", desc: "Đảm bảo chất lượng hướng dẫn cá nhân hóa cao nhất.", icon: Users },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-10 rounded-[32px] shadow-2xl flex flex-row items-start gap-6 group hover:-translate-y-2 transition-all duration-300">
                            <div className="rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors p-3">
                                <item.icon size={30} />
                            </div>
                            <div>
                                <h3 className="text-1xl font-bold mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Destinations */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Điểm đến tiêu biểu</h2>
                            <p className="text-xl text-gray-500 max-w-2xl">Những địa điểm tuyệt vời nhất để bạn bứt phá giới hạn bản thân.</p>
                        </div>
                        <Link href="/destinations" className="flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all">
                            Tất cả điểm đến <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Phú Quốc", coaches: 5, spots: 12, img: "https://sub.gopeaks.coach/wp-content/uploads/2026/04/banner-headless-wp.png" },
                            { name: "Bàu Trắng", coaches: 3, spots: 8, img: "https://sub.gopeaks.coach/wp-content/uploads/2026/04/banner-headless-wp.png" },
                            { name: "Đà Nẵng", coaches: 4, spots: 15, img: "https://sub.gopeaks.coach/wp-content/uploads/2026/04/banner-headless-wp.png" },
                        ].map((dest, i) => (
                            <div key={i} className="relative aspect-[4/5] rounded-[40px] overflow-hidden group">
                                <Image src={dest.img} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h3 className="text-3xl font-black mb-4">{dest.name}</h3>
                                    <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-white/70">
                                        <span>{dest.coaches} Coach</span>
                                        <span>{dest.spots} Spots Left</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Storytelling Section: Nhịp */}
            <section className="py-32 bg-deep-black text-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">NHỊP</h2>
                        <p className="text-xl text-white/50 max-w-2xl mx-auto">Một ngày tại GoPeaks Camp diễn ra như thế nào?</p>
                    </div>

                    <div className="space-y-32">
                        {[
                            { id: "01", title: "Arrival & Check-in", desc: "Bắt đầu hành trình với sự chào đón nồng nhiệt và chuẩn bị trang thiết bị tốt nhất.", img: "https://sub.gopeaks.coach/wp-content/uploads/2026/04/banner-headless-wp.png" },
                            { id: "02", title: "Morning Training", desc: "Buổi tập sáng sớm khi bình minh vừa lên, tập trung vào kỹ thuật và sức bền.", img: "https://sub.gopeaks.coach/wp-content/uploads/2026/04/banner-headless-wp.png" },
                            { id: "03", title: "Recovery Session", desc: "Phục hồi cơ bắp với các bài tập giãn cơ và dinh dưỡng khoa học.", img: "https://sub.gopeaks.coach/wp-content/uploads/2026/04/banner-headless-wp.png" },
                        ].map((step, i) => (
                            <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}>
                                <div className="lg:w-1/2 relative aspect-video w-full rounded-[40px] overflow-hidden">
                                    <Image src={step.img} alt={step.title} fill className="object-cover" />
                                </div>
                                <div className="lg:w-1/2">
                                    <span className="text-7xl font-black text-primary/20 block mb-6">{step.id}</span>
                                    <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">{step.title}</h3>
                                    <p className="text-xl text-white/60 leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Câu chuyện GoPeaks</h2>
                        <p className="text-xl text-gray-500">Những người đã thay đổi cách họ nhìn nhận về Endurance.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { name: "Lê Thành Tùng", role: "Athlete", content: "GoPeaks đã thay đổi hoàn toàn cách tôi tập luyện. Không chỉ là thể chất, mà còn là tư duy của một vận động viên chuyên nghiệp.", img: "https://sub.gopeaks.coach/wp-content/uploads/2026/04/z7646228978155_42a05b792884698e3096468b71d1afb6.jpg" },
                            { name: "Phạm Đức Anh", role: "Racer", content: "Mỗi camp là một trải nghiệm không thể quên. Sự chuyên nghiệp trong từng khâu tổ chức khiến tôi luôn muốn quay lại.", img: "https://sub.gopeaks.coach/wp-content/uploads/2026/04/z7646228978155_42a05b792884698e3096468b71d1afb6.jpg" },
                        ].map((test, i) => (
                            <div key={i} className="bg-light-bg p-12 rounded-[40px] relative overflow-hidden group">
                                <Quote className="absolute top-8 right-8 text-primary/10 w-24 h-24" />
                                <div className="relative z-10">
                                    <p className="text-2xl font-bold italic mb-12 leading-relaxed text-deep-black">"{test.content}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                            <Image src={test.img} alt={test.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-extrabold text-xl">{test.name}</p>
                                            <p className="text-primary font-bold text-sm tracking-widest uppercase">{test.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
