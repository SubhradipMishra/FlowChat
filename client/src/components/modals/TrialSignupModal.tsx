import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, Building, Mail, Phone, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

export interface TrialSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const TrialSignupModal: React.FC<TrialSignupModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'Growth',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    plan: initialPlan,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      setError('Please fill in your name, work email, and company.');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid work email.');
      return;
    }

    // Mock trial registration
    console.log('[FlowChat AI] Registering trial workspace:', formData);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#16A34A', '#BBF7D0', '#DCFCE7', '#0B1F14'],
      });
    } catch {}
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={resetAndClose} title={isSubmitted ? "Welcome to FlowChat AI!" : "Start Your 14-Day Free Trial"} maxWidth="md">
      {isSubmitted ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-14 h-14 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-extrabold text-[#0B1F14]">
            Workspace Created for {formData.company}
          </h3>
          <p className="text-sm text-[#3F5247] leading-relaxed max-w-sm mx-auto">
            We've provisioned your <strong className="text-[#16A34A]">{formData.plan} plan</strong> trial sandbox. Check <strong className="text-[#0B1F14]">{formData.email}</strong> for your one-click dashboard link.
          </p>

          <div className="bg-[#F6FBF7] p-4 rounded-2xl border border-[#E2EDE5] text-xs text-[#6B7F73] text-left space-y-1">
            <div className="font-bold text-[#0B1F14]">Next Step:</div>
            <div>1. Open verification email</div>
            <div>2. Connect your WhatsApp Business number via Meta Cloud API</div>
            <div>3. Test your AI assistant in sandbox</div>
          </div>

          <div className="pt-2">
            <Button variant="primary" size="md" onClick={resetAndClose} className="w-full">
              Go to Workspace Dashboard
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-[#F6FBF7] p-3 rounded-xl border border-[#BBF7D0] flex items-center gap-2 text-xs text-[#166534]">
            <Sparkles className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>14 days of full platform access • No credit card required</span>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0B1F14] mb-1">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-[#6B7F73] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Sarah Connor"
                className="w-full text-xs sm:text-sm pl-9 pr-3.5 py-2.5 rounded-xl border border-[#E2EDE5] focus:outline-none focus:border-[#16A34A]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0B1F14] mb-1">Work Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#6B7F73] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="sarah@company.com"
                className="w-full text-xs sm:text-sm pl-9 pr-3.5 py-2.5 rounded-xl border border-[#E2EDE5] focus:outline-none focus:border-[#16A34A]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0B1F14] mb-1">Company / Workspace Name</label>
            <div className="relative">
              <Building className="w-4 h-4 text-[#6B7F73] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Commerce Ltd."
                className="w-full text-xs sm:text-sm pl-9 pr-3.5 py-2.5 rounded-xl border border-[#E2EDE5] focus:outline-none focus:border-[#16A34A]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0B1F14] mb-1">WhatsApp Business Number (Optional)</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-[#6B7F73] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full text-xs sm:text-sm pl-9 pr-3.5 py-2.5 rounded-xl border border-[#E2EDE5] focus:outline-none focus:border-[#16A34A]"
              />
            </div>
          </div>

          {error && (
            <p className="text-xs text-red-600 font-semibold">{error}</p>
          )}

          <div className="pt-2">
            <Button type="submit" variant="primary" size="md" className="w-full justify-center">
              Create My Workspace
            </Button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#6B7F73] pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>Official WhatsApp Business Platform (Cloud API) compliance</span>
          </div>
        </form>
      )}
    </Modal>
  );
};
