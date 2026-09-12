import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, ShieldCheck, Quote, TrendingUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 border-b border-stone-200/80">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
            <Quote className="h-3.5 w-3.5 text-stone-700" />
            <span>Proven Track Record & Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Trusted by Founders, Product Leaders & Creative Studios
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Direct feedback from clients whose web applications, e-commerce storefronts, and digital products were designed and coded to the highest standards.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-7 shadow-2xs transition-all hover:border-stone-400 hover:shadow-xs"
              id={`testimonial-card-${testimonial.id}`}
            >
              <div>
                {/* Top Row: Stars and Outcome Metric */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-50/60 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
                    <TrendingUp className="h-3 w-3 text-emerald-600" />
                    <span>{testimonial.outcomeMetric}</span>
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.clientName}
                    className="h-11 w-11 rounded-full object-cover border border-stone-200"
                    loading="lazy"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-stone-900 text-sm">
                        {testimonial.clientName}
                      </h4>
                      {testimonial.verified && (
                        <span title="Verified Client">
                          <ShieldCheck className="h-4 w-4 text-sky-600" />
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-500 font-medium">
                      {testimonial.clientRole}, <strong className="font-semibold text-stone-700">{testimonial.company}</strong>
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block text-[11px] font-mono text-stone-400">
                  {testimonial.projectDelivered}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Credibility Guarantee Banner */}
        <div className="mt-12 rounded-xl border border-stone-200 bg-stone-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-stone-900 text-sm">
              Engineering Guarantee
            </h4>
            <p className="text-xs text-stone-600 mt-0.5">
              Every website project includes 30 days of post-launch warranty, full source code IP handover, and automated performance CI checks.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-800 shrink-0">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
            100% On-Time Delivery Record
          </div>
        </div>

      </div>
    </section>
  );
};
