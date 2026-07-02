import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#ebebeb] pt-16 md:pt-20 pb-6 text-black">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="w-full md:px-[100px]">
          
          {/* Asosiy 4 ta ustun */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-400 pb-10 mb-6">
            
            {/* 1. Brend va Ma'lumot */}
            <div>
              <Link href="/" className="text-3xl font-brand tracking-widest block mb-6 text-black">
                FASHIONGLAM
              </Link>
              <p className="text-[10px] md:text-xs font-mono text-gray-500 leading-relaxed mb-6 md:max-w-[280px]">
                Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
              </p>
              {/* Ijtimoiy tarmoqlar */}
              <div className="flex gap-4 text-gray-500">
                <Link href="#" className="hover:text-black transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Link>
                <Link href="#" className="hover:text-black transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Link>
                <Link href="#" className="hover:text-black transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </Link>
                <Link href="#" className="hover:text-black transition-colors" aria-label="Twitter">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </Link>
              </div>
            </div>

            {/* 2. Quick Links */}
            <div>
              <h4 className="text-base font-serif uppercase tracking-widest mb-6 text-black">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest">
                <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-black transition-colors">Services</Link></li>
                <li><Link href="/shop" className="hover:text-black transition-colors">Single Item</Link></li>
                <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* 3. Help & Info */}
            <div>
              <h4 className="text-base font-serif uppercase tracking-widest mb-6 text-black">Help & Info</h4>
              <ul className="flex flex-col gap-3 text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest">
                <li><Link href="#" className="hover:text-black transition-colors">Track Your Order</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Returns + Exchanges</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Shipping + Delivery</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Find Us Easy</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">FAQs</Link></li>
              </ul>
            </div>

            {/* 4. Contact Us */}
            <div>
              <h4 className="text-base font-serif uppercase tracking-widest mb-6 text-black">Contact Us</h4>
              <p className="text-[10px] md:text-xs font-mono text-gray-500 leading-relaxed mb-6">
                Do you have any questions or suggestions?<br />
                <a href="mailto:info@yourcompany.com" className="hover:text-black transition-colors mt-1 block">info@yourcompany.com</a>
              </p>
              <p className="text-[10px] md:text-xs font-mono text-gray-500 leading-relaxed">
                Do you need support? Give us a call.<br />
                <a href="tel:+43720115278" className="hover:text-black transition-colors mt-1 block">+43 720 11 52 78</a>
              </p>
            </div>

          </div>

          {/* Eng pastki qator (Copyright va To'lov usullari) */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] font-mono text-gray-500 tracking-widest w-full">
            
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              {/* Shipping */}
              <div className="flex items-center gap-3">
                <span className="whitespace-nowrap">We ship with:</span>
                <div className="flex items-center gap-3 grayscale opacity-70">
                  <Image src="/image/payments/fa-brands_dhl.svg" alt="DHL" width={40} height={25} className="h-[22px] w-auto object-contain" />
                  <Image src="/image/payments/arcticons_post.svg" alt="Post" width={25} height={25} className="h-6 w-auto object-contain" />
                </div>
              </div>
              
              {/* Payment Options */}
              <div className="flex items-center gap-3">
                <span className="whitespace-nowrap">Payment options:</span>
                <div className="flex items-center gap-3 grayscale opacity-70">
                  <Image src="/image/payments/brandico_visa.svg" alt="Visa" width={40} height={25} className="h-5 w-auto object-contain" />
                  <Image src="/image/payments/brandico_mastercard.svg" alt="Mastercard" width={35} height={25} className="h-5 w-auto object-contain" />
                  <Image src="/image/payments/fontisto_paypal.svg" alt="PayPal" width={35} height={25} className="h-[17px] w-auto object-contain" />
                </div>
              </div>
            </div>

            <div>
              © Copyright {new Date().getFullYear()} Fashionista. Design by TemplatesJungle
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}