import React, { useState } from 'react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { 
  Send, 
  Mail, 
  Copy, 
  Check, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';

interface ContactSectionProps {
  prefilledProject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledProject }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    projectType: prefilledProject ? 'Web App / SaaS' : 'New Website Build',
    budgetRange: '$5,000 - $10,000',
    timeline: '1 - 2 Months',
    message: prefilledProject 
      ? `Hi Umar, I would like to discuss building something similar to "${prefilledProject}".` 
      : '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const projectTypes = [
    'New Website Build',
    'Web App / SaaS',
    'Frontend & UI Engineering',
    'E-Commerce Storefront',
    'Performance & Speed Audit'
  ];

  const budgetRanges = [
    '< $3,000',
    '$3,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+'
  ];

  const messageStarters = [
    "I need a fast modern website for my new venture.",
    "Looking to migrate our frontend to React and TypeScript.",
    "We need a clean headless e-commerce store built.",
    "Looking for a senior web engineer for a contract project."
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details about your project.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please enter at least 10 characters so I can understand your scope.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous, reliable network delivery
    setTimeout(() => {
      setIsSubmitting(false);
      const ticketId = `INQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedTicket(ticketId);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} (${formData.fullName || 'New Client'})`);
    const body = encodeURIComponent(
      `Hi Umar,\n\nName: ${formData.fullName}\nProject Type: ${formData.projectType}\nBudget: ${formData.budgetRange}\nTimeline: ${formData.timeline}\n\nProject Scope:\n${formData.message}\n`
    );
    window.location.href = `mailto:${DEVELOPER_PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-stone-200/80 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct info & proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                <MessageSquare className="h-3.5 w-3.5 text-stone-700" />
                <span>Direct Inquiries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
                Let's discuss your website or web application.
              </h2>
              <p className="mt-4 text-stone-600 text-base leading-relaxed">
                Whether you need a brand-new high-conversion website, an overhaul of an existing web app, or an experienced TypeScript developer, I am ready to help.
              </p>

              {/* Direct email card */}
              <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-5 shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Direct Email
                </span>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-stone-900 truncate">
                    {DEVELOPER_PROFILE.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 bg-stone-50 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
                    title="Copy Email Address"
                    id="copy-direct-email-btn"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-stone-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Response time: &lt; 4 hours</span>
                  </div>
                  <button
                    onClick={handleMailto}
                    className="text-stone-900 font-semibold hover:underline"
                  >
                    Open in Mail App
                  </button>
                </div>
              </div>

              {/* Expectations & Trust list */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-stone-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Transparent fixed-price milestones or flexible weekly contracts</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Daily async Slack/email updates with interactive staging previews</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Complete code ownership, documentation, and handover included</span>
                </div>
              </div>
            </div>

            {/* Availability reminder */}
            <div className="mt-8 pt-6 border-t border-stone-200 text-xs font-mono text-stone-500">
              Current Status: <span className="text-emerald-700 font-semibold">Available for Q2/Q3 Projects</span>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-9 shadow-xs" id="direct-contact-form-card">
              
              {submittedTicket ? (
                <div className="py-10 text-center space-y-5 animate-in fade-in duration-200">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900">
                      Message Received!
                    </h3>
                    <p className="mt-2 text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <strong className="text-stone-900">{formData.fullName}</strong>. Your inquiry reference is <span className="font-mono font-bold text-stone-900">{submittedTicket}</span>.
                    </p>
                    <p className="mt-2 text-xs text-stone-500">
                      I will review your scope and reply to <span className="font-mono text-stone-800">{formData.email}</span> within 4 hours.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-stone-100 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleMailto}
                      className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-stone-50 px-4 py-2.5 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>Send Direct Email Copy</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmittedTicket(null);
                        setFormData({
                          fullName: '',
                          email: '',
                          projectType: 'New Website Build',
                          budgetRange: '$5,000 - $10,000',
                          timeline: '1 - 2 Months',
                          message: '',
                        });
                      }}
                      className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-stone-800 transition-colors"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-bold text-stone-950 tracking-tight">
                      Send a Direct Project Message
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Fill out this quick form or send a direct email. No spam, ever.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5" htmlFor="contact-name">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full rounded-xl border bg-stone-50/50 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-hidden focus:ring-1 ${
                          errors.fullName ? 'border-rose-400 focus:ring-rose-400' : 'border-stone-300 focus:border-stone-500 focus:ring-stone-500'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5" htmlFor="contact-email">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className={`w-full rounded-xl border bg-stone-50/50 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-hidden focus:ring-1 ${
                          errors.email ? 'border-rose-400 focus:ring-rose-400' : 'border-stone-300 focus:border-stone-500 focus:ring-stone-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type selector */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-2">
                      What do you need built?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                            formData.projectType === type
                              ? 'bg-stone-900 text-white shadow-2xs font-semibold'
                              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget and Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5" htmlFor="contact-budget">
                        Target Budget
                      </label>
                      <select
                        id="contact-budget"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-xs font-medium text-stone-800 focus:bg-white focus:border-stone-500 focus:outline-hidden"
                      >
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1.5" htmlFor="contact-timeline">
                        Target Timeline
                      </label>
                      <select
                        id="contact-timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-xs font-medium text-stone-800 focus:bg-white focus:border-stone-500 focus:outline-hidden"
                      >
                        <option value="Urgent (< 2 weeks)">Urgent (&lt; 2 weeks)</option>
                        <option value="1 - 2 Months">1 - 2 Months</option>
                        <option value="2 - 3 Months">2 - 3 Months</option>
                        <option value="Flexible / Exploring">Flexible / Exploring</option>
                      </select>
                    </div>
                  </div>

                  {/* Quick message starters */}
                  <div>
                    <span className="block text-[11px] font-medium text-stone-500 mb-1.5">
                      Quick Starters:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {messageStarters.map((starter, i) => (
                        <button
                          type="button"
                          key={i}
                          onClick={() => setFormData({ ...formData, message: starter })}
                          className="rounded-md border border-stone-200 bg-stone-50 px-2 py-1 text-[11px] text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-colors text-left"
                        >
                          "{starter}"
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-stone-700" htmlFor="contact-message">
                        Project Details & Requirements *
                      </label>
                      <span className="text-[11px] text-stone-400 font-mono">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your goals, required features, or share an existing website link..."
                      className={`w-full rounded-xl border bg-stone-50/50 p-3.5 text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-hidden focus:ring-1 ${
                        errors.message ? 'border-rose-400 focus:ring-rose-400' : 'border-stone-300 focus:border-stone-500 focus:ring-stone-500'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button & Direct Mailto */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 flex items-center justify-center gap-2 rounded-xl bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-stone-800 active:scale-98 disabled:opacity-50"
                      id="submit-contact-form"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Send Direct Inquiry</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleMailto}
                      className="w-full sm:w-auto flex items-center justify-center gap-1.5 rounded-xl border border-stone-300 bg-white px-4 py-3.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
                      title="Direct email client fallback"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>Email Directly</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
