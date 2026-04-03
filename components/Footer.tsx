"use client";

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-deep-black text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Ready Section */}
                <div className="text-center mb-32">
                    <p className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">Next Step</p>
                    <h2 className="text-5xl lg:text-7xl font-bold mb-10 tracking-tight">Ready when you are.</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/consult" className="pill-button-blue w-full sm:w-auto text-center px-10">
                            Nhận tư vấn
                        </Link>
                        <Link href="/coaches" className="pill-button-outline w-full sm:w-auto text-center px-10">
                            Xem huấn luyện viên
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <path d="M4 18L10 6L14 12L20 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-white font-black text-xl tracking-tighter">GOPEAKS</span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
                            Huấn luyện endurance chuyên nghiệp, giúp vận động viên đạt hiệu suất cao nhất.
                        </p>
                        <div className="flex items-center gap-4">
                            {[FaFacebook, FaInstagram, FaYoutube].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Điều hướng</h3>
                        <ul className="space-y-4">
                            {["Trang chủ", "Dịch vụ", "Chương trình", "Đánh giá", "Liên hệ"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact 1 */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Liên hệ</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-bold mb-2">Gopeaks Thủ Thiêm</h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    21 Tố Hữu, Thủ Thiêm<br />
                                    Thủ Đức, TP.HCM
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold mb-2">Fitzone Phú Mỹ Hưng</h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    210 Phạm Thái Bường, Q7<br />
                                    TP.HCM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact 2 */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 invisible lg:visible">Thông tin</h3>
                        <div className="space-y-4 pt-0 lg:pt-0">
                            <p className="text-white/60 text-sm">0866 036 099</p>
                            <p className="text-white/60 text-sm">Info@fitzone.vn</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
                    <p className="text-white/40 text-xs">© 2026 GoPeaks. All rights reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">Điều khoản dịch vụ</Link>
                        <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">Chính sách bảo mật</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}