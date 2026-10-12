import React from 'react';
import { 
  FileText, 
  GitBranch, 
  Target, 
  Inbox, 
  Clock, 
  Building,
  Sparkles,
  Check
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { SITE_CONTENT } from '../../data/content';

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white relative">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="green" size="md">
            {SITE_CONTENT.features.badge}
          </Badge>

          <h2 className="display-section font-extrabold text-[#0B1F14]">
            {SITE_CONTENT.features.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#3F5247] leading-relaxed">
            {SITE_CONTENT.features.subheadline}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

          {/* Card 1: Official WhatsApp Connection (Span 7) */}
          <Card
            surface="soft"
            hoverEffect={true}
            className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-[#E2EDE5] group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="green" size="sm">Meta Cloud API</Badge>
                <div className="flex items-center gap-1.5 text-xs text-[#166534] font-semibold bg-[#DCFCE7] px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                  Live Webhook: 99.99% Uptime
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F14] mb-2">
                  Official WhatsApp Connection
                </h3>
                <p className="text-sm sm:text-base text-[#3F5247] leading-relaxed">
                  Direct connection via Meta's authorized Cloud API. Zero risks of phone number bans, phone battery drains, or fragile browser sessions.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {SITE_CONTENT.features.items[0].details.map((d, i) => (
                  <span key={i} className="text-xs bg-white text-[#3F5247] px-3 py-1 rounded-full border border-[#E2EDE5] flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-[#16A34A]" /> {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Code UI Illustration: Official Meta Webhook Verified Card */}
            <div className="mt-6 bg-white p-4 rounded-xl border border-[#BBF7D0] shadow-xs space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#16A34A] text-white flex items-center justify-center font-bold text-xs">
                    M
                  </div>
                  <span className="font-bold text-[#0B1F14]">Meta Business Manager Link</span>
                </div>
                <span className="text-xs font-bold text-[#166534] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full">
                  Official Verified Number
                </span>
              </div>
              <div className="bg-[#F6FBF7] p-2.5 rounded-lg border border-[#E2EDE5] text-xs text-[#3F5247] flex items-center justify-between">
                <span>WhatsApp Account: <span className="font-mono font-medium">9481204810294</span></span>
                <span className="text-[#16A34A] font-semibold">Ready for 24/7 webhooks</span>
              </div>
            </div>
          </Card>

          {/* Card 2: AI Assistant Trained on Docs (Span 5) */}
          <Card
            surface="soft"
            hoverEffect={true}
            className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-[#E2EDE5] group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="mint" size="sm">RAG Knowledge Base</Badge>
                <Sparkles className="w-4 h-4 text-[#16A34A]" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F14] mb-2">
                  AI Trained on Your Business
                </h3>
                <p className="text-sm text-[#3F5247] leading-relaxed">
                  Ground replies directly in your official PDF catalogs, price sheets, and SOPs with zero hallucinations.
                </p>
              </div>
            </div>

            {/* Code UI Illustration: Ingested documents list */}
            <div className="mt-6 space-y-2">
              {[
                { name: 'Product_Catalog_2026.pdf', size: '2.4 MB', status: 'Indexed' },
                { name: 'Pricing_Matrix_Tiers.xlsx', size: '480 KB', status: 'Indexed' },
                { name: 'Refund_Policy_Guide.docx', size: '120 KB', status: 'Indexed' },
              ].map((doc, idx) => (
                <div key={idx} className="bg-white p-2.5 rounded-xl border border-[#E2EDE5] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 truncate">
                    <FileText className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span className="font-semibold text-[#0B1F14] truncate">{doc.name}</span>
                  </div>
                  <span className="text-[10px] text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full font-medium shrink-0">
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Card 3: Visual Workflow Builder (Span 6) */}
          <Card
            surface="soft"
            hoverEffect={true}
            className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between border-[#E2EDE5] group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="green" size="sm">Visual Node Canvas</Badge>
                <GitBranch className="w-4 h-4 text-[#16A34A]" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F14] mb-2">
                  No-Code Workflow Builder
                </h3>
                <p className="text-sm text-[#3F5247] leading-relaxed">
                  Visually configure triggers, branching conditions, quick reply buttons, and CRM dispatches without writing a line of code.
                </p>
              </div>
            </div>

            {/* Code UI Illustration: Mini Node Flow Diagram */}
            <div className="mt-6 bg-white p-4 rounded-xl border border-[#E2EDE5] space-y-3">
              <div className="flex items-center gap-2">
                <div className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#DCFCE7] text-[#166534] rounded">
                  Step 1: Inbound WhatsApp Trigger
                </div>
              </div>
              <div className="ml-3 pl-3 border-l-2 border-dashed border-[#BBF7D0] space-y-3">
                <div className="bg-[#F6FBF7] p-2.5 rounded-lg border border-[#E2EDE5] text-xs">
                  <span className="font-bold text-[#0B1F14]">Condition: </span>
                  <span className="text-[#3F5247]">If customer intent == 'Pricing'</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-[#DCFCE7]/60 p-2 rounded-lg border border-[#BBF7D0] text-[11px] text-[#166534] font-medium">
                    Branch A: Send Catalog Card
                  </div>
                  <div className="bg-[#FEF3C7]/60 p-2 rounded-lg border border-[#FDE68A] text-[11px] text-[#92400E] font-medium">
                    Branch B: Schedule Call
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 4: Lead Capture & CRM Pipeline (Span 6) */}
          <Card
            surface="soft"
            hoverEffect={true}
            className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between border-[#E2EDE5] group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="mint" size="sm">Automated Qualification</Badge>
                <Target className="w-4 h-4 text-[#16A34A]" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F14] mb-2">
                  Lead Capture & CRM Pipeline
                </h3>
                <p className="text-sm text-[#3F5247] leading-relaxed">
                  Turn informal WhatsApp chats into structured revenue. Extract client names, emails, budgets, and sync directly to your CRM.
                </p>
              </div>
            </div>

            {/* Code UI Illustration: Mini Kanban Stages */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="bg-white p-2.5 rounded-xl border border-[#E2EDE5] space-y-2">
                <div className="text-[10px] font-bold text-[#6B7F73] uppercase">New Inquiry (4)</div>
                <div className="bg-[#F6FBF7] p-2 rounded-lg border border-[#E2EDE5] text-xs font-semibold text-[#0B1F14]">
                  Marcus T.
                  <div className="text-[10px] text-[#16A34A] font-bold">$1,200 Intent</div>
                </div>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-[#BBF7D0] space-y-2">
                <div className="text-[10px] font-bold text-[#166534] uppercase">Qualified (3)</div>
                <div className="bg-[#DCFCE7] p-2 rounded-lg text-xs font-semibold text-[#0B1F14]">
                  Sarah L.
                  <div className="text-[10px] text-[#166534] font-bold">Discovery Call</div>
                </div>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-[#E2EDE5] space-y-2">
                <div className="text-[10px] font-bold text-[#6B7F73] uppercase">Converted (12)</div>
                <div className="bg-[#F6FBF7] p-2 rounded-lg border border-[#E2EDE5] text-xs font-semibold text-[#0B1F14]">
                  Acme Ltd.
                  <div className="text-[10px] text-[#16A34A] font-bold">Deal Closed</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 5: Shared Inbox with Agent Handoff (Span 4) */}
          <Card
            surface="soft"
            hoverEffect={true}
            className="lg:col-span-4 p-6 sm:p-7 flex flex-col justify-between border-[#E2EDE5]"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="green" size="sm">Shared Inbox</Badge>
                <Inbox className="w-4 h-4 text-[#16A34A]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F14]">
                Collaborative Team Inbox
              </h3>
              <p className="text-xs sm:text-sm text-[#3F5247] leading-relaxed">
                Assign threads to team members, leave internal private notes, and review customer context instantly.
              </p>
            </div>

            <div className="mt-5 bg-white p-3 rounded-xl border border-[#E2EDE5] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B1F14]">Thread: #9482</span>
                <span className="text-[10px] bg-[#DCFCE7] text-[#166534] px-2 py-0.5 rounded-full font-bold">
                  Assigned: Priya V.
                </span>
              </div>
              <div className="bg-[#F6FBF7] p-2 rounded-lg text-[11px] text-[#3F5247] italic border border-[#E2EDE5]/60">
                💬 Internal Note: "Customer wants enterprise discount for 10 seats."
              </div>
            </div>
          </Card>

          {/* Card 6: Permitted Follow-ups & Reminders (Span 4) */}
          <Card
            surface="soft"
            hoverEffect={true}
            className="lg:col-span-4 p-6 sm:p-7 flex flex-col justify-between border-[#E2EDE5]"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="mint" size="sm">24h Window Aware</Badge>
                <Clock className="w-4 h-4 text-[#16A34A]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F14]">
                Permitted Follow-ups
              </h3>
              <p className="text-xs sm:text-sm text-[#3F5247] leading-relaxed">
                Stay strictly within Meta's policies. Send approved template reminders and appointment alerts with opt-in safeguards.
              </p>
            </div>

            <div className="mt-5 bg-white p-3 rounded-xl border border-[#E2EDE5] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#0B1F14]">Customer Window:</span>
                <span className="text-[11px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                  18h 42m Active
                </span>
              </div>
              <div className="text-[11px] text-[#3F5247] bg-[#F6FBF7] p-2 rounded-lg border border-[#E2EDE5]">
                ✓ Template: appointment_confirmation_v1 (Meta Approved)
              </div>
            </div>
          </Card>

          {/* Card 7: Analytics & Multi-tenant Roles (Span 4) */}
          <Card
            surface="soft"
            hoverEffect={true}
            className="lg:col-span-4 p-6 sm:p-7 flex flex-col justify-between border-[#E2EDE5]"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="neutral" size="sm">Multi-Tenant RBAC</Badge>
                <Building className="w-4 h-4 text-[#16A34A]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F14]">
                Enterprise Security & Roles
              </h3>
              <p className="text-xs sm:text-sm text-[#3F5247] leading-relaxed">
                Create isolated client workspaces, assign roles (Admin, Agent, Viewer), and manage subscription limits safely.
              </p>
            </div>

            <div className="mt-5 bg-white p-3 rounded-xl border border-[#E2EDE5] flex items-center justify-between">
              <div className="text-xs">
                <div className="font-bold text-[#0B1F14]">Workspace: Global HQ</div>
                <div className="text-[11px] text-[#6B7F73]">Tenant isolation active</div>
              </div>
              <span className="text-[10px] font-bold bg-[#DCFCE7] text-[#166534] px-2.5 py-1 rounded-full">
                Role: Admin
              </span>
            </div>
          </Card>

        </div>
      </Container>
    </section>
  );
};
