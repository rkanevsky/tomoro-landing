export default function Footer() {
  return (
    <footer className="border-t border-teal-bangladesh/20 bg-black-rich py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded bg-emerald-caribbean flex items-center justify-center font-bold text-black-rich">
                T
              </div>
              <span className="text-lg font-semibold">Tomoro</span>
            </div>
            <p className="text-sm text-neutral-400">
              Time tracking and billing for solo freelancers. Private. Offline. Forever.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-neutral-400 hover:text-emerald-caribbean transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-neutral-400 hover:text-emerald-caribbean transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-neutral-400 hover:text-emerald-caribbean transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-emerald-caribbean transition-colors"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-emerald-caribbean transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-emerald-caribbean transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-emerald-caribbean transition-colors"
                >
                  License Agreement
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-emerald-caribbean transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-emerald-caribbean transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-emerald-caribbean transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-teal-bangladesh/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              © 2025 Roman Kanevsky. Tomoro. Proprietary.
            </p>
            <p className="text-xs text-neutral-600">
              Time flies. We just help you catch it (and bill for it).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
