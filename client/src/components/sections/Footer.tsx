import React from 'react';
import { BrandLogo } from '../ui/BrandLogo';
import { Container } from '../ui/Container';
import { SITE_CONTENT } from '../../data/content';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E2EDE5] pt-16 pb-12 text-sm text-[#3F5247]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#E2EDE5]">
          
          {/* Brand Info (Span 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs sm:text-sm text-[#6B7F73] max-w-sm leading-relaxed">
              {SITE_CONTENT.footer.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F6FBF7] border border-[#BBF7D0] text-xs font-semibold text-[#166534]">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              <span>Official WhatsApp Cloud API Architecture</span>
            </div>
          </div>

          {/* Links Columns */}
          {SITE_CONTENT.footer.columns.map((col, idx) => (
            <div key={idx} className="space-y-3.5">
              <h3 className="font-bold text-sm text-[#0B1F14]">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-[#6B7F73] hover:text-[#16A34A] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Legal Disclaimer & Copyright Notice */}
        <div className="pt-8 space-y-4 text-xs text-[#6B7F73] leading-relaxed">
          <p className="bg-[#F6FBF7] p-3.5 rounded-xl border border-[#E2EDE5]">
            {SITE_CONTENT.footer.disclaimer}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>{SITE_CONTENT.footer.copyright}</p>
            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="hover:text-[#16A34A] transition-colors">Privacy Notice</a>
              <span>•</span>
              <a href="#" className="hover:text-[#16A34A] transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-[#16A34A] transition-colors">Security Overview</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
