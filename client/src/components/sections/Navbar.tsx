import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { SITE_CONTENT } from '../../data/content';

export interface NavbarProps {
  onOpenTrialModal: () => void;
  onOpenLoginModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTrialModal,
  onOpenLoginModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      // Track active section for highlight
      const sections = ['features', 'how-it-works', 'demo', 'use-cases', 'pricing', 'faq'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#080F0A]/90 backdrop-blur-md shadow-xs border-b border-[#E2EDE5]/80 dark:border-[#1C3827]/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <BrandLogo />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-3 bg-white/70 dark:bg-[#0E1A12]/80 backdrop-blur-xs px-4 py-1.5 rounded-full border border-[#E2EDE5]/60 dark:border-[#1C3827]/60 shadow-xs transition-colors duration-500">
          {SITE_CONTENT.nav.links.map((link) => {
            const sectionTarget = link.href.replace('#', '');
            const isActive = activeSection === sectionTarget;

            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs lg:text-sm font-semibold px-3 py-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-[#16A34A] dark:text-[#4ADE80] bg-[#DCFCE7]/70 dark:bg-[#143522]'
                    : 'text-[#3F5247] dark:text-[#9FB5A6] hover:text-[#0B1F14] dark:hover:text-white hover:bg-[#F6FBF7] dark:hover:bg-[#122218]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions & Theme Switcher */}
        <div className="hidden md:flex items-center gap-3">
          {/* Light / Dark Mode Toggle */}
          <ThemeToggle variant="icon" />

          <Button
            variant="ghost"
            size="sm"
            onClick={onOpenLoginModal}
            className="text-xs lg:text-sm text-[#3F5247] dark:text-[#9FB5A6] hover:text-[#0B1F14] dark:hover:text-white hover:bg-[#F6FBF7] dark:hover:bg-[#122218]"
          >
            {SITE_CONTENT.nav.loginText}
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={onOpenTrialModal}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            className="text-xs lg:text-sm shadow-sm"
          >
            {SITE_CONTENT.nav.ctaText}
          </Button>
        </div>

        {/* Mobile Menu & Theme Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle variant="icon" />

          <Button
            variant="primary"
            size="sm"
            onClick={onOpenTrialModal}
            className="text-xs px-3 py-1.5"
          >
            Trial
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 text-[#0B1F14] dark:text-white hover:bg-[#F6FBF7] dark:hover:bg-[#122218] rounded-xl border border-[#E2EDE5] dark:border-[#1C3827] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#0E1A12]/98 backdrop-blur-xl border-b border-[#E2EDE5] dark:border-[#1C3827] shadow-xl px-5 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {SITE_CONTENT.nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#0B1F14] dark:text-[#F0FDF4] py-2.5 px-3 rounded-lg hover:bg-[#F6FBF7] dark:hover:bg-[#122218] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E2EDE5] dark:border-[#1C3827] flex flex-col gap-2.5">
            <div className="flex items-center justify-between px-1 py-1">
              <span className="text-xs font-semibold text-[#6B7F73] dark:text-[#9FB5A6]">Switch Appearance</span>
              <ThemeToggle variant="pill" />
            </div>

            <Button
              variant="outline"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLoginModal();
              }}
            >
              {SITE_CONTENT.nav.loginText}
            </Button>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {SITE_CONTENT.nav.ctaText}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
