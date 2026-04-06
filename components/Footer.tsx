"use client";

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-32 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 border-b border-white/10 pb-24 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-8">
                            <span className="text-white font-black text-3xl tracking-tighter">GOPEAKS</span>
                        </Link>
                        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xs">
                            Trải nghiệm Race-cation đẳng cấp. Tập luyện, phục hồi và khám phá những cung đường đẹp nhất Việt Nam.
                        </p>
                        <div className="flex items-center gap-4">
                            {[FaFacebook, FaInstagram, FaYoutube].map((Icon, i) => (
                                <Link key={i} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white text-white hover:text-primary transition-all duration-300">
                                    <Icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-10 text-white/50">Khám phá</h3>
                        <ul className="space-y-5">
                            {["Điểm đến", "Camp sắp tới", "Huấn luyện viên", "Câu chuyện", "Du lịch"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white hover:text-white/70 text-lg font-bold transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact 1 */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-10 text-white/50">Văn phòng</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-lg font-bold mb-3">Gopeaks Thủ Thiêm</h4>
                                <p className="text-white/60 text-md leading-relaxed">
                                    21 Tố Hữu, Thủ Thiêm<br />
                                    Thủ Đức, TP.HCM
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-3">Fitzone Phú Mỹ Hưng</h4>
                                <p className="text-white/60 text-md leading-relaxed">
                                    210 Phạm Thái Bường, Q7<br />
                                    TP.HCM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact 2 */}
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-10 text-white/50">Liên hệ</h3>
                        <div className="space-y-4">
                            <p className="text-2xl font-black">0866 036 099</p>
                            <p className="text-lg text-white/60 font-bold">info@fitzone.vn</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-sm">© 2026 GoPeaks. All rights reserved.</p>
                    <div className="flex items-center gap-10">
                        <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Điều khoản</Link>
                        <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Bảo mật</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}