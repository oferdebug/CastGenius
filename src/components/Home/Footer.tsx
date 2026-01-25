import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-brand-50 border-t border-brand-200 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/assets/airtime-icon-clean.svg"
                            alt="Airtime"
                            width={32}
                            height={32}
                        />
                        <span className="text-xl font-bold text-slate-950">Airtime</span>
                    </div>
                    
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-slate-600 hover:text-brand-600 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-slate-600 hover:text-brand-600 transition-colors">Terms of Service</Link>
                        <Link href="/contact" className="text-slate-600 hover:text-brand-600 transition-colors">Contact</Link>
                    </div>

                    <div className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Airtime AI. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
