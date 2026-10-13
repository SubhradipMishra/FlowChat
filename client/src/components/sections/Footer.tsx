import React from 'react';
import { BrandLogo } from '../ui/BrandLogo';
import { Container } from '../ui/Container';
import { SITE_CONTENT } from '../../data/content';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#060B08] border-t border-[#E2EDE5] dark:border-[#1C3827] pt-16 pb-12 text-sm text-[#3F5247] dark:text-[#A1B8AA] transition-colors duration-500">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#E2EDE5] dark:border-[#1C3827] transition-colors">
          
          {/* Brand Info (Span 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs sm:text-sm text-[#6B7F73] dark:text-[#9FB5A6] max-w-sm leading-relaxed transition-colors">
              {SITE_CONTENT.footer.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F6FBF7] dark:bg-[#0E1A12] border border-[#BBF7D0] dark:border-[#22C55E]/40 text-xs font-semibold text-[#166534] dark:text-[#4ADE80] transition-colors">
              <ShieldCheck className="w-4 h-4 text-[#16A34A] dark:text-[#4ADE80]" />
              <span>Official WhatsApp Cloud API Architecture</span>
            </div>
          </div>

          {/* Links Columns */}
          {SITE_CONTENT.footer.columns.map((col, idx) => (
            <div key={idx} className="space-y-3.5">
              <h3 className="font-bold text-sm text-[#0B1F14] dark:text-[#F0FDF4] transition-colors">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-[#6B7F73] dark:text-[#9FB5A6] hover:text-[#16A34A] dark:hover:text-[#4ADE80] transition-colors"
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
        <div className="pt-8 space-y-4 text-xs text-[#6B7F73] dark:text-[#8CA394] leading-relaxed transition-colors">
          <p className="bg-[#F6FBF7] dark:bg-[#0E1A12] p-3.5 rounded-xl border border-[#E2EDE5] dark:border-[#1C3827] transition-colors">
            {SITE_CONTENT.footer.disclaimer}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>{SITE_CONTENT.footer.copyright}</p>
            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="hover:text-[#16A34A] dark:hover:text-[#4ADE80] transition-colors">Privacy Notice</a>
              <span>•</span>
              <a href="#" className="hover:text-[#16A34A] dark:hover:text-[#4ADE80] transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-[#16A34A] dark:hover:text-[#4ADE80] transition-colors">Security Overview</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
