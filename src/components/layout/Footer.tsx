import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0E0A05] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="55" r="30" fill="#F5E6D3" />
                <circle cx="30" cy="40" r="15" fill="#F5E6D3" />
                <circle cx="70" cy="40" r="15" fill="#F5E6D3" />
                <circle cx="50" cy="35" r="18" fill="#F5E6D3" />
                <circle cx="42" cy="52" r="3" fill="#1A1208" />
                <circle cx="58" cy="52" r="3" fill="#1A1208" />
                <ellipse cx="50" cy="60" rx="4" ry="3" fill="#FFB5B5" />
                <path d="M46 65 Q50 70 54 65" stroke="#1A1208" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
              <span className="text-lg font-bold">
                Bible Scholar <span className="text-primary">Kids</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Making Bible learning fun, safe, and meaningful for children ages
              6–12.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/30 font-semibold mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li><Link href="/features" className="text-white/60 hover:text-white text-sm transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="text-white/60 hover:text-white text-sm transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/30 font-semibold mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/30 font-semibold mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li><Link href="/support" className="text-white/60 hover:text-white text-sm transition-colors">FAQ</Link></li>
              <li><span className="text-white/60 text-sm">support@biblescholarkids.com</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-xs">
          &copy; {new Date().getFullYear()} Bible Scholar Kids. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
