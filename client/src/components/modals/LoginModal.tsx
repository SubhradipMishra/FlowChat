import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

export interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToTrial: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSwitchToTrial,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please provide email and password.');
      return;
    }
    setError('');
    setIsLogged(true);
  };

  const resetAndClose = () => {
    setIsLogged(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={resetAndClose} title={isLogged ? "Redirecting to Dashboard" : "Sign in to FlowChat AI"} maxWidth="sm">
      {isLogged ? (
        <div className="text-center py-6 space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto font-bold">
            ✓
          </div>
          <h3 className="text-lg font-bold text-[#0B1F14]">Authenticated</h3>
          <p className="text-xs text-[#3F5247]">Loading your workspace channels and WhatsApp Cloud API sessions...</p>
          <div className="pt-2">
            <Button variant="primary" size="sm" onClick={resetAndClose} className="w-full">
              Open Dashboard
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#0B1F14] mb-1">Work Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#6B7F73] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full text-xs sm:text-sm pl-9 pr-3.5 py-2.5 rounded-xl border border-[#E2EDE5] focus:outline-none focus:border-[#16A34A]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-[#0B1F14]">Password</label>
              <a href="#" className="text-[11px] text-[#16A34A] hover:underline">Forgot password?</a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#6B7F73] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-xs sm:text-sm pl-9 pr-3.5 py-2.5 rounded-xl border border-[#E2EDE5] focus:outline-none focus:border-[#16A34A]"
              />
            </div>
          </div>

          {error && <p className="text-xs text-red-600 font-semibold">{error}</p>}

          <Button type="submit" variant="primary" size="md" className="w-full justify-center">
            Sign In
          </Button>

          <div className="pt-3 border-t border-[#E2EDE5] text-center text-xs text-[#6B7F73]">
            <span>Don't have a workspace yet? </span>
            <button
              type="button"
              onClick={() => {
                onClose();
                onSwitchToTrial();
              }}
              className="text-[#16A34A] font-bold hover:underline"
            >
              Start 14-day trial
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
};
