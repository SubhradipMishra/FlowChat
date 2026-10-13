import React from 'react';
import { 
  TrendingUp, 
  Info
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { SITE_CONTENT } from '../../data/content';

export const AnalyticsPreview: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F6FBF7]/80 dark:bg-[#0D1812]/80 border-y border-[#E2EDE5]/70 dark:border-[#1C3827]/70 relative transition-colors duration-500">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="mint" size="md">
            {SITE_CONTENT.analytics.badge}
          </Badge>

          <h2 className="display-section font-extrabold text-[#0B1F14] dark:text-[#F0FDF4] transition-colors duration-500">
            {SITE_CONTENT.analytics.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#3F5247] dark:text-[#A1B8AA] leading-relaxed transition-colors duration-500">
            {SITE_CONTENT.analytics.subheadline}
          </p>
        </div>

        {/* 4 KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SITE_CONTENT.analytics.metrics.map((kpi, idx) => (
            <Card
              key={idx}
              surface="white"
              hoverEffect={true}
              className="p-6 border-[#E2EDE5] group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#6B7F73] uppercase tracking-wider">
                  {kpi.label}
                </span>
                <span className="text-[11px] font-bold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-[#16A34A]" />
                  {kpi.change}
                </span>
              </div>

              <div className="text-3xl font-extrabold text-[#0B1F14] mb-1 group-hover:text-[#16A34A] transition-colors">
                {kpi.value}
              </div>

              <p className="text-xs text-[#6B7F73]">
                {kpi.subtext}
              </p>
            </Card>
          ))}
        </div>

        {/* Dashboard Mockup with Responsive Line Chart & Conversation Stream */}
        <div className="bg-white rounded-3xl border border-[#E2EDE5] shadow-[0_20px_50px_-15px_rgba(11,31,20,0.06)] p-6 sm:p-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E2EDE5] pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-[#0B1F14]">Inbound Conversation Velocity & Resolution</h3>
                <span className="text-[10px] font-mono text-[#6B7F73] bg-[#F6FBF7] px-2 py-0.5 rounded border border-[#E2EDE5]">
                  Sample Data
                </span>
              </div>
              <p className="text-xs text-[#6B7F73]">Real-time 30-day message containment telemetry</p>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1.5 font-medium text-[#16A34A]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" /> AI Resolved (78.4%)
              </span>
              <span className="flex items-center gap-1.5 font-medium text-[#3F5247] ml-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E2EDE5]" /> Human Escalated (21.6%)
              </span>
            </div>
          </div>

          {/* SVG Multi-point Line / Area Chart Illustration */}
          <div className="h-48 sm:h-64 w-full relative">
            <svg viewBox="0 0 800 240" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16A34A" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#16A34A" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="40" x2="800" y2="40" stroke="#E2EDE5" strokeDasharray="4 4" />
              <line x1="0" y1="100" x2="800" y2="100" stroke="#E2EDE5" strokeDasharray="4 4" />
              <line x1="0" y1="160" x2="800" y2="160" stroke="#E2EDE5" strokeDasharray="4 4" />
              <line x1="0" y1="220" x2="800" y2="220" stroke="#E2EDE5" strokeWidth="1" />

              {/* Gradient Area */}
              <path
                d="M0,180 Q100,160 200,120 T400,80 T600,45 T800,30 L800,220 L0,220 Z"
                fill="url(#chartGradient)"
              />

              {/* Main Trend Line */}
              <path
                d="M0,180 Q100,160 200,120 T400,80 T600,45 T800,30"
                fill="none"
                stroke="#16A34A"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Data points */}
              <circle cx="200" cy="120" r="5" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="400" cy="80" r="5" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="600" cy="45" r="5" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="800" cy="30" r="6" fill="#15803D" stroke="#FFFFFF" strokeWidth="3" />
            </svg>

            {/* X-axis labels */}
            <div className="flex justify-between text-[11px] font-semibold text-[#6B7F73] pt-2">
              <span>Week 1 (Oct 1)</span>
              <span>Week 2 (Oct 8)</span>
              <span>Week 3 (Oct 15)</span>
              <span>Week 4 (Oct 22)</span>
              <span>Today (Oct 29)</span>
            </div>
          </div>

          {/* Sample data note banner */}
          <div className="mt-8 p-3 rounded-xl bg-[#F6FBF7] border border-[#E2EDE5] flex items-center gap-2 text-xs text-[#6B7F73]">
            <Info className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>{SITE_CONTENT.analytics.note}</span>
          </div>

        </div>
      </Container>
    </section>
  );
};
