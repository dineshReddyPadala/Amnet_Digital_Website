import { ContactForm } from '@/components/forms/ContactForm';

/** Two-panel "Let's get started" band: pitch on dark, the site's ContactForm on light. */
export function ContactPanel() {
  return (
    <section id="contact" className="grid grid-cols-[40%_60%] tablet:grid-cols-1">
      <div className="bg-midnight text-white flex flex-col justify-center px-20 py-16 tablet:px-7">
        <h2 className="text-[30px] font-semibold tracking-normal text-white">Let&apos;s get started</h2>
        <p className="text-[15px] font-semibold leading-snug mt-3 max-w-[300px]">
          Are you ready to become a digital-first organization?
        </p>
        <p className="text-[12px] leading-[1.5] text-white/80 mt-12 max-w-[330px]">
          Amnet Digital is an AI and data-driven technology partner helping enterprises turn data and emerging
          technologies into measurable business outcomes. We bring together Data Engineering, Generative AI, Agentic AI,
          Advanced Analytics, Digital Engineering, Cloud and Intelligent Automation to build trusted data foundations
          and secure, scalable, production-ready enterprise solutions.
        </p>
      </div>
      <div className="bg-[#F4F4F7] px-20 py-14 tablet:px-7">
        <ContactForm />
      </div>
    </section>
  );
}
