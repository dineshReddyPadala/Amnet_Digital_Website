'use client';

import { FormEvent, useRef } from 'react';
import { useToast } from '@/components/ui/ToastProvider';

const SERVICE_OPTIONS = [
  'Amnet Data Foundry',
  'Amnet Agent Foundry',
  'AIDLC',
  'AI-Powered DAM',
  'AI / ML',
  'Advanced Analytics',
  'Data Engineering',
  'Data Management',
  'Cloud Services',
  'IDP Solution',
  'User Experience',
  'Strategy & Consulting',
  'Data Annotation',
  'Quality Assurance',
  'Swift Insights',
  'Swift Data',
  'Careers / Job application',
];

const fieldClass =
  'w-full py-[14px] px-4 rounded-xl border-[1.5px] border-line bg-paper font-body text-[15px] text-ink transition-colors focus:outline-none focus:border-gold focus:shadow-[0_0_0_4px_rgba(109,92,255,0.15)]';
const labelClass = 'block font-mono text-[11.5px] tracking-[0.14em] uppercase text-muted mb-[7px]';

export function ContactForm() {
  const { showToast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const firstName = nameInput.value.split(' ')[0] || 'there';
    showToast(
      <>
        Thanks, <b>{firstName}</b> — an Amnet architect will reach out within one business day.
      </>,
    );
    form.reset();
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid grid-cols-2 mobile:grid-cols-1 gap-4">
      <div>
        <label htmlFor="cf-name" className={labelClass}>
          Name *
        </label>
        <input id="cf-name" name="name" required placeholder="Jane Smith" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="cf-company" className={labelClass}>
          Company *
        </label>
        <input id="cf-company" name="company" required placeholder="Acme Corp" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="cf-email" className={labelClass}>
          Business email *
        </label>
        <input id="cf-email" name="email" type="email" required placeholder="jane@acme.com" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="cf-phone" className={labelClass}>
          Phone
        </label>
        <input id="cf-phone" name="phone" type="tel" placeholder="+1 555 000 0000" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="cf-title" className={labelClass}>
          Job title
        </label>
        <input id="cf-title" name="title" placeholder="CTO" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="cf-svc" className={labelClass}>
          Required service *
        </label>
        <select id="cf-svc" name="service" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a service…
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="col-span-2 mobile:col-span-1">
        <label htmlFor="cf-msg" className={labelClass}>
          Message *
        </label>
        <textarea
          id="cf-msg"
          name="message"
          required
          placeholder="Tell us about your challenge, timeline, and what success looks like…"
          className={`${fieldClass} min-h-[130px] resize-y`}
        />
      </div>
      <div className="col-span-2 mobile:col-span-1">
        <button
          type="submit"
          className="inline-flex items-center gap-2.5 rounded-full font-semibold font-display py-[15px] px-7 text-[15.5px] bg-molten text-white shadow-[0_12px_30px_-10px_rgba(86,70,229,0.5)] hover:-translate-y-0.5 transition-transform group"
        >
          Send Message
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="transition-transform group-hover:translate-x-1">
            <path d="M10 1l5 5-5 5M15 6H1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </form>
  );
}
